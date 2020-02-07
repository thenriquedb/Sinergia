import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, TouchableOpacity, TouchableHighlight, ToastAndroid, Animated } from 'react-native';

import Alert from "../../../components/Alert";
import ConfirmModal from "./ConfirmModal";

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
      isVisibleConfirmModal: false,
      offset: new Animated.Value(0)
    };

    this.EquipmentCard = this.EquipmentCard.bind(this);
    this.toggleSelectEquipment = this.toggleSelectEquipment.bind(this);
    this.toggleSaveButton = this.toggleSaveButton.bind(this);
    this.setCustomName = this.setCustomName.bind(this);
    this.saveRoom = this.saveRoom.bind(this);
  }

  componentDidMount() {
    Animated.spring(this.state.offset, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  }

  EquipmentCard(item, index) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ flex: 1 / 2 }}
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

  setCustomName(input) {

    let s = this.state;
    s.customName = input;
    this.setState(s)
  }

  saveRoom() {
    if (this.state.selectedRoomIndex != -1) {
      if (this.state.customName.length >= 4) {
        const found = this.props.rooms.find(item => item.name === this.state.customName);

        let room = {
          id: new Date().getTime().toString(),
          name: this.state.customName,
          typeRoom: this.state.selectedRoom,
          icon: this.state.icon,
          totalKw: 0,
          totalAmount: 0,
          equipments: [],
          equipmentHigherConsumption: '',

          tarifaBranca: {
            monthlyExpenses: 0,
          },

          tarifaConvencional: {
            monthlyExpenses: 0,
          },
        };

        if (!found) {
          this.props.addNewRoom(room);
          this.setState({
            modalIsVisible: !this.state.modalIsVisible,
            alertMessage: `O cômodo ${this.state.customName} foi cadastrado com sucesso!`
          });
          this.setState({ isVisibleConfirmModal: !this.state.isVisibleConfirmModal });
        } else {
          this.setState({
            modalIsVisible: !this.state.modalIsVisible,
            alertMessage: `O cômodo ${this.state.customName} já esta cadastrado. `
          });
        }
      }
    }
  }

  toggleSaveButton() {
    if (this.state.selectedRoomIndex != -1) {
      this.setState({ isVisibleConfirmModal: !this.state.isVisibleConfirmModal });
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
          cancel={() => this.setState({ modalIsVisible: !this.state.modalIsVisible })}
          isVisible={this.state.modalIsVisible} />

        <EquipmentContainer>
          <FlatList
            data={this.state.rooms}
            extraData={this.state.selectedRoomIndex}
            keyExtractor={item => item.name}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return this.EquipmentCard(item, index);
            }}
          />
        </EquipmentContainer>

        <Footer>
          <TouchableHighlight onPress={() => this.toggleSaveButton()}>
            <ContinueButton
              style={
                this.state.selectedRoomIndex != -1 ? '' : styles.ContinueButton
              }>
              <TextLight
                color={this.state.selectedRoomIndex === -1 ? '#000' : '#fff'}
                fontSize={'h5'}>
                Salvar
              </TextLight>
            </ContinueButton>
          </TouchableHighlight>
        </Footer>

        <ConfirmModal
          customName={this.state.customName}
          setCustomName={this.setCustomName}
          confirm={this.saveRoom}
          setIsVisible={() => this.setState({ isVisibleConfirmModal: !this.state.isVisibleConfirmModal })}
          isVisible={this.state.isVisibleConfirmModal} />
      </Container>
    );
  }
}


const mapStateToProps = state => ({
  rooms: state.houseReducer.rooms,
});

const mapDispatchToProps = dispatch => {
  return {
    addNewRoom: (room) =>
      dispatch({ type: 'ADD_ROOM', payload: { room } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRoom);
