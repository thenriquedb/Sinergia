import styled from 'styled-components/native';
import Colors from '../../../styles/colors';

export const Scroll = styled.ScrollView``;

export const Container = styled.View`
  flex: 1;
  justify-content:space-between;
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

export const Content = styled.View`
  background-color: ${Colors.white};
  border-radius: 8;
  border-color: ${Colors.lightGray1};
  border-width: 1px;
  padding: 15px 10px;
  elevation: 3;  
  margin: 0 10px;
`;

export const InfoContainer = styled.View`
  justify-content: center;
  margin-bottom: 10px;
`;

export const Logo = styled.Image`
  height: 160px;
`;

export const AppName = styled.Text`
  font-size: 32px;
  color: ${Colors.darkGray1};
  font-weight: bold;
  text-transform: uppercase;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: ${Colors.primary};
  font-weight: bold;
  text-transform: uppercase;
  text-align: center
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: ${Colors.primary};
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 15px;
  text-align: center
  
`;

export const Describe = styled.Text`
  font-size: 20px;
  color: ${Colors.darkGray4};
  text-align: center
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 0;
`;

export const FooterImage = styled.Image`
  height: 120px;
`;
