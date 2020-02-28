import React from 'react';
import Lottie from "lottie-react-native";

import animation from "../../assets/splash-animation.json";

import { Container } from './styles';

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
