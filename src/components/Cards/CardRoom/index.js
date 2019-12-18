import React, {useState} from 'react';
import {TouchableHighlight} from 'react-native';

// styles
import {Container, TotalPrice, Details} from './styles';
import {TextLight, TextBold} from '../../../styles/fonts';

const CardRoom = props => {
  const {room} = props;
  const [totalAmount, setTotalAmount] = useState(
    room.tarifaConvencional.kwMonthly,
  );
  const [totalKw, setTotalKw] = useState(50);

  return (
    <TouchableHighlight
      onPress={() => props.toggleRoomCard(room)}
      style={{marginBottom: 15}}
      underlayColor="#FDFDFD">
      <Container>
        <Details>
          <TextLight fontSize="h4"> {room.name} </TextLight>
          <TextLight fontSize="h5">
            {' '}
            {room.equipments.length} equipamentos
          </TextLight>
          <TextLight fontSize="h5"> {room.totalKw} KW </TextLight>
        </Details>

        <TotalPrice>
          <TextLight fontSize="h5"> Valor total</TextLight>
          <TextBold fontSize="h3">
            R${' '}
            {room.totalAmount
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
