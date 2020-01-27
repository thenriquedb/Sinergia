import React, { useState, useEffect } from 'react';
import Alert from "../../../../components/Alert/index";

import { connect } from 'react-redux';

// style
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, DeleteButton, EditButton } from './styles';

const HiddenCard = props => {
  const { room } = props;
  const message = `Você deseja excluir o cômodo ${room.name}? Esta ação não poderá ser desfeita futuramente.`;
  const [isVisible, setisVisible] = useState(false);


  return (
    <Container>
      <Alert
        title={"Confirmar "}
        message={message}
        confirm={() => {
          props.deleteRoom(room.id);
          props.refreshList();
          setisVisible(!isVisible);
        }}
        cancel={() => setisVisible(!isVisible)}
        isVisible={isVisible} />

      <DeleteButton underlayColor="#f79292" onPress={() => setisVisible(!isVisible)}>
        <MaterialCommunityIcons name="delete" size={40} color="#fff" />
      </DeleteButton>

    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteRoom: (id) => dispatch({ type: 'DELETE_ROOM', payload: { id } }),
  };
};

export default connect(null, mapDispatchToProps)(HiddenCard);
