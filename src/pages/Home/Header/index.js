import React from 'react';
import {View} from 'react-native';

import {Text, TextLight, TextThin, TextBold} from '../../../styles/fonts';
import {Container, Details} from './style';

const Header = props => {
  return (
    <Container>
      <View>
        <TextBold color="#fff" fontSize="h5">
          Consumo Total (KW/h)
        </TextBold>

        <TextThin color="#fff" fontSize="h1">
          {props.totalKw}
        </TextThin>
      </View>

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
