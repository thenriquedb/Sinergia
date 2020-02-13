import React, { useEffect, useState, } from 'react';
import { Animated } from "react-native";

import { connect } from 'react-redux'

import Header from "./Header";
import RoomListEmpty from "./RoomListEmpty";
import ActionButton from 'react-native-action-button';
import CardEquipment from "../../../components/Cards/CardEquipment/index";

import Colors from '../../../styles/colors';
import { Container, Equipments, EquipmentsListContainer, EquipmentsList } from './styles';

function Room(props) {
  const { navigation, room, allRooms } = props;

  const [equipmentHigherConsumption, setEquipmentHigherConsumption] = useState('');
  const [totalTarifaConvencional, setTotalTarifaConvencional] = useState(0);
  const [totalTarifaBranca, setTotalTarifaBranca] = useState(0);
  const [kwMonthly, setKwMonthly] = useState(0);

  const scrollOffset = new Animated.Value(0);
  const offsetBounce = new Animated.Value(10);

  useEffect(() => {
    Animated.spring(offsetBounce, {
      toValue: 0,
      velocity: 20,
      bounciness: 20,
      useNativeDriver: true
    }).start();

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

  return (
    <Container>
      {!room.equipments.length ?
        <RoomListEmpty
          navigation={navigation}
          roomName={room.name} />
        :
        (
          <Equipments>
            <Header
              equipmentHigherConsumption={equipmentHigherConsumption}
              totalTarifaConvencional={totalTarifaConvencional}
              totalTarifaBranca={totalTarifaBranca}
              kwMonthly={kwMonthly}
              room={room}
              navigation={navigation}
              reload={allRooms}
              scrollOffset={scrollOffset}
            />

            <EquipmentsListContainer>
              <EquipmentsList
                data={room.equipments}
                extraData={allRooms}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <CardEquipment
                    navigation={navigation}
                    equipment={item}
                    idRoom={room.id}
                  />
                )}
                scrollEventThrottle={16}
                onScroll={Animated.event([{
                  nativeEvent: {
                    contentOffset: { y: scrollOffset },
                    useNativeDriver: true
                  }
                }])}
                style={{
                  transform: [{
                    translateY: offsetBounce
                  }]
                }}
              />
            </EquipmentsListContainer>
          </Equipments>
        )
      }


      <ActionButton
        size={55}
        onPress={() => {
          navigation.navigate('NewEquipment', {
            idRoom: room.id,
            typeRoom: room.typeRoom
          });
        }}
        buttonColor={Colors.primary}
      />
    </Container>
  );
}

const mapStateToProps = (state, ownProps) => ({
  room: state.houseReducer.rooms.find(item => item.id === ownProps.navigation.getParam('roomId')),
  allRooms: state.houseReducer.rooms
});

const mapDispatchToProps = dispatch => {
  return {
    editEquipment: (idRoom, idEquipment, newEquipment) => dispatch({
      type: 'EDIT_EQUIPMENT', payload: { idRoom, idEquipment, newEquipment },
    }),
    setRoomMonthlyExpenses: (idRoom, totalTarifaConvencional, totalTarifaBranca) =>
      dispatch({
        type: 'SET_ROOM_MONTHLY_EXPENSES',
        payload: { idRoom, totalTarifaConvencional, totalTarifaBranca },
      }),
    setRoomKwMonthly: (idRoom, totalKwMonthly) =>
      dispatch({
        type: 'SET_ROOM_KW_MONTHLY',
        payload: { idRoom, totalKwMonthly },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
