import React from 'react';

import { View } from 'react-native';

import { Container, NextPageButton, ContinueConfigArea, WelcomeContent } from './styles';
import { TextLight, Text } from '../../../styles/fonts';

const Welcome = props => (
  <Container>

    <WelcomeContent>
      <TextLight fontSize='h4'> Bem vindo(a) ao SSinergia </TextLight>
    </WelcomeContent>

    <ContinueConfigArea>
      <NextPageButton onPress={() => props.navigation.navigate('SelectState')}>
        <Text fontSize='h6' color='#fff'> Iniciar configuração </Text>
      </NextPageButton>
    </ContinueConfigArea>
  </Container>
);

export default Welcome;
