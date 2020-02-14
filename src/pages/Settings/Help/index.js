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
    return (
      <ModalContainer>
        <ModalTitle>O que é a tarifa convencional?</ModalTitle>
        <ModalText>Aplicada aos consumidores de baixa tensão, 127, 220,380 e 440V. É uma modalidade de tarifa que
        independe do horário de utilização da energia elétrica. É a tarifa que está presente na maioria das classes residenciais.
    </ModalText>
      </ModalContainer>
    )
  }

  function renderModalContent2() {
    return (
      <ModalContainer>
        <ModalTitle>O que é a tarifa branca?</ModalTitle>
        <ModalText>
          Também aplicada aos consumidores de baixa tensão, porém, o preço da energia elétrica é diferente para determinados horários do dia.
          Têm-se três intervalos de tempo durante o dia, o horário de ponta (preço mais elevado), horário intermediário (preço intermediário) e horário fora de ponta (preço menor).
          Os três horários diferentes são válidos somente em dias úteis, nos finais de semana e feriados nacionais é cobrado apenas o preço mais baixo para qualquer horário.
          Por fim, como grande vantagem da tarifa branca, o preço da energia elétrica no horário fora de ponta é mais barato que o preço na tarifa convencional.
      </ModalText>
      </ModalContainer>
    )
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

  function renderModalContent4() {
    return (
      <ModalContainer>
        <ModalTitle>Quando a tarifa branca é ideal</ModalTitle>
        <ModalText>
          A tarifa branca é ideal apenas para aqueles consumidores que conseguem concentrar o seu consumo de energia elétrica no horário fora de ponta e nos finais de semanas, sendo que nesses períodos o preço é menor que na tarifa convencional.
          Se o consumidor não conseguir se adaptar aos horários de menor preço, terá que pagar bem mais caro em relação a tarifa convencional, pois, o preço da energia elétrica no horário de ponta é bem mais elevado.
  </ModalText>
      </ModalContainer>
    );
  }

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
