import React from 'react';
import { Alert } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { connect } from 'react-redux'

import HiddenCard from "../HiddenCard";

// styles
import { Container, Icon, IconContainer, Details } from './styles';
import { TextLight } from '../../../styles/fonts';

import roomList from '../../../utilities/roomsList';

function SimpleCardRoom(props) {
  const { room } = props;

  function toggleDelete() {
    Alert.alert(
      'Excluir',
      `Você deseja excluir o cômodo ${room.name}? Esta ação não poderá ser desfeita futuramente.`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        { text: 'Confirmar', onPress: () => props.deleteRoom(room.id) },
      ],
      { cancelable: true },
    );
  };

  return (
    <Swipeable
      renderRightActions={HiddenCard}
      onSwipeableRightOpen={() => toggleDelete()}
    >
      <Container>
        <IconContainer>
          <Icon resizeMode={"contain"} source={room.icon.dark} />
        </IconContainer>
        <Details>
          <TextLight fontSize="h3"> {room.name} </TextLight>
          <TextLight fontSize="h4"> {roomList.find(item => item.value === room.typeRoom).name} </TextLight>
        </Details>
      </Container>
    </Swipeable>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteRoom: (id) => dispatch({ type: 'DELETE_ROOM', payload: { id } }),
  };
};

export default connect(null, mapDispatchToProps)(SimpleCardRoom);
