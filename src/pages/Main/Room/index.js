import React, { useEffect, useState, } from 'react';
import { connect } from 'react-redux'

import { createSelector } from "reselect";

import EditButton from "./EditButton";
import Header from "./Header";
import RoomListEmpty from "./RoomListEmpty";
import EquipmentsList from "./EquipmentsList";
import ActionButton from 'react-native-action-button';

import Colors from '../../../styles/colors';
import { Container, Scroll } from './styles';

function Room(props) {
  const { navigation, room, allRooms, setRoomKwMonthly, setRoomMonthlyExpenses } = props;

  const [equipmentHigherConsumption, setEquipmentHigherConsumption] = useState('');
  const [totalTarifaConvencional, setTotalTarifaConvencional] = useState(0);
  const [totalTarifaBranca, setTotalTarifaBranca] = useState(0);
  const [kwMonthly, setKwMonthly] = useState(0);


  const getEquipmentHigherConsumption = () => {
    let highestConsume = room.equipments[0].kwMonthly;
    let highestConsumeName = room.equipments[0].name;

    room.equipments.forEach(item => {
      if (item.kwMonthly > highestConsume) {
        highestConsume = item.kwMonthly;
        highestConsumeName = item.name;
      }
    });

    setEquipmentHigherConsumption(highestConsumeName);
  }



  useEffect(() => {
    setKwMonthly(room.equipments.reduce((preVal, elem) =>
      preVal + elem.kwMonthly, 0));

    setTotalTarifaBranca(room.equipments.reduce((preVal, elem) =>
      preVal + elem.tarifaBranca.monthlyExpenses, 0));

    setTotalTarifaConvencional(room.equipments.reduce((preVal, elem) =>
      preVal + elem.tarifaConvencional.monthlyExpenses, 0));

    getEquipmentHigherConsumption();
  }, [allRooms])

  return (
    <Container>
      {!room.equipments.length ?
        <RoomListEmpty
          roomName="roomName" />
        :
        (
          <>
            <Header
              equipmentHigherConsumption={equipmentHigherConsumption}
              totalTarifaConvencional={totalTarifaConvencional}
              totalTarifaBranca={totalTarifaBranca}
              kwMonthly={kwMonthly}
              roomName={room.name}
              roomIcon={room.icon.light}
              reload={allRooms}
            />
            <EquipmentsList
              room={room}
              relaod={allRooms}
            />
          </>
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
