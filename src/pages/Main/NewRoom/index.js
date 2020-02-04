import React, { Component } from 'react';
import { FlatList, TouchableOpacity, TouchableHighlight, ToastAndroid, View, Animated } from 'react-native';
import Alert from "../../../components/Alert";

// redux
import { connect } from 'react-redux';

// components
import Input from '../../../components/Input/index';

// styles
import {
  Container,
  CardLabel,
  EquipmentCard,
  Icon,
  ContinueButton,
  EquipmentContainer,
  Footer,
  styles
} from './styles';
import { TextLight } from '../../../styles/fonts';
import Colors from '../../../styles/colors';

// utilities
import roomsList from '../../../utilities/roomsList';

class NewRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: roomsList.map(item => {
        item.class = styles.SelectedRoomCard;
        item.select = false;
        return item;
      }),
      selectedRoomIndex: -1,
      selectedRoom: '',
      selectedRoom: '',
      alertMessage: '',
      modalIsVisible: false,
      icon: [],
      customName: '',
      offset: new Animated.Value(0)
    };

    this.equipmentCard = this.equipmentCard.bind(this);
    this.toggleSelectEquipment = this.toggleSelectEquipment.bind(this);
    this.toggleSaveButton = this.toggleSaveButton.bind(this);
  }

  componentDidMount() {
    Animated.spring(this.state.offset, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  }

  equipmentCard(item, index) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ flex: 1 / 3 }}
        onPress={() => this.toggleSelectEquipment(index)}>

        <EquipmentCard
          style={[item.select && item.class, {
            transform: [
              {
                scale: this.state.offset.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1]
                })
              }]
          }]}>
          <Icon
            resizeMode={"contain"}
            source={item.icon.dark} />

          <CardLabel
            color={item.select ? Colors.primary : Colors.darkGray2}>
            {item.name}
          </CardLabel>
        </EquipmentCard>
      </TouchableOpacity>
    );
  }

  toggleSelectEquipment(index) {
    let s = this.state;

    // Se nenhum equipamento estiver selecionado
    if (this.state.selectedRoomIndex === -1) {
      s.selectedRoomIndex = index;
      s.rooms[s.selectedRoomIndex].select = true;

      s.selectedRoom = s.rooms[s.selectedRoomIndex].value;
      s.customName = s.rooms[s.selectedRoomIndex].name;
      s.icon = s.rooms[s.selectedRoomIndex].icon;
    }

    // Se o equipamento ja estiver selecionado ele sera desmarcado
    else if (this.state.selectedRoomIndex === index) {
      s.rooms[s.selectedRoomIndex].select = !s.rooms[s.selectedRoomIndex].select;
      s.selectedRoomIndex = -1;

      s.selectedRoom = '';
      s.customName = '';
    }

    // Se ja tiver um equipamento selecionado
    else if (this.state.selectedRoomIndex || this.state.selectedRoomIndex == '0') {
      s.rooms[s.selectedRoomIndex].select = !s.rooms[s.selectedRoomIndex].select;
      s.selectedRoomIndex = index;
      s.rooms[s.selectedRoomIndex].select = !s.rooms[s.selectedRoomIndex].select;

      s.selectedRoom = s.rooms[s.selectedRoomIndex].value;
      s.customName = s.rooms[s.selectedRoomIndex].name;
      s.icon = s.rooms[s.selectedRoomIndex].icon;
    }

    this.setState(s);
  }

  toggleSaveButton() {
    if (this.state.selectedRoomIndex != -1) {
      if (this.state.customName.length >= 4) {
        const found = this.props.rooms.find(item => item.name === this.state.customName);

        if (!found) {
          this.props.addNewRoom(this.state.customName, this.state.selectedRoom, this.state.icon);
          this.setState({
            modalIsVisible: !this.state.modalIsVisible,
            alertMessage: `O cômodo ${this.state.customName} foi cadastrado com sucesso!`
          });
        } else {
          this.setState({
            modalIsVisible: !this.state.modalIsVisible,
            alertMessage: `O cômodo ${this.state.customName} já esta cadastrado.`
          });
        }
      }
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
        <Alert
          title={"Confirmar"}
          message={this.state.alertMessage}
          confirm={() => this.setState({ modalIsVisible: !this.state.modalIsVisible })}
          isVisible={this.state.modalIsVisible} />

        <View style={{ flex: 1 }}>
          <EquipmentContainer>
            <Input
              value={this.state.customName}
              onChangeText={customName => this.setState({ customName })}
              placeholder="Nome"
            />

            <FlatList
              style={{ marginTop: 30 }}
              data={this.state.rooms}
              extraData={this.state.selectedRoomIndex}
              keyExtractor={item => item.name}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return this.equipmentCard(item, index);
              }}
            />
          </EquipmentContainer>
        </View>

        <Footer>
          <TouchableHighlight onPress={() => this.toggleSaveButton()}>
            <ContinueButton
              style={
                this.state.selectedRoomIndex != -1 ? '' : styles.ConitnueButton
              }>
              <TextLight
                color={this.state.selectedRoomIndex === -1 ? '#000' : '#fff'}
                fontSize={'h5'}>
                Salvar
              </TextLight>
            </ContinueButton>
          </TouchableHighlight>
        </Footer>
      </Container>
    );
  }
}


const mapStateToProps = state => ({
  rooms: state.houseReducer.rooms,
});

const mapDispatchToProps = dispatch => {
  return {
    addNewRoom: (name, typeRoom, icon) =>
      dispatch({ type: 'ADD_ROOM', payload: { name, typeRoom, icon } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRoom);
