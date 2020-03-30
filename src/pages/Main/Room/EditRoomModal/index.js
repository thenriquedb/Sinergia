import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Alert, TouchableOpacity } from 'react-native';

import Modal from 'react-native-modal';
import Input from '../../../../components/Input/index';

//styles
import { TextBold } from '../../../../styles/fonts';
import Colors from '../../../../styles/colors';
import { Container, ButtonsContainer } from './styles';

function EditRoomModal(props) {
  const [newName, setNewName] = useState(props.room.name);
  const [oldName, setOldName] = useState(props.room.name);

  function toggleSaveBtn() {
    if (newName.length >= 4) {
      if (newName.trim() === oldName.trim()) {
        Alert.alert(
          'Nomes iguais',
          'O novo nome não pode ser igual ao nome antigo.',
          [{ text: 'OK' }],
          { cancelable: true },
        );
      } else {
        props.editRoom(props.room.id, newName);
        Alert.alert(
          'Atualizado com sucesso',
          `O cômodo ${oldName} foi atualizado para ${newName} com sucesso!`,
          [{ text: 'OK' }],
          { cancelable: true },
        );

        props.updateData();
      }
    } else {
      Alert.alert(
        'Não foi possivel atualizar',
        'O novo nome precisa possuir no mínimo 4 caracteres.',
        [{ text: 'OK' }],
        { cancelable: false },
      );
    }
  }

  return (
    <Modal isVisible={props.isVisible} onBackButtonPress={props.closeModal}>
      <Container>
        <TextBold style={{ marginBottom: 10 }} fontSize={'h4'}>
          {' '}
          Editar cômodo
        </TextBold>

        <Input
          value={newName}
          onChangeText={newName => setNewName(newName)}
          placeholder="Novo nome"
        />

        <ButtonsContainer>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              setNewName(oldName);
              props.closeModal();
            }}>
            <TextBold color={Colors.primary} fontSize={'h5'}>
              {' '}
              CANCELAR{' '}
            </TextBold>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              toggleSaveBtn();
              props.closeModal();
            }}>
            <TextBold
              style={{ marginHorizontal: 20 }}
              color={Colors.primary}
              fontSize={'h5'}>
              {' '}
              SALVAR{' '}
            </TextBold>
          </TouchableOpacity>
        </ButtonsContainer>
      </Container>
    </Modal>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    editRoom: (id, name) => {
      dispatch({ type: 'EDIT_ROOM', payload: { id, name } });
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(EditRoomModal);
