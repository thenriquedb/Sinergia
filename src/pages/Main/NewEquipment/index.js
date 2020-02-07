import React, { Component } from 'react';
import { FlatList, TouchableOpacity, TouchableHighlight, ToastAndroid, Animated } from 'react-native';

// Lista de equipamentos
import equipmentsList from '../../../utilities/equipmentsList';

// styles
import { TextLight } from '../../../styles/fonts';
import Colors from '../../../styles/colors';
import {
  Container,
  RoomCard,
  Icon,
  ContinueButton,
  RoomContainer,
  Footer,
  RoomCardLabel,
  styles
} from './styles';

export default class NewEquipment extends Component {
  constructor(props) {
    super(props);

    const allEquipments = [
      ...equipmentsList.rooms['default'],
      ...equipmentsList.rooms['bedroom'],
      ...equipmentsList.rooms['bathroom'],
      ...equipmentsList.rooms['externalArea'],
      ...equipmentsList.rooms['serviceArea'],
      ...equipmentsList.rooms['kitchen'],
    ].sort((a, b) => {
      return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
    });

    this.state = {
      equipments: this.props.navigation.getParam('typeRoom') === 'other' ?
        [...allEquipments]
        :
        [
          ...equipmentsList.rooms['default'],
          ...equipmentsList.rooms[this.props.navigation.getParam('typeRoom')],
        ]
          .map(item => {
            item.class = styles.SelectedEquipmentCard;
            item.select = false;
            return item;
          })
          .sort((a, b) => {
            return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
          }),
      selectedEquipment: -1,
      offset: new Animated.Value(0)
    };

    this.RoomCard = this.RoomCard.bind(this);
    this.toggleSelectEquipment = this.toggleSelectEquipment.bind(this);
    this.toggleContinueButton = this.toggleContinueButton.bind(this);
  }

  componentDidMount() {
    Animated.spring(this.state.offset, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  }

  RoomCard(item, index) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ flex: 1 / 2 }}
        onPress={() => this.toggleSelectEquipment(index)}>
        <RoomCard
          style={[item.select && item.class, {
            transform: [
              {
                scale: this.state.offset.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1]
                })
              }]
          }]}>

          <Icon resizeMode={"contain"} source={item.icon.dark} />
          <RoomCardLabel
            textAlign={'center'}
            color={item.select ? Colors.primary : Colors.darkGray2}>
            {item.name}
          </RoomCardLabel>
        </RoomCard>
      </TouchableOpacity>
    );
  }

  toggleSelectEquipment(index) {
    let s = this.state;

    // Se nenhum equipamento estiver selecionado
    if (this.state.selectedEquipment === -1) {
      s.selectedEquipment = index;
      s.equipments[s.selectedEquipment].select = true;
    }

    // Se o equipamento ja estiver selecionado ele sera desmarcado
    else if (this.state.selectedEquipment === index) {
      s.equipments[s.selectedEquipment].select = !s.equipments[s.selectedEquipment].select;
      s.selectedEquipment = -1;
    }

    // Se ja tiver um equipamento selecionado
    else if (this.state.selectedEquipment || this.state.selectedEquipment == '0') {
      s.equipments[s.selectedEquipment].select = !s.equipments[s.selectedEquipment].select;

      s.selectedEquipment = index;
      s.equipments[s.selectedEquipment].select = !s.equipments[s.selectedEquipment].select;
    }

    this.setState(s);
  }

  toggleContinueButton() {
    if (this.state.selectedEquipment != -1) {
      this.props.navigation.navigate('Equipment', {
        equipment: this.state.equipments[this.state.selectedEquipment],
        action: 'add',
        idRoom: this.props.navigation.getParam('idRoom'),
      });
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'É necessário selecionar um cômodo para continuar',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
  }

  render() {
    return (
      <Container>
        <RoomContainer>
          <FlatList
            data={this.state.equipments}
            extraData={this.state.selectedEquipment}
            keyExtractor={item => item.name}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return this.RoomCard(item, index);
            }}
          />
        </RoomContainer>

        <Footer>
          <TouchableHighlight onPress={() => this.toggleContinueButton()}>
            <ContinueButton
              style={
                this.state.selectedEquipment != -1 ? '' : styles.ConitnueButton
              }>
              <TextLight
                color={this.state.selectedEquipment === -1 ? '#000' : '#fff'}
                fontSize={'h5'}>
                Continuar
              </TextLight>
            </ContinueButton>
          </TouchableHighlight>
        </Footer>
      </Container>
    );
  }
}
