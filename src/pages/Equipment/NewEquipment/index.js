import React, {Component} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';

import {
  Container,
  EquipmentCard,
  ConitnueButton,
  EquipmentContainer,
  Footer,
  FooterTextContainer,
  styles,
} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Lista de equipamentos
import equipmentsList from '../../../utilities/equipmentsList';

// styles
import {TextBold, TextThin, TextLight, Text} from '../../../styles/fonts';
import Colors from '../../../styles/colors';

export default class NewEquipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipments: [
        ...equipmentsList.rooms['default'],
        ...equipmentsList.rooms['bedroom'],
      ]
        .map(item => {
          item.class = styles.SelectedEquipmentCard;
          item.select = false;
          return item;
        })
        .sort((a, b) => {
          return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
        }),
      selectedEquipment: null,
    };

    this.equipmentCard = this.equipmentCard.bind(this);
    this.toggleSelectEquipment = this.toggleSelectEquipment.bind(this);
  }

  equipmentCard(item, index) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{flex: 1 / 3}}
        onPress={() => this.toggleSelectEquipment(index)}>
        <EquipmentCard style={item.select ? item.class : ''}>
          <MaterialCommunityIcons
            name="radio"
            size={60}
            color={item.select ? Colors.primary : Colors.darkGray2}
          />

          <TextLight
            textAlign={'center'}
            color={item.select ? Colors.primary : Colors.darkGray2}
            fontSize={4}>
            {item.name}
          </TextLight>
        </EquipmentCard>
      </TouchableOpacity>
    );
  }

  toggleSelectEquipment(index) {
    let s = this.state;

    // Se nenhum equipamento estiver selecionado
    if (!this.state.selectedEquipment) {
      s.selectedEquipment = index;
      s.equipments[s.selectedEquipment].select = true;
    }

    // Se o equipamento ja estiver selecionado ele sera desmarcado
    else if (this.state.selectedEquipment === index) {
      s.equipments[s.selectedEquipment].select = !s.equipments[
        s.selectedEquipment
      ].select;
      s.selectedEquipment = false;
    }

    // Se ja tiver um equipamento selecionado
    else if (this.state.selectedEquipment) {
      s.equipments[s.selectedEquipment].select = !s.equipments[
        s.selectedEquipment
      ].select;

      s.selectedEquipment = index;
      s.equipments[s.selectedEquipment].select = !s.equipments[
        s.selectedEquipment
      ].select;
    }

    this.setState(s);
  }

  render() {
    return (
      <Container>
        <EquipmentContainer>
          <FlatList
            data={this.state.equipments}
            extraData={this.state.selectedEquipment}
            keyExtractor={item => item.name}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return this.equipmentCard(item, index);
            }}
          />
        </EquipmentContainer>

        <Footer>
          <TouchableHighlight
            onPress={() => {
              this.state.selectedEquipment
                ? alert()
                : ToastAndroid.showWithGravityAndOffset(
                    'É necessário selecionar um cômodo para continuar',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    25,
                    50,
                  );
            }}>
            <ConitnueButton
              style={this.state.selectedEquipment ? '' : styles.ConitnueButton}>
              <TextLight
                color={this.state.selectedEquipment ? '#fff' : '#000'}
                fontSize={'h5'}>
                Continuar
              </TextLight>
            </ConitnueButton>
          </TouchableHighlight>
        </Footer>
      </Container>
    );
  }
}
