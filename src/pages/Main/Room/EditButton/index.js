import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Button } from './styles';
import EditRoomModal from '../EditRoomModal';


const EditButton = ({ room }) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  if (room) {
    return (
      <>
        <Button onPress={() => setModalIsVisible(!modalIsVisible)}>
          <MaterialCommunityIcons name="pencil" size={25} color="#fff" />
        </Button>

        <EditRoomModal
          isVisible={modalIsVisible}
          room={room}
          updateData={() => { }}
          closeModal={() => setModalIsVisible(!modalIsVisible)} />
      </>
    );
  } else {
    return (
      <Button onPress={() => setModalIsVisible(!modalIsVisible)}>
        <MaterialCommunityIcons name="pencil" size={25} color="#fff" />
      </Button>
    )
  }
};

export default EditButton;
