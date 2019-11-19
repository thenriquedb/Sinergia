import React, {useState} from 'react';
import {Alert} from 'react-native';

import {connect} from 'react-redux';

// style
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, DeleteButton, EditButton} from './styles';

// component
import EditRoomModal from '../EditRoomModal/index';

const HiddenCard = props => {
  const [modalIsVisible, setmodalIsVisible] = useState(false);

  const toggleDeleteBtn = () => {
    Alert.alert(
      'Você deseja excluir o cômodo ' + props.name + '?',
      ' Esta ação não poderá ser desfeita futuramente.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'Confirmar', onPress: () => props.deleteRoom(props.idRoom)},
      ],
      {cancelable: false},
    );
  };

  const toggleModal = () => {
    const t = !modalIsVisible;
    setmodalIsVisible(t);
    props.refreshList(false);
  };

  return (
    <Container>
      <DeleteButton underlayColor="#f79292" onPress={() => toggleDeleteBtn()}>
        <MaterialCommunityIcons name="delete" size={30} color="#fff" />
      </DeleteButton>
      <EditButton underlayColor="#ffdd67" onPress={toggleModal}>
        <MaterialCommunityIcons name="pencil" size={30} color="#fff" />
      </EditButton>

      <EditRoomModal
        refreshList={props.refreshList}
        idRoom={props.idRoom}
        name={props.name}
        selectedRoom={props.selectedRoom}
        toggleModal={toggleModal}
        isVisible={modalIsVisible}
        index={props.index}
      />
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteRoom: (id, type) => dispatch({type: 'DELETE_ROOM', payload: {id}}),
  };
};

export default connect(null, mapDispatchToProps)(HiddenCard);
