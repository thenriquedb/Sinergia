import React from 'react';
import { ScrollView } from "react-native";
import { connect } from 'react-redux'
import {
  Container,
  Text,
  TarifaLabel,
  GraphContainer,
  IntervaloHorario,
  Title,
  Graph
} from './styles';

import Colors from "../../../styles/colors";

const Help = ({ dealership }) => {

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>
          O aplicativo Sinergia tem como objetivo fazer a simulação do consumo de energia elétrica residencial, haja
          vista que uma nova modalidade de cobrança está sendo utilizada pelas concessionárias destinada para consumidores
          que buscam economia em sua fatura.
        </Text>

        <Text>
          Nesse sentido, a tarifa branca foi criada afim de proporcionar a cobrança de energia mais barata que a convencional para consumos feitos
          em horários especificos porém mais caros em outros horários, desestimulando o consumo de energia nos horários de pico e preservando a integridade
          e segurança da rede elétrica.
        </Text>

        <Title>Tarifa branca da concessionária {dealership.Distribuidora} </Title>
        <GraphContainer>
          <Graph
            source={require("../../../assets/others/tarifa_branca.jpg")}
          />
        </GraphContainer>

        <TarifaLabel color={Colors.low}> Horário fora de ponta</TarifaLabel>
        <IntervaloHorario> Demais horários </IntervaloHorario>

        <TarifaLabel color={Colors.medium}>Horário intermediário 1</TarifaLabel>
        <IntervaloHorario> {dealership.horarioItermediario1} </IntervaloHorario>

        <TarifaLabel color={Colors.high}>Horário de ponta </TarifaLabel>
        <IntervaloHorario> {dealership.horarioPonta} </IntervaloHorario>

        <TarifaLabel color={Colors.medium}> Horário intermediário 2</TarifaLabel>
        <IntervaloHorario> {dealership.horarioIntermediario2} </IntervaloHorario>

        <Text>
          Ao final da simulação o consumidor poderá concluir qual tarifa é mais vantajosa para sua modalidade de consumo.
      </Text>

      </ScrollView>
    </Container>
  );
};
const mapStateToProps = state => ({
  dealership: state.houseReducer.dealership,
});
export default connect(mapStateToProps, null)(Help);
