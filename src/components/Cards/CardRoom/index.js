import React from 'react';
import { TouchableHighlight, Alert } from 'react-native';
import { connect } from 'react-redux';

import Swipeable from "react-native-gesture-handler/Swipeable";

// styles
import { Container, TotalPrice, Details } from './styles';
import { TextLight, TextBold } from '../../../styles/fonts';

import HiddenCard from "../HiddenCard";;

import { moneyMask, kwMask } from "../../../util/masks";

const CardRoom = props => {
  const { room } = props;

  function deleteRoom() {
    Alert.alert(
      'Excluir',
      `Você deseja excluir o cômodo ${room.name}? Esta ação não poderá ser desfeita futuramente.`, [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Confirmar', onPress: () => {
          props.deleteRoom(room.id);
          props.refreshList();
        }
      },
    ],
      { cancelable: true },
    );
  }

  return (
    <Swipeable
      renderRightActions={HiddenCard}
      onSwipeableRightOpen={() => deleteRoom()}
    >

      <TouchableHighlight
        onPress={() => props.toggleRoomCard(room)}
        style={{ marginBottom: 15 }}
        underlayColor="#FDFDFD">
        <Container>
          <Details>
            <TextLight fontSize="h4">{room.name} </TextLight>
            <TextLight fontSize="h5">{room.equipments.length} equipamentos</TextLight>
            <TextLight fontSize="h5">{kwMask(room.totalKw)} </TextLight>
          </Details>

          <TotalPrice>
            <TextLight fontSize="h5"> Valor total</TextLight>
            <TextBold fontSize="h3">
              {
                props.tarifaUsed === "convencional" ?
                  moneyMask(room.tarifaConvencional.monthlyExpenses) :
                  moneyMask(room.tarifaBranca.monthlyExpenses)
              }
            </TextBold>
          </TotalPrice>
        </Container>
      </TouchableHighlight>
    </Swipeable>
  );
};

const mapStateToProps = state => ({
  tarifaUsed: state.houseReducer.tarifa
});

const mapDispatchToProps = dispatch => {
  return {
    deleteRoom: (id) => dispatch({ type: 'DELETE_ROOM', payload: { id } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardRoom);
