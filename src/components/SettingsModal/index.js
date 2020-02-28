import React from 'react';
import Modal from "react-native-modal";

import { Container } from './styles';
import { TextBold } from "../../styles/fonts"

const SettingsModal = props => (
  <Modal
    onBackButtonPress={props.cancel}
    isVisible={props.isVisible}>

    <Container>
      {props.title &&
        <TextBold
          style={{ marginBottom: 10 }}
          fontSize={'h4'}>
          {props.title ? props.title : ''}
        </TextBold>}

      {props.content}

    </Container>
  </Modal>
);

export default SettingsModal;
