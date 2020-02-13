import React from 'react';

import { View, Text } from 'react-native';

import { Container, Logo } from './styles';

const About = () => {
  return (
    <Container>
      <Logo
        source={require("../../../assets/others/logo.png")}
        resizeMode="contain"
      />
    </Container>
  );
};

export default About;
