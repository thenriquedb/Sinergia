import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {Container, TotalPrice, Details} from './styles';
import {Text, TextLight, TextBold} from '../../styles/fonts';

const CardRoom = props => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <Container>
        <Details>
          <TextLight fontSize="h4"> {props.name} </TextLight>

          <TextLight fontSize="h5">
            {' '}
            {props.equipamentsAmount} equipamentos
          </TextLight>
          <TextLight fontSize="h5"> {props.totalKw} KW </TextLight>
        </Details>

        <TotalPrice>
          <TextLight fontSize="h5"> Valor total</TextLight>
          <TextBold fontSize="h3">
            {' '}
            R${' '}
            {props.totalAmount
              .toFixed(2)
              .toString()
              .replace('.', ',')}
          </TextBold>
        </TotalPrice>
      </Container>
    </TouchableOpacity>
  );
};

export default CardRoom;
