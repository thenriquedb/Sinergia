import React, { useState, useEffect } from 'react';

import { Container, SettingsButton, TotalConsumeKW, Details, Detail } from './styles';
import { TextBold, TextLight, TextThin } from "../../../../styles/fonts";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { moneyMask, kwMask } from "../../../../util/masks";
import capitalizeFirstLetter from "../../../../util/capitalizeFirstLetter";

export default function Header({ rooms, tarifaUsed, navigation }) {

  const [totalKw, setTotalKw] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [roomHigherConsumption, setRoomHigherConsumption] = useState('');

  useEffect(() => {
    setTotalKw(rooms.reduce((prevVal, elem) =>
      prevVal + elem.totalKw, 0));

    calcTotalAmount();

    rooms.length > 0 && getRoomHigherConsumption();
  });

  const getRoomHigherConsumption = () => {
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

  const calcTotalAmount = () => {
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
      <SettingsButton onPress={() => navigation.navigate('Settings')}>
        <MaterialCommunityIcons name="settings" size={25} color="#fff" />
      </SettingsButton>
      <TotalConsumeKW>
        <TextBold textAlign='center' color="#fff" fontSize="h4">
          Valor Total
        </TextBold>

        <TextThin textAlign='center' color="#fff" fontSize="h1"> {moneyMask(totalAmount)} </TextThin>
      </TotalConsumeKW>

      <Details>
        <Detail>
          <TextBold textAlign='center' color="#FFF"> Consumo total </TextBold>
          <TextLight textAlign='center' color="#fff" fontSize="h5"> {kwMask(totalKw)} </TextLight>
        </Detail>

        <Detail>
          <TextBold textAlign='center' color="#FFF"> Maior consumo </TextBold>
          <TextLight textAlign='center' color="#fff" fontSize="h5">
            {roomHigherConsumption}
          </TextLight>
        </Detail>

        <Detail>
          <TextBold textAlign='center' color="#FFF"> Tarifa utilizada </TextBold>
          <TextLight textAlign='center' color="#fff" fontSize="h5">
            {capitalizeFirstLetter(tarifaUsed)}
          </TextLight>
        </Detail>
      </Details>
    </Container>
  );
}
