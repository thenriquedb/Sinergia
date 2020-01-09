import React, { useState } from 'react';
import { TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
        <MaterialCommunityIcons name="radio" size={35} color="#000" />
      </Icon>
      <Details>
        <TextLight fontSize="h4"> {room.name} </TextLight>
        <TextLight fontSize="h5"> {roomList.find(item => item.value === room.typeRoom).name} </TextLight>
      </Details>
    </Container>
  );
};

export default SimpleCardRoom;
