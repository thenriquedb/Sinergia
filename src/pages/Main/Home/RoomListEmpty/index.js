import React from 'react';
import Lottie from "lottie-react-native";

import emptyAnimation from "../../../../assets/empty.json";

import { Container } from './styles';
import { TextBold } from "../../../../styles/fonts";

const RoomListEmpty = () => (
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
    <TextBold textAlign="center" color="#999" fontSize='h4'>
      Ainda não foi cadastrado nenhum cômodo
     </TextBold>
  </Container>
);

export default RoomListEmpty;
