import React from 'react';

import {View, TouchableOpacity} from 'react-native';
import {Container, TotalPrice} from './styles';

import {Text, TextLight, TextBold} from '../../styles/fonts';

const CardRoom = () => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <Container>
        <View>
          <TextLight fontSize="h4"> Cozinha</TextLight>
          <TextLight fontSize="h5"> 4 Equipamentos cadastrados</TextLight>
          <TextLight fontSize="h5"> 127 KW </TextLight>
        </View>

        <TotalPrice>
          <TextLight fontSize="h5"> Valor total</TextLight>
          <TextBold fontSize="h3"> R$ 9,93</TextBold>
        </TotalPrice>
      </Container>
    </TouchableOpacity>
  );
};

export default CardRoom;
