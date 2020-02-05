import React, { useState } from 'react';

import {
  Container,
  ExpensesLabel,
  ExpensesValue,
  ExpensesValueLabel,
  HeaderInfosValuesContainer,
  HeaderInfo,
  HeaderInfosContainer,
  DifferenceBetweenTariffsContainer,
  DifferenceBetweenTariffs
} from './styles';

import { TextBold, Text } from "../../../../../styles/fonts";
import { moneyMask } from "../../../../../util/masks";

export default function HeaderHidden(props) {
  const { totalTarifaBranca, totalTarifaConvencional, offset } = props;
  const [differenceBetweentariffs, setDifferenceBetweentariffs] = useState(totalTarifaConvencional - totalTarifaBranca);

  const headerInfosAnimationConfig = [
    {
      height: offset.interpolate({
        inputRange: [50, 500],
        outputRange: [80, 0],
        extrapolate: 'clamp'
      })
    },

    {
      marginTop: offset.interpolate({
        inputRange: [50, 500],
        outputRange: [10, -10],
        extrapolate: 'clamp'
      })
    },
    {
      transform: [{
        translateY: offset.interpolate({
          inputRange: [50, 500],
          outputRange: [0, 10],
        }),
        translateX: offset
      }]
    },
    {
      opacity: offset.interpolate({
        inputRange: [50, 500],
        outputRange: [1, 0],
        extrapolate: 'clamp'
      })
    }
  ];

  const expensesLabelAnimationConfig = [
    {
      fontSize: offset.interpolate({
        inputRange: [400, 1500],
        outputRange: [24, 18],
        extrapolate: 'clamp'
      })
    },
  ];

  const expensesValueAnimationConfig = [
    {
      fontSize: offset.interpolate({
        inputRange: [400, 1500],
        outputRange: [32, 24],
        extrapolate: 'clamp'
      })
    },
  ];


  const expensesValueLabelAnimationConfig = [
    {
      fontSize: offset.interpolate({
        inputRange: [400, 1500],
        outputRange: [18, 14],
        extrapolate: 'clamp'
      })
    },
  ];

  return (
    <Container>
      <HeaderInfosContainer>
        <ExpensesLabel style={[...expensesLabelAnimationConfig]}>
          Gastos mensais
        </ExpensesLabel>

        <HeaderInfosValuesContainer>
          <HeaderInfo>
            <ExpensesValue style={[...expensesValueAnimationConfig]}>{moneyMask(totalTarifaBranca)} </ExpensesValue>
            <ExpensesValueLabel style={[...expensesValueLabelAnimationConfig]}>Tarifa branca</ExpensesValueLabel>
          </HeaderInfo>

          <HeaderInfo>
            <ExpensesValue style={[...expensesValueAnimationConfig]}>{moneyMask(totalTarifaConvencional)} </ExpensesValue>
            <ExpensesValueLabel style={[...expensesValueLabelAnimationConfig]}>Tarifa convencional</ExpensesValueLabel>
          </HeaderInfo>
        </HeaderInfosValuesContainer>

      </HeaderInfosContainer>

      <DifferenceBetweenTariffsContainer style={[...headerInfosAnimationConfig]}>

        {differenceBetweentariffs > 0 && (
          <>
            <Text style={{ marginTop: 20, }} color={'#fff'} fontSize={'h5'}>
              Utilizando a tarifa branca você economiza
            </Text>

            <TextBold color={'#fff'} fontSize={'h2'}>
              {moneyMask(differenceBetweentariffs)}
            </TextBold>
          </>
        )}

        {differenceBetweentariffs < 0 && (
          <>
            <Text style={{ marginTop: 20, }} color={'#fff'} fontSize={'h5'}>
              Utilizando a tarifa convencional você economiza
        </Text>

            <DifferenceBetweenTariffs>
              {moneyMask(Math.abs(differenceBetweentariffs))}
            </DifferenceBetweenTariffs>
          </>
        )}
      </DifferenceBetweenTariffsContainer>

    </Container>
  );
}
