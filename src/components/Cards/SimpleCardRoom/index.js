import React, { useState } from 'react';
import { Image } from 'react-native';

// styles
import { Container, Icon, IconContainer, Details } from './styles';
import { TextLight } from '../../../styles/fonts';

import roomList from '../../../utilities/roomsList';

const SimpleCardRoom = props => {
  const { room } = props;
  console.log("room: ", room);

  return (
    <Container>
      <IconContainer>
        <Icon resizeMode={"contain"} source={room.icon.dark} />
      </IconContainer>
      <Details>
        <TextLight fontSize="h3"> {room.name} </TextLight>
        <TextLight fontSize="h4"> {roomList.find(item => item.value === room.typeRoom).name} </TextLight>
      </Details>
    </Container>
  );
};

export default SimpleCardRoom;
