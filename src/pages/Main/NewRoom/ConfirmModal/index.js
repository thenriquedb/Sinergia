import React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import Modal from "react-native-modal";

import { Container, Title, ButtonsContainer } from './styles';

import Input from "../../../../components/Input";
import { TextBold } from "../../../../styles/fonts";
import Colors from "../../../../styles/colors";

function ConfirmModal({ isVisible, customName, confirm, setIsVisible, setCustomName }) {
  return (
    <Modal
      onBackButtonPress={setIsVisible}
      isVisible={isVisible}
    >
      <Container>
        <Title> Nome Customizado </Title>

        <Input
          value={customName}
          onChangeText={customName => setCustomName(customName)}
          placeholder="Nome"
        />

        <ButtonsContainer>
          <TouchableOpacity activeOpacity={0.5} onPress={() => {
            confirm();
            setIsVisible();
          }}>
            <TextBold style={{ marginHorizontal: 15 }} color={Colors.primary} fontSize={'h5'}> CONFIRMAR </TextBold>
          </TouchableOpacity>
        </ButtonsContainer>
      </Container>
    </Modal>

  );
}

const mapDispatchToProps = dispatch => {
  return {
    addNewRoom: (name, typeRoom, icon) =>
      dispatch({ type: 'ADD_ROOM', payload: { name, typeRoom, icon } }),
  };
};


export default connect(null, mapDispatchToProps)(ConfirmModal);