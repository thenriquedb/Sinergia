import React from 'react';

import {View, TouchableOpacity} from 'react-native';
import {Container, TotalPrice} from './styles';

import {Text, TextLight, TextBold} from '../../styles/fonts';

const CardRoom = props => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <Container>
        <View>
          <TextLight fontSize="h4"> {props.name} </TextLight>
          <TextLight fontSize="h5">
            {props.equipamentsAmount} Equipamentos
          </TextLight>
          <TextLight fontSize="h5"> {props.totalKw} KW </TextLight>
        </View>

        <TotalPrice>
          <TextLight fontSize="h5"> Valor total</TextLight>
          <TextBold fontSize="h3"> R$ {props.totalAmount.toFixed(2)}</TextBold>
        </TotalPrice>
      </Container>
    </TouchableOpacity>
  );
};

export default CardRoom;
