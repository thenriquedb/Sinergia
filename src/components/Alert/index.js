import React, { useState } from 'react';
import { TouchableOpacity } from "react-native"
import Modal from "react-native-modal";

import { Container, ButtonsContainer } from './styles';
import { TextBold, Text } from "../../styles/fonts"
import Colors from "../../styles/colors"

const Alert = props => {

  return (
    <Modal
      onBackButtonPress={props.cancel}
      isVisible={props.isVisible}>
      <Container>
        {props.title && <TextBold style={{ marginBottom: 10 }} fontSize={'h4'}>{props.title ? props.title : ''} </TextBold>}

        <Text>{props.message} </Text>

        <ButtonsContainer>
          {props.cancel &&
            <TouchableOpacity activeOpacity={0.5} onPress={props.cancel}>
              <TextBold style={{ marrginHorizontal: 15 }} color={Colors.primary} fontSize={'h5'}>CANCELAR</TextBold>
            </TouchableOpacity>
          }

          {props.confirm &&
            <TouchableOpacity activeOpacity={0.5} onPress={props.confirm}>
              <TextBold style={{ marginHorizontal: 15 }} color={Colors.primary} fontSize={'h5'}> CONFIRMAR </TextBold>
            </TouchableOpacity>
          }
        </ButtonsContainer>
      </Container>
    </Modal>
  )
};

export default Alert;
