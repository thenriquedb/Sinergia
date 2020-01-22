import React, { useState } from 'react';
import { TouchableOpacity } from "react-native"
import Modal from "react-native-modal";

import { Container, ButtonsContainer } from './styles';
import { TextBold, Text } from "../../styles/fonts"
import Colors from "../../styles/colors"

const SettingsModal = props => {

  return (
    <Modal
      onBackButtonPress={props.cancel}
      isVisible={props.isVisible}>
      <Container>
        {props.title ? <TextBold style={{ marginBottom: 10 }} fontSize={'h3'}> {props.title ? props.title : ''} </TextBold> : null}
        {props.content}

      </Container>
    </Modal>
  )
};

export default SettingsModal;
