import React from 'react';
import {View} from 'react-native';

import {Text, TextLight, TextThin, TextBold} from '../../../styles/fonts';
import {Container, Details, TotalConsumeKW} from './style';

const Header = props => {
  return (
    <Container>
      <TotalConsumeKW>
        <TextBold color="#fff" fontSize="h5">
          Consumo Total
        </TextBold>

        <TextThin color="#fff" fontSize="h1">
          {props.totalKw} KW
        </TextThin>
      </TotalConsumeKW>

      <Details>
        <View>
          <TextBold color="#FFF"> Valor total </TextBold>
          <TextLight color="#fff" fontSize="h4">
            {props.totalAmount}
          </TextLight>
        </View>

        <View>
          <TextBold color="#FFF"> Maior consumo </TextBold>
          <TextLight color="#fff" fontSize="h4">
            Sala de jantar
          </TextLight>
        </View>

        <View>
          <TextBold color="#FFF"> Bandeira </TextBold>
          <TextLight color="#fff" fontSize="h4">
            Amarela
          </TextLight>
        </View>
      </Details>
    </Container>
  );
};

export default Header;
