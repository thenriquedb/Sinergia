import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Button } from './styles';
import EditRoomModal from '../EditRoomModal';

import { Container, BackButtonContainer, EditButtonContainer } from "./styles";

const NavigationHeader = ({ room, offset, navigation }) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const iconAnimationConfigs = [
    {
      transform: [{
        scale: offset.interpolate({
          inputRange: [500, 800],
          outputRange: [1, 0.8],
          extrapolate: "clamp"
        })
      }]
    }
  ];

  if (room) {
    return (
      <Container>
        <EditButtonContainer style={[...iconAnimationConfigs]}>
          <Button onPress={() => setModalIsVisible(!modalIsVisible)}>
            <MaterialCommunityIcons name="pencil" size={25} color="#fff" />
          </Button>

          <EditRoomModal
            isVisible={modalIsVisible}
            room={room}
            updateData={() => { }}
            closeModal={() => setModalIsVisible(!modalIsVisible)} />
        </EditButtonContainer>

        <BackButtonContainer style={[...iconAnimationConfigs]}>
          <Button onPress={() => navigation.goBack()} >
            <MaterialCommunityIcons name="arrow-left" size={28} color="#fff" />
          </Button>
        </BackButtonContainer>

      </Container>
    );
  } else {
    return (
      <Container>
        <Button onPress={() => setModalIsVisible(!modalIsVisible)}>
          <MaterialCommunityIcons name="pencil" size={25} color="#fff" />
        </Button>
      </Container>
    )
  }
};

export default NavigationHeader;
