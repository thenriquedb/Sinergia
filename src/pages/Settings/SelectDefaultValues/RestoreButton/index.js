import React from 'react';
import { Alert } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import { Button } from './styles';

function RestoreButton({ restoreDefaultValues }) {
  function restoreValues() {
    Alert.alert(
      'Restaurar valores padrões',
      `Você deseja restaurar os valores das tarifas para o valor padrão? Essa ação não poderá ser desfeita futuramente.`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        { text: 'Confirmar', onPress: () => restoreDefaultValues() },
      ],
      { cancelable: true },
    );
  }

  return (
    <>
      <Button onPress={() => restoreValues()}>
        <MaterialCommunityIcons name="restore" size={25} color="#fff" />
      </Button>
    </>
  );
}

export default RestoreButton;