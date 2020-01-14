import React, { useState } from 'react';
// import { Alert } from 'react-native';
import Alert from "../../../Alert/index";
import { connect } from 'react-redux';

// style
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, DeleteButton, EditButton } from './styles';

const HiddenCard = props => {
  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const deleteMessage = `Você deseja excluir o cômodo ${props.roomName}? Esta ação não poderá ser desfeita futuramente.`

  return (
    <Container>
      <Alert
        title={"Deletar"}
        message={deleteMessage}
        confirm={() => {
          props.deleteEquipment(props.idRoom, props.idEquipment);
          props.reRender();
          setmodalIsVisible(!modalIsVisible);
        }}
        cancel={() => setmodalIsVisible(!modalIsVisible)}
        isVisible={modalIsVisible} />

      <DeleteButton underlayColor="#f79292" onPress={() => setmodalIsVisible(!modalIsVisible)}>
        <MaterialCommunityIcons name="delete" size={40} color="#fff" />
      </DeleteButton>
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteEquipment: (idRoom, idEquipment, type) => dispatch({ type: 'DELETE_EQUIPMENT', payload: { idRoom, idEquipment } }),
  };
};

export default connect(null, mapDispatchToProps)(HiddenCard);
