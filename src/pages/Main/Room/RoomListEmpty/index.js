import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Lottie from "lottie-react-native";

import emptyAnimation from "../../../../assets/empty.json";

import { Container, BackButton } from './styles';
import { TextLight, TextBold } from "../../../../styles/fonts";
import Colors from "../../../../styles/colors";

const RoomListEmpty = ({ roomName, navigation }) => (
  <Container>
    <BackButton onPress={() => navigation.goBack()}>
      <MaterialCommunityIcons name="arrow-left" size={28} color={Colors.primary} />
    </BackButton>

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

export default RoomListEmpty;