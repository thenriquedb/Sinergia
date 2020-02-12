import React from 'react';
import { TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";

import ZoomImage from 'react-native-zoom-image';
import { Easing } from 'react-native';

import { Container, ImageContainer, BackButtonContainer, Legend } from './styles';
import { TextBold, Text } from "../../styles/fonts";
import Colors from "../../styles/colors";

export default function WhereToFindKwValues({ isVisible, setIsVisible }) {
  return (
    <>
      <Modal
        isVisible={isVisible}
        onBackButtonPress={() => setIsVisible(!isVisible)}>
        <Container>
          <ImageContainer>

            <ZoomImage
              source={require("../../assets/others/ondeEncontrar.jpg")}
              imgStyle={{ width: 300, height: 230 }}
              duration={200}
              enableScaling={true}
              moveCapture={true}
              easingFunc={Easing.ease}
            />
          </ImageContainer>

          <Legend>Essa imagem é apenas um exemplo de onde encontrar,cada concessionária pode apresentar estas
           informações de formas ou lugares diferentes. Procuro por valores faturados ou preços do kwh</Legend>

          <BackButtonContainer>
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
              <TextBold style={{ marginHorizontal: 15 }} color={Colors.primary} fontSize={'h5'}> VOLTAR </TextBold>
            </TouchableOpacity>
          </BackButtonContainer>
        </Container>
      </Modal>
    </>
  );
}
