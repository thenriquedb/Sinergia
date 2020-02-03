import React, { useEffect, useState, } from 'react';
import { Animated } from "react-native";

import { connect } from 'react-redux'

import EditButton from "./EditButton";
import Header from "./Header";
import RoomListEmpty from "./RoomListEmpty";
import EquipmentsList from "./EquipmentsList";
import ActionButton from 'react-native-action-button';

import Colors from '../../../styles/colors';
import { Container, Equipments, EquipmentsListContainer } from './styles';

function Room(props) {
  const { navigation, room, allRooms } = props;

  const [equipmentHigherConsumption, setEquipmentHigherConsumption] = useState('');
  const [totalTarifaConvencional, setTotalTarifaConvencional] = useState(0);
  const [totalTarifaBranca, setTotalTarifaBranca] = useState(0);
  const [kwMonthly, setKwMonthly] = useState(0);

  const scrollOffset = new Animated.Value(0);

  useEffect(() => {
    setKwMonthly(room.equipments.reduce((preVal, elem) =>
      preVal + elem.kwMonthly, 0));

    setTotalTarifaBranca(room.equipments.reduce((preVal, elem) =>
      preVal + elem.tarifaBranca.monthlyExpenses, 0));

    setTotalTarifaConvencional(room.equipments.reduce((preVal, elem) =>
      preVal + elem.tarifaConvencional.monthlyExpenses, 0));

    getEquipmentHigherConsumption();
  }, [allRooms]);

  useEffect(() => {
    props.setRoomKwMonthly(room.id, kwMonthly);
    props.setRoomMonthlyExpenses(room.id, totalTarifaConvencional, totalTarifaBranca);

  }, [totalTarifaBranca, totalTarifaBranca, kwMonthly]);


  function getEquipmentHigherConsumption() {
    let highestConsume = 0;
    let highestConsumeName = '';

    room.equipments.forEach(item => {
      if (item.kwMonthly > highestConsume) {
        highestConsume = item.kwMonthly;
        highestConsumeName = item.name;
      }
    });

    setEquipmentHigherConsumption(highestConsumeName);
  }

  function handleScroll(event) {
    scrollOffset.setOffset()
    this.setState({ scrollPosition: event.nativeEvent.contentOffset.y });

  }

  return (
    <Container>
      {!room.equipments.length ?
        <RoomListEmpty
          roomName="roomName" />
        :
        (
          <Equipments>
            <Header
              equipmentHigherConsumption={equipmentHigherConsumption}
              totalTarifaConvencional={totalTarifaConvencional}
              totalTarifaBranca={totalTarifaBranca}
              kwMonthly={kwMonthly}
              roomName={room.name}
              roomIcon={room.icon.light}
              reload={allRooms}
            />
            <EquipmentsListContainer>
              <EquipmentsList
                room={room}
                relaod={allRooms}
              />
            </EquipmentsListContainer>
          </Equipments>

        )
      }
      <ActionButton
        size={55}
        onPress={() => {
          navigation.navigate('NewEquipment1', {
            idRoom: room.id,
            typeRoom: room.typeRoom
          });
        }}
        buttonColor={Colors.primary}
      />
    </Container>
  );
}

Room.navigationOptions = ({ navigation }) => {
  const room = navigation.getParam('room');

  return {
    headerRight: <EditButton room={room} />
  }
}


const mapStateToProps = (state, ownProps) => ({
  room: state.houseReducer.rooms.find(item => item.id === ownProps.navigation.getParam('roomId')),
  allRooms: state.houseReducer.rooms
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
