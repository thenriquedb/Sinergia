import React from 'react';
import {View} from 'react-native';

import {Text, TextLight, TextThin, TextBold} from '../../../styles/fonts';
import {Container, Details} from './style';

const Header = () => {
  return (
    <Container>
      <View>
        <TextBold color="#fff" fontSize="h5">
          Consumo Total (KW/h)
        </TextBold>

        <TextThin color="#fff" fontSize="h1">
          150
        </TextThin>
      </View>

      <Details>
        <View>
          <TextBold color="#FFF"> Valor total </TextBold>
          <TextLight color="#fff" fontSize="h4">
            R$ 80,00
          </TextLight>
        </View>

        <View>
          <TextBold color="#FFF"> Maior consumo </TextBold>
          <TextLight color="#fff" fontSize="h4">
            Banheiro{' '}
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
