import React from 'react';
import { connect } from 'react-redux'

import {
  Container,
  NextPageButton,
  ContinueConfigArea,
  WelcomeContent
} from './styles';
import { TextLight, Text } from '../../../styles/fonts';

function Final(props) {
  function toggleStartButton() {
    props.setFirstUse();
    props.navigation.navigate('MainStack');
  }

  return (
    <Container>
      <WelcomeContent>
        <TextLight fontSize='h4'> Está tudo pronto para começar! </TextLight>
      </WelcomeContent>

      <ContinueConfigArea>
        <NextPageButton onPress={toggleStartButton}>
          <Text fontSize='h6' color='#fff'> Iniciar Aplicação </Text>
        </NextPageButton>
      </ContinueConfigArea>
    </Container>
  )
};

const mapDispatchToProps = dispatch => {
  return { setFirstUse: () => dispatch({ type: 'SET_FIRST_USE_STATUS' }) }
}

export default connect(null, mapDispatchToProps)(Final);
