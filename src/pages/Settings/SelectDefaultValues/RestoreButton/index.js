import React, { useState } from 'react';

import Alert from "../../../../components/Alert"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Button } from './styles';

const RestoreButton = ({ restoreDefaultValues }) => {
  const [modalIsVisible, setmodalIsVisible] = useState(false);

  return (
    <>
      <Button onPress={() => setmodalIsVisible(!modalIsVisible)}>
        <MaterialCommunityIcons name="restore" size={25} color="#fff" />
      </Button>

      <Alert
        title={"Restaurar valores padrões"}
        message={'Essa ação não pode ser desfeita.'}
        confirm={() => {
          restoreDefaultValues();
          setmodalIsVisible(!modalIsVisible);
        }}
        cancel={() => setmodalIsVisible(!modalIsVisible)}
        isVisible={modalIsVisible} />
    </>
  );
}

export default RestoreButton;