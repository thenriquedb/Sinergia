import React, { useState } from 'react';
import { View, Button, Picker, Alert, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import Input from "../../../../components/Input/index";

//redux
import { connect } from 'react-redux'


//styles
import { TextBold, Text, TextLight } from '../../../../styles/fonts'
import Colors from '../../../../styles/colors'
import { Container, ButtonsContainer } from './styles';

//util
import roomList from "../../../../utilities/roomsList"

const EditRoomModal = props => {
  const [newName, setNewName] = useState(props.room.name);
  const [oldName, setOldName] = useState(props.room.name);
  const [selectType, setSelectType] = useState(roomList[0].value);

  const toggleSaveBtn = () => {
    if (newName.length >= 4) {
      if (newName === oldName) {
        Alert.alert('Novo nome não pode ser igual ao original.');
      } else {
        try {
          props.editRoom(props.room.id, newName, selectType);

          Alert.alert('O cômodo ' + oldName + ' foi atualizado para ' + newName +
            ' com sucesso!');
          props.updateData();
        } catch (error) {
          Alert.alert('Não foi atualizar cômodo ' + oldName + '.');
        }
      }
    } else {
      Alert.alert('O novo nome precisa possuir no mínimo 4 caracteres.');
    }
  }

  return (
    <Modal isVisible={props.isVisible}>
      <Container>
        <TextBold style={{ marginBottom: 10 }} fontSize={'h4'}> Editar cômodo</TextBold>

        <Input
          value={newName}
          onChangeText={newName => setNewName(newName)}
          placeholder="Novo nome"
        />

        <Picker
          selectedValue={selectType}
          onValueChange={(itemValue, itemIndex) => {
            setSelectType(itemValue);
          }}>
          {roomsList.map((value, key) => {
            return <Picker.Item key={key} value={key} label={value.name} />;
          })}
        </Picker>

        <ButtonsContainer>
          <TouchableOpacity activeOpacity={0.5} onPress={() => toggleSaveBtn()}>
            <TextBold style={{ marginHorizontal: 20 }} color={Colors.primary} fontSize={'h5'}> SALVAR </TextBold>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={props.closeModal}>
            <TextBold color={Colors.primary} fontSize={'h5'}> CANCELAR </TextBold>
          </TouchableOpacity>
        </ButtonsContainer>
      </Container>
    </Modal>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    editRoom: (id, name, typeRoom) => {
      dispatch({ type: 'EDIT_ROOM', payload: { id, name, typeRoom } });
    },
  };
};

export default connect(null, mapDispatchToProps)(EditRoomModal);
