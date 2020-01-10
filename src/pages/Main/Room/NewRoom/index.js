import React, { Component } from 'react';
import { FlatList, Image, TouchableOpacity, TouchableHighlight, ToastAndroid, Alert, View, KeyboardAvoidingView } from 'react-native';

// redux
import { connect } from 'react-redux';

// components
import Input from '../../../../components/Input/index';

// styles
import { Container, EquipmentCard, SaveBtn, ContinueButton, EquipmentContainer, Footer, styles } from './styles';
import { Text, TextLight, TextBold } from '../../../../styles/fonts';
import Colors from '../../../../styles/colors';

// utilities
import roomsList from '../../../../utilities/roomsList';

class NewRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: roomsList.map(item => {
        item.class = styles.SelectedEquipmentCard;
        item.select = false;
        return item;
      }),
      selectedRoomIndex: -1,
      selectedRoom: '',
      icon: [],
      customName: ''
    };

    this.equipmentCard = this.equipmentCard.bind(this);
    this.toggleSelectEquipment = this.toggleSelectEquipment.bind(this);
    this.toggleContinueButton = this.toggleContinueButton.bind(this);
  }

  equipmentCard(item, index) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ flex: 1 / 3 }}
        onPress={() => this.toggleSelectEquipment(index)}>
        <EquipmentCard style={item.select ? item.class : ''}>
          <Image style={{ width: 75, height: 70, resizeMode: 'contain' }} source={item.icon.dark} />

          <TextLight
            textAlign={'center'}
            color={item.select ? Colors.primary : Colors.darkGray2}
            fontSize={'h5'}>
            {item.name}
          </TextLight>
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
    else if (this.state.selectedRoomIndex) {
      s.rooms[s.selectedRoomIndex].select = !s.rooms[s.selectedRoomIndex].select;
      s.selectedRoomIndex = index;
      s.rooms[s.selectedRoomIndex].select = !s.rooms[s.selectedRoomIndex].select;

      s.selectedRoom = s.rooms[s.selectedRoomIndex].value;
      s.customName = s.rooms[s.selectedRoomIndex].name;
      s.icon = s.rooms[s.selectedRoomIndex].icon;
    }

    this.setState(s);
  }

  toggleContinueButton() {
    if (this.state.selectedRoomIndex != -1) {
      if (this.state.customName.length >= 4) {
        const found = this.props.rooms.find(item => item.name === this.state.customName);

        if (!found) {
          try {
            this.props.addNewRoom(this.state.customName, this.state.selectedRoom, this.state.icon);
            Alert.alert('O cômodo ' + this.state.customName + ' foi cadastrado com sucesso!');
            setName('');
          } catch (error) {
            Alert.alert('Não foi possivel cadastrar o cômodo ' + this.state.customName + '.');
          }
        } else {
          Alert.alert('Não foi possível cadastrar o cômodo ' + this.state.customName + ' pois o mesmo já foi cadastrado.');
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
          <TouchableHighlight onPress={() => this.toggleContinueButton()}>
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
        {/* </KeyboardAvoidingView> */}

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
