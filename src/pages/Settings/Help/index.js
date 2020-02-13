import React, { useState } from 'react';
import { ScrollView } from "react-native";
import { connect } from 'react-redux'

import HelpModal from "../../../components/HelpModal";

import { intervalMask } from "../../../util/masks";

import {
  Container,
  MenuLabel,
  MenuButton,
  ModalContainer,
  ModalTitle,
  ModalSubtitle,
  ModalText,
  IntervalContainer,
  IntervalLabel,
  IntervalsGraphContainer,
  IntervalsGraph,
} from './styles';

import Colors from "../../../styles/colors";

function Help({ dealership }) {
  const [isVisible1, setTsVisible1] = useState(false);
  const [isVisible2, setTsVisible2] = useState(false);
  const [isVisible3, setTsVisible3] = useState(false);
  const [isVisible4, setTsVisible4] = useState(false);

  function renderModalContent1() {
    return (<MenuLabel> okkkk</MenuLabel>)
  }

  function renderModalContent2() {
    return (
      <ModalContainer>
        <ModalTitle>Titulo</ModalTitle>
        <ModalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ModalText>
      </ModalContainer>)
  }

  function renderModalContent3() {
    return (
      <ModalContainer>
        <ModalTitle>Intervalos da {dealership.Distribuidora}</ModalTitle>

        <IntervalsGraphContainer>
          <IntervalsGraph
            source={require("../../../assets/others/tarifa_branca.jpg")}
          />
        </IntervalsGraphContainer>

        {dealership.horarioItermediario1 ? (
          <>
            <ModalSubtitle color={Colors.medium}>Horário intermediário 1</ModalSubtitle>
            <IntervalContainer>
              <IntervalLabel>{intervalMask(dealership.horarioItermediario1)}</IntervalLabel>
            </IntervalContainer>
          </>
        ) : null}

        <ModalSubtitle color={Colors.high}>Horário ponta</ModalSubtitle>
        <IntervalContainer>
          <IntervalLabel>{intervalMask(dealership.horarioPonta)}</IntervalLabel>
        </IntervalContainer>

        {dealership.horarioIntermediario2 ? (
          <>
            <ModalSubtitle color={Colors.medium}>Horário intermediário 2</ModalSubtitle>
            <IntervalContainer>
              <IntervalLabel>{intervalMask(dealership.horarioIntermediario2)}</IntervalLabel>
            </IntervalContainer>
          </>
        ) : null}

        <ModalSubtitle color={Colors.low}>Horário fora de ponta</ModalSubtitle>
        <IntervalContainer>
          <IntervalLabel>Demais horários</IntervalLabel>
        </IntervalContainer>
      </ModalContainer>)
  }

  function renderModalContent4() { }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuButton onPress={() => setTsVisible1(!isVisible1)}>
          <>
            <MenuLabel>O que é a tarifa convencional? </MenuLabel>
            <HelpModal
              isVisible={isVisible1}
              setIsVisible={setTsVisible1}
              content={renderModalContent1}
            />
          </>
        </MenuButton>

        <MenuButton onPress={() => setTsVisible2(!isVisible2)}>
          <>
            <MenuLabel>O que é a tarifa branca? </MenuLabel>
            <HelpModal
              isVisible={isVisible2}
              setIsVisible={setTsVisible2}
              content={renderModalContent2}
            />
          </>
        </MenuButton>

        <MenuButton onPress={() => setTsVisible3(!isVisible3)}>
          <>
            <MenuLabel>Intervalos de sua concessionária </MenuLabel>
            <HelpModal
              isVisible={isVisible3}
              setIsVisible={setTsVisible3}
              content={renderModalContent3}
            />
          </>
        </MenuButton>

        <MenuButton onPress={() => setTsVisible4(!isVisible4)}>
          <>
            <MenuLabel>Quando a tarifa branca é ideal? </MenuLabel>
            <HelpModal
              isVisible={isVisible4}
              setIsVisible={setTsVisible4}
              content={renderModalContent4}
            />
          </>
        </MenuButton>
      </ScrollView>
    </Container>
  );
};
const mapStateToProps = state => ({
  dealership: state.houseReducer.dealership,
});

export default connect(mapStateToProps, null)(Help);
