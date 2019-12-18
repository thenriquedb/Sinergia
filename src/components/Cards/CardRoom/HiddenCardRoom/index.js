import React, {useState} from 'react';
import {Alert} from 'react-native';

import {connect} from 'react-redux';

// style
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, DeleteButton, EditButton} from './styles';

const HiddenCard = props => {
  const {room} = props;

  const toggleDeleteBtn = () => {
    Alert.alert(
      'Você deseja excluir o cômodo ' + room.name + '?',
      ' Esta ação não poderá ser desfeita futuramente.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'Confirmar', onPress: () => props.deleteRoom(room.id)},
      ],
      {cancelable: false},
    );
  };

  return (
    <Container>
      <DeleteButton underlayColor="#f79292" onPress={() => toggleDeleteBtn()}>
        <MaterialCommunityIcons name="delete" size={30} color="#fff" />
      </DeleteButton>
      <EditButton
        underlayColor="#ffdd67"
        onPress={() => props.toggleEditRoom(room)}>
        <MaterialCommunityIcons name="pencil" size={30} color="#fff" />
      </EditButton>
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteRoom: (id, type) => dispatch({type: 'DELETE_ROOM', payload: {id}}),
  };
};

export default connect(null, mapDispatchToProps)(HiddenCard);
