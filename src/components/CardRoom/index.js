import React from 'react';
import {TouchableHighlight} from 'react-native';

// styles
import {Container, TotalPrice, Details} from './styles';
import {TextLight, TextBold} from '../../styles/fonts';

const CardRoom = props => {
  return (
    <TouchableHighlight
      onPress={props.toggleRoomCard}
      style={{marginBottom: 15}}
      underlayColor="#FDFDFD">
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
    </TouchableHighlight>
  );
};

export default CardRoom;
