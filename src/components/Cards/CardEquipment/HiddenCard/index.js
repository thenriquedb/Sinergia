import React, { useState } from 'react';
import { Alert } from 'react-native';

import { connect } from 'react-redux';

// style
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, DeleteButton, EditButton } from './styles';

const HiddenCard = props => {
  const [modalIsVisible, setmodalIsVisible] = useState(false);


  const toggleDeleteBtn = () => {
    Alert.alert(
      'Você deseja excluir o cômodo ' + 'NOME DO EQUIPAMENTO' + '?',
      ' Esta ação não poderá ser desfeita futuramente.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'Confirmar', onPress: () => props.deleteEquipment(props.idRoom.toString(), props.idEquipment.toString()) },
      ],
      { cancelable: false },
    );
  };

  return (
    <Container>
      <DeleteButton underlayColor="#f79292" onPress={() => toggleDeleteBtn()}>

        <MaterialCommunityIcons name="delete" size={30} color="#fff" />
      </DeleteButton>
      <EditButton underlayColor="#ffdd67">
        <MaterialCommunityIcons name="pencil" size={30} color="#fff" />
      </EditButton>
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteEquipment: (idRoom, idEquipment, type) => dispatch({ type: 'DELETE_EQUIPMENT', payload: { idRoom, idEquipment } }),
  };
};

export default connect(null, mapDispatchToProps)(HiddenCard);
