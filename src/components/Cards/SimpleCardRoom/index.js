import React, { useState } from 'react';
import { Image } from 'react-native';

// styles
import { Container, Icon, Details } from './styles';
import { TextLight, TextBold } from '../../../styles/fonts';

import roomList from '../../../utilities/roomsList';

const SimpleCardRoom = props => {
  const { room } = props;
  const [totalAmount, setTotalAmount] = useState(
    room.tarifaConvencional.kwMonthly,
  );

  return (
    <Container>
      <Icon>
        <Image style={{ width: 70, height: 70 }} resizeMode={"contain"} source={room.icon.dark} />
      </Icon>
      <Details>
        <TextLight fontSize="h4"> {room.name} </TextLight>
        <TextLight fontSize="h5"> {roomList.find(item => item.value === room.typeRoom).name} </TextLight>
      </Details>
    </Container>
  );
};

export default SimpleCardRoom;
