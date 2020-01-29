import React from 'react';

import animation from "../../assets/splash-animation.json";

import Lottie from "lottie-react-native";
import { Container, Title, Subtitle } from './styles';

const SplashScreen = () => {
  return (
    <Container>
      <Lottie
        source={animation}
        autoPlay
        loop
        speed={2}
        resizeMode={"contain"}
        autoSize
      />
    </Container>)

};

export default SplashScreen;
