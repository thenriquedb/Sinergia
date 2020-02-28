import React from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';

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

const About = ({ navigation }) => (
  <Container>
    <ScrollView>
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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('GenericWebView', {
                link: 'https://www.linkedin.com/in/thenriquedomingues/',
              })
            }>
            <Describe> Thiago Henrique Domingues </Describe>
          </TouchableOpacity>

          <SubTitle> Engenheiros eletricistas </SubTitle>
          <Describe> Gilberto Alcânter Filho </Describe>
          <Describe> Paulo Henrique de Melo Silva </Describe>
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

export default About;
