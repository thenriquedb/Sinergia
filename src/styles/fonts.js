import styled from 'styled-components/native';

const DEFAULT_FONT_SIZE = 16;

const DEFAULT_H1_SIZE = 40;
const DEFAULT_H2_SIZE = 34;
const DEFAULT_H3_SIZE = 28;
const DEFAULT_H4_SIZE = 24;
const DEFAULT_H5_SIZE = 16;
const DEFAULT_H6_SIZE = 14;

const Text = styled.Text`
  font-size: ${props => {
    switch (props.fontSize) {
      case 'h1':
        return DEFAULT_H1_SIZE;

      case 'h2':
        return DEFAULT_H2_SIZE;

      case 'h3':
        return DEFAULT_H3_SIZE;

      case 'h4':
        return DEFAULT_H4_SIZE;

      case 'h5':
        return DEFAULT_H5_SIZE;

      case 'h6':
        return DEFAULT_H6_SIZE;

      default:
        return DEFAULT_FONT_SIZE;
    }
  }};
  font-family: 'Roboto-Regular';
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  color: ${props => (props.color ? props.color : '#000')};
`;

const TextThin = styled.Text`
  font-size: ${props => {
    switch (props.fontSize) {
      case 'h1':
        return DEFAULT_H1_SIZE;

      case 'h2':
        return DEFAULT_H2_SIZE;

      case 'h3':
        return DEFAULT_H3_SIZE;

      case 'h4':
        return DEFAULT_H4_SIZE;

      case 'h5':
        return DEFAULT_H5_SIZE;

      case 'h6':
        return DEFAULT_H6_SIZE;

      default:
        return DEFAULT_FONT_SIZE;
    }
  }};
  font-family: 'Roboto-Thin';
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  color: ${props => (props.color ? props.color : '#000')};
`;

const TextLight = styled.Text`
  font-size: ${props => {
    switch (props.fontSize) {
      case 'h1':
        return DEFAULT_H1_SIZE;

      case 'h2':
        return DEFAULT_H2_SIZE;

      case 'h3':
        return DEFAULT_H3_SIZE;

      case 'h4':
        return DEFAULT_H4_SIZE;

      case 'h5':
        return DEFAULT_H5_SIZE;

      case 'h6':
        return DEFAULT_H6_SIZE;

      default:
        return DEFAULT_FONT_SIZE;
    }
  }};
  font-family: 'Roboto-Light';
  margin: 0;
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  color: ${props => (props.color ? props.color : '#000')};
`;

const TextBold = styled.Text`
  font-size: ${props => {
    switch (props.fontSize) {
      case 'h1':
        return DEFAULT_H1_SIZE;

      case 'h2':
        return DEFAULT_H2_SIZE;

      case 'h3':
        return DEFAULT_H3_SIZE;

      case 'h4':
        return DEFAULT_H4_SIZE;

      case 'h5':
        return DEFAULT_H5_SIZE;

      case 'h6':
        return DEFAULT_H6_SIZE;

      default:
        return DEFAULT_FONT_SIZE;
    }
  }};
  font-family: 'Roboto-Bold';
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  color: ${props => (props.color ? props.color : '#000')};
`;

export {Text, TextThin, TextLight, TextBold};
