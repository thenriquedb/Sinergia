import React from 'react';
import { TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";

import { Container, BackButtonContainer } from './styles';
import { TextBold } from "../../styles/fonts";
import Colors from "../../styles/colors";

export default function HelpModal({ isVisible, setIsVisible, content }) {

  return (
    <>
      <Modal
        isVisible={isVisible}
        onBackButtonPress={() => setIsVisible(!isVisible)}
      >
        <Container>

          {content()}

          <BackButtonContainer>
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
              <TextBold style={{ marginHorizontal: 15 }} color={Colors.primary} fontSize={'h5'}> OK </TextBold>
            </TouchableOpacity>
          </BackButtonContainer>
        </Container>
      </Modal>
    </>
  );
}
