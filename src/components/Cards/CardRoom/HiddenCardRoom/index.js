import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { connect } from 'react-redux';

// style
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, DeleteButton, EditButton } from './styles';

const HiddenCard = props => {
  const { room, rowData, rowMap } = props;

  const toggleDeleteBtn = () => {
    Alert.alert(
      'Você deseja excluir o cômodo ' + room.name + '?',
      ' Esta ação não poderá ser desfeita futuramente.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'Confirmar', onPress: () => props.deleteRoom(room.id) },
      ],
      { cancelable: false },
    );

    props.refreshList();
  };

  return (
    <Container>
      <DeleteButton underlayColor="#f79292" onPress={() => toggleDeleteBtn()}>
        <MaterialCommunityIcons name="delete" size={30} color="#fff" />
      </DeleteButton>

    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteRoom: (id, type) => dispatch({ type: 'DELETE_ROOM', payload: { id } }),
  };
};

export default connect(null, mapDispatchToProps)(HiddenCard);
