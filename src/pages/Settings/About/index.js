import React from 'react';
import { TouchableOpacity, ScrollView, Alert } from 'react-native';

import {
  Container,
  AppName,
  Title,
  SubTitle,
  Footer,
  InfoContainer,
  FooterImage,
  Content,
  LogoContainer,
  Describe,
  Logo,
} from './styles';

function About() {
  function pressThiago() {
    Alert.alert(
      'Contato',
      'Email: thenrique2012@gmail.com\n\nLinkedin: linkedin.com/in/thenriquedomingues',
      [{ text: 'OK' }],
      {
        cancelable: true,
      },
    );
  }
  function pressGilberto() {
    Alert.alert(
      'Contato',
      'Email: gilbertoalcanter@hotmail.com',
      [{ text: 'OK' }],
      {
        cancelable: true,
      },
    );
  }
  function pressPaulo() {
    Alert.alert(
      'Contato',
      'Email: paulohenrique.melo00@gmail.com',
      [{ text: 'OK' }],
      {
        cancelable: true,
      },
    );
  }

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <LogoContainer>
          <Logo
            source={require('../../../assets/others/logo.png')}
            resizeMode="contain"
          />
          <AppName> Sinergia </AppName>
        </LogoContainer>

        <Content>
          <InfoContainer>
            <Title> Equipe </Title>

            <SubTitle> Desenvolvedor </SubTitle>

            <TouchableOpacity onPress={pressThiago}>
              <Describe> Thiago Henrique Domingues </Describe>
            </TouchableOpacity>

            <SubTitle> Engenheiros eletricistas </SubTitle>
            <TouchableOpacity onPress={pressGilberto}>
              <Describe> Gilberto Alcânter Filho </Describe>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressPaulo}>
              <Describe> Paulo Henrique de Melo Silva </Describe>
            </TouchableOpacity>
          </InfoContainer>

          <InfoContainer>
            <Title> Agradecimentos </Title>
            <Describe> Icons by Flaticon </Describe>
            <Describe> IFMG Campus Formiga - 2020 </Describe>
          </InfoContainer>
        </Content>

        <Footer>
          <FooterImage
            source={require('../../../assets/others/wave.png')}
            resizeMode="stretch"
          />
        </Footer>
      </ScrollView>
    </Container>
  );
}

export default About;
