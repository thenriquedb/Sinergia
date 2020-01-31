import React from 'react';

import Lottie from "lottie-react-native";
import emptyAnimation from "../../../../assets/empty.json";

import { TextLight, TextBold } from "../../../../styles/fonts";
import { Container } from './styles';

export default function RoomListEmpty({ roomName }) {
  return (
    <Container>
      <Lottie
        source={emptyAnimation}
        autoPlay
        loop
        speed={2}
        resizeMode={"cover"}
        autoSize
        style={{ height: 200, width: 200 }}
      />
      <TextBold textAlign={'center'} color={'#999'} fontSize={'h4'}> Nenhum equipamento cadastrado </TextBold>
      <TextLight color="#999" textAlign='center' fontSize='h5'>
        "{roomName}" não possui nenhum equipamento cadastrado.
       </TextLight>
    </Container>
  );
}
