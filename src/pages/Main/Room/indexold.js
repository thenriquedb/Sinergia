import React, { Component } from 'react';
import { Animated } from "react-native";

// redux
import { connect } from 'react-redux';

// components
import Header from "./Header/index";
import CardEquipment from '../../../components/Cards/CardEquipment';
import HiddenCard from '../../../components/Cards/CardEquipment/HiddenCard';
import { SwipeListView } from 'react-native-swipe-list-view';
import ActionButton from 'react-native-action-button';
import EditButton from "./EditButton";

import Lottie from "lottie-react-native";
import emptyAnimation from "../../../assets/empty.json"

// styles
import {
  EquipmentsList,
  Container,
  EquipmentsListContainer,
  ContainerNoEquipment,
  Scroll
} from './styles';

import Colors from '../../../styles/colors';
import { TextBold, TextLight } from '../../../styles/fonts';

class Room extends Component {
  constructor(props) {
    super(props);

    this.state = {
      room: this.props.rooms.find(item => item.id === this.props.navigation.getParam('roomId')),
      EquipmentsListUpdate: false,
      equipmentHigherConsumption: '',
      offsetList: new Animated.Value(40),
      scrollOffset: new Animated.Value(0)
    };

    this.toggleNewEquipment = this.toggleNewEquipment.bind(this);
    this.renderEquipmentsList = this.renderEquipmentsList.bind(this);
    this.renderNoEquipment = this.renderNoEquipment.bind(this);

    this.reRenderEquipmentsList = this.reRenderEquipmentsList.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({ room: this.state.room });

    Animated.spring(this.state.offsetList,
      {
        toValue: 0,
        velocity: 10,
        bounciness: 20,
        useNativeDriver: true
      }).start();
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
    // this.reRenderEquipmentsList();
  }

  //  Se o comôdo não possuir nenhum equipamento cadastrado
  renderNoEquipment() {
    return (
      <ContainerNoEquipment>
        <Lottie
          source={emptyAnimation}
          autoPlay
          loop
          speed={2}
          resizeMode={"cover"}
          autoSize
          style={{ height: 200, width: 200 }}
        />
        <TextBold textAlign={'center'} color={'#999'} fontSize={'h4'}> Nenhum equipamento cadastrado </TextBold>
        <TextLight color="#999" textAlign='center' fontSize='h5'>
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
        <Scroll>
          <Header
            EquipmentsListUpdate={this.state.EquipmentsListUpdate}
            room={this.state.room}
          />

          <EquipmentsList>
            <EquipmentsListContainer style={{
              transform: [
                { translateY: this.state.offsetList }
              ]
            }}>
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
            </EquipmentsListContainer>
          </EquipmentsList>
        </Scroll>

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

Room.navigationOptions = ({ navigation }) => {
  const room = navigation.getParam('room');

  return {
    headerRight: <EditButton room={room} />
  }
}

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
