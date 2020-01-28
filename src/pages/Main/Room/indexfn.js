import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from "./Header/index";

// redux
import { connect } from 'react-redux';

// components
import CardEquipment from '../../../components/Cards/CardEquipment';
import HiddenCard from '../../../components/Cards/CardEquipment/HiddenCard';
import { SwipeListView } from 'react-native-swipe-list-view';
import ActionButton from 'react-native-action-button';
import EditButton from "./EditButton";

// styles
import { EquipmentsList, Container, ContainerNoEquipment } from './styles';

import Colors from '../../../styles/colors';
import { TextBold, TextLight } from '../../../styles/fonts';



const Room = (props) => {
  const { navigation } = props;
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const roomId = navigation.getParam('roomId');
    const { rooms } = props;

    console.log("useeffect");
    console.log("rooms: ", rooms)
    console.log("roomId: ", roomId)
    setRoom(rooms.find(item => item.id === roomId));
  }, []);

  useEffect(() => {
    console.log("set room")
    navigation.setParams({ room })
  }, [room]);


  // Quando algum equipamento for deletado ou editado aé necessario recalcular o KW
  // reRenderEquipmentsList() {
  //   let s = this.state;
  //   s.EquipmentsListUpdate = !s.EquipmentsListUpdate;
  //   this.setState(s);
  // }


  // Adcionar novo equipamento ao cômodo
  const toggleNewEquipment = () => {
    this.props.navigation.navigate('NewEquipment1', {
      idRoom: room.id,
      typeRoom: room.typeRoom
    });
  }

  //  Se o comôdo não possuir nenhum equipamento cadastrado
  const renderNoEquipment = () => {
    return (
      <ContainerNoEquipment>
        <MaterialCommunityIcons name="candle" size={100} color="#707070" />

        <TextBold textAlign={'center'} color={'#707070'} fontSize={'h4'}> Nenhum equipamento cadastrado </TextBold>
        <TextLight color="#707070" textAlign='center' fontSize='h5'>
          "{this.state.room.name}" não possui nenhum equipamento cadastrado.
       </TextLight>

        <ActionButton
          size={55}
          onPress={() => toggleNewEquipment()}
          buttonColor={Colors.primary}
        />
      </ContainerNoEquipment>
    );
  }

  //  Se o comôdo possuir pelo menos um equipamento cadastrado
  const renderEquipmentsList = () => {
    return (
      <Container>
        <Header
          room={room}
        />

        <EquipmentsList >
          <SwipeListView
            data={room.equipments}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            rightOpenValue={-100}
            disableRightSwipe={true}
            renderHiddenItem={({ item, index }) => (
              <HiddenCard
                reRender={() => { }}
                roomName={room.name}
                idRoom={room.id}
                idEquipment={item.id} />
            )}
            renderItem={({ item }) => <CardEquipment equipment={item} />}
          />
        </EquipmentsList>



        <ActionButton
          size={55}
          onPress={() => toggleNewEquipment()}
          buttonColor={Colors.primary}
        />
      </Container>
    );
  }

  if (room) {
    console.log("room if", room)
    return (
      <>
        {room.equipments.length > 0 ? renderEquipmentsList() : renderNoEquipment()}
      </>
    );
  } else {
    return null
  }
};

const mapStateToProps = state => ({
  rooms: state.houseReducer.rooms,
});

Room.navigationOptions = ({ navigation }) => {
  const room = navigation.getParam('room');
  console.log("room navigationOptions: ", room);

  return {
    headerRight: room && <EditButton room={room} />
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
