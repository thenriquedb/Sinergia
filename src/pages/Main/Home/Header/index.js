import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  TotalConsumeLabel,
  TotalConsumeValue,
  SettingsButtonContainer,
  SettingsButton,
  TotalConsumeKW,
  Details,
  Detail,
  DetailLabel,
  DetailValue
} from './styles';

import { moneyMask, kwMask } from "../../../../util/masks";
import capitalizeFirstLetter from "../../../../util/capitalizeFirstLetter";

export default function Header({ rooms, tarifaUsed, navigation, scrollOffset }) {
  const [totalKw, setTotalKw] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [roomHigherConsumption, setRoomHigherConsumption] = useState('');

  useEffect(() => {
    setTotalKw(rooms.reduce((prevVal, elem) =>
      prevVal + elem.totalKw, 0));

    calcTotalAmount();

    rooms.length > 0 && getRoomHigherConsumption();
  });

  const detailsAnimationConfig = [
    {
      height: scrollOffset.interpolate({
        inputRange: [50, 250],
        outputRange: [40, 0],
        extrapolate: 'clamp'
      })
    },
    {
      marginTop: scrollOffset.interpolate({
        inputRange: [50, 250],
        outputRange: [10, -10],
        extrapolate: 'clamp'
      })
    },
    {
      transform: [{
        translateY: scrollOffset.interpolate({
          inputRange: [50, 250],
          outputRange: [0, 10],
          extrapolate: 'clamp'

        }),
        translateX: scrollOffset
      }]
    },
    {
      opacity: scrollOffset.interpolate({
        inputRange: [0, 150, 250],
        outputRange: [1, 0, 0],
        extrapolate: 'clamp'
      })
    }
  ];

  const settingsButtonAnimationConfigs = [
    {
      transform: [{
        scale: scrollOffset.interpolate({
          inputRange: [50, 250],
          outputRange: [1, 0.8],
          extrapolate: "clamp"
        })
      }]
    }
  ];

  const totalValueAnimationConfigs = [
    {
      fontSize: scrollOffset.interpolate({
        inputRange: [200, 250],
        outputRange: [22, 18],
        extrapolate: 'clamp'
      })
    },
  ];

  const totalAmountAnimationConfigs = [
    {
      fontSize: scrollOffset.interpolate({
        inputRange: [200, 250],
        outputRange: [50, 40],
        extrapolate: 'clamp'
      })
    },
  ];


  function getRoomHigherConsumption() {
    let highestExpense = rooms[0].tarifaConvencional.monthlyExpenses;
    let largestRoomSpent = rooms[0].name;

    rooms.forEach(item => {
      if (item.tarifaConvencional.monthlyExpenses > highestExpense) {
        highestExpense = item.tarifaConvencional.monthlyExpenses;
        largestRoomSpent = item.name
      }
    });

    setRoomHigherConsumption(largestRoomSpent);
  }

  function calcTotalAmount() {
    if (tarifaUsed === 'convencional') {
      setTotalAmount(rooms.reduce(
        (prevVal, elem) => prevVal + elem.tarifaConvencional.monthlyExpenses, 0),
      );
    } else {
      setTotalAmount(rooms.reduce(
        (prevVal, elem) => prevVal + elem.tarifaBranca.monthlyExpenses, 0),
      );
    }
  }

  return (
    <Container>
      <SettingsButtonContainer style={[...settingsButtonAnimationConfigs]}>
        <SettingsButton onPress={() => navigation.navigate('Settings')}>
          <MaterialCommunityIcons name="settings" size={25} color="#fff" />
        </SettingsButton>
      </SettingsButtonContainer>

      <TotalConsumeKW>
        <TotalConsumeLabel
          style={[...totalValueAnimationConfigs]}>
          Valor Total
        </TotalConsumeLabel>

        <TotalConsumeValue
          style={[...totalAmountAnimationConfigs]}>
          {moneyMask(totalAmount)}
        </TotalConsumeValue>
      </TotalConsumeKW>

      <Details style={[...detailsAnimationConfig]} >
        <Detail>
          <DetailLabel> Consumo total </DetailLabel>
          <DetailValue> {kwMask(totalKw)} </DetailValue>
        </Detail>

        <Detail>
          <DetailLabel> Maior consumo </DetailLabel>
          <DetailValue> {roomHigherConsumption} </DetailValue>
        </Detail>

        <Detail>
          <DetailLabel> Tarifa utilizada </DetailLabel>
          <DetailValue> {capitalizeFirstLetter(tarifaUsed)} </DetailValue>
        </Detail>
      </Details>
    </Container>
  );
}
