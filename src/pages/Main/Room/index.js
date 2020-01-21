import React, { Component } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from "./Header/index";

// redux
import { connect } from 'react-redux';

// components
import CardEquipment from '../../../components/Cards/CardEquipment';
import HiddenCard from '../../../components/Cards/CardEquipment/HiddenCard';
import { SwipeListView } from 'react-native-swipe-list-view';
import ActionButton from 'react-native-action-button';

// styles
import {
  EquipmentsList, Container, Icon, Scroll,
  ContainerNoEquipment
} from './styles';

import Colors from '../../../styles/colors';
import { TextBold, TextLight, Text } from '../../../styles/fonts';

class Room extends Component {
  constructor(props) {
    super(props);

    this.state = {
      room: this.props.rooms.find(item => item.id === this.props.navigation.getParam('roomId')),
      EquipmentsListUpdate: false,
      equipmentHigherConsumption: ''
    };

    this.toggleNewEquipment = this.toggleNewEquipment.bind(this);
    this.renderEquipmentsList = this.renderEquipmentsList.bind(this);
    this.renderNoEquipment = this.renderNoEquipment.bind(this);

    this.reRenderEquipmentsList = this.reRenderEquipmentsList.bind(this);
  }

  // Quando algum equipamento for deletado ou editado aé necessario recalcular o KW
  reRenderEquipmentsList() {
    let s = this.state;
    s.EquipmentsListUpdate = !s.EquipmentsListUpdate;
    this.setState(s);
  }


  // Adcionar novo equipamento ao cômodo
  toggleNewEquipment() {
    this.props.navigation.navigate('NewEquipment1', {
      idRoom: this.state.room.id,
      typeRoom: this.state.room.typeRoom
    });
  }

  //  Se o comôdo não possuir nenhum equipamento cadastrado
  renderNoEquipment() {
    return (
      <ContainerNoEquipment>
        <MaterialCommunityIcons name="candle" size={100} color="#707070" />

        <TextBold textAlign={'center'} color={'#707070'} fontSize={'h4'}> Nenhum equipamento cadastrado </TextBold>
        <TextLight color="#707070" textAlign='center' fontSize='h5'>
          "{this.state.room.name}" não possui nenhum equipamento cadastrado.
       </TextLight>

        <ActionButton
          size={55}
          onPress={() => this.toggleNewEquipment()}
          buttonColor={Colors.primary}
        />
      </ContainerNoEquipment>
    );
  }

  //  Se o comôdo possuir pelo menos um equipamento cadastrado
  renderEquipmentsList() {
    return (
      <Container>
        <Header
          room={this.state.room}
          editRoom={() => this.setState({ modalIsVisible: !this.state.modalIsVisible })}
        />

        <EquipmentsList >
          <SwipeListView
            extraData={this.state.EquipmentsListUpdate}
            data={this.state.room.equipments}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            rightOpenValue={-100}
            disableRightSwipe={true}
            renderHiddenItem={({ item, index }) => (
              <HiddenCard
                reRender={this.reRenderEquipmentsList}
                roomName={this.state.room.name}
                idRoom={this.state.room.id}
                idEquipment={item.id} />
            )}
            renderItem={({ item }) => <CardEquipment equipment={item} />}
          />
        </EquipmentsList>

        <ActionButton
          size={55}
          onPress={() => this.toggleNewEquipment()}
          buttonColor={Colors.primary}
        />
      </Container>
    );
  }

  render() {
    return this.state.room.equipments.length
      ? this.renderEquipmentsList()
      : this.renderNoEquipment();
  }
}

const mapStateToProps = state => ({
  rooms: state.houseReducer.rooms,
});



const mapDispatchToProps = dispatch => {
  return {
    setRoomKwMonthly: (idRoom, totalKwMonthly) =>
      dispatch({
        type: 'SET_ROOM_KW_MONTHLY',
        payload: { idRoom, totalKwMonthly },
      }),
    setRoomMonthlyExpenses: (idRoom, totalTarifaConvencional, totalTarifaBranca) =>
      dispatch({
        type: 'SET_ROOM_MONTHLY_EXPENSES',
        payload: { idRoom, totalTarifaConvencional, totalTarifaBranca },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
