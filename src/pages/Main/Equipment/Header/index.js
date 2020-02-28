import React from 'react';
import { Container, Description, Title, Icon } from './styles';

function Header({ offset, equipmentName, equipmentIcon, equipmentDescription }) {

  const MAX_INPUT_VALUE = 380;

  const containerAnimationConfig = [
    {
      height: offset.interpolate({
        inputRange: [0, MAX_INPUT_VALUE],
        outputRange: [equipmentDescription ? 230 : 180, equipmentDescription ? 40 : 20],
        extrapolate: 'clamp'
      })
    }
  ];

  const iconAnimationConfig = [
    {
      top: offset.interpolate({
        inputRange: [0, MAX_INPUT_VALUE],
        outputRange: [0, 120],
        extrapolate: 'clamp'
      }),
    },
    {
      opacity: offset.interpolate({
        inputRange: [0, MAX_INPUT_VALUE / 2],
        outputRange: [1, 0],
        extrapolate: 'clamp'
      })
    }
  ];

  const titleAnimationConfig = [
    {
      fontSize: offset.interpolate({
        inputRange: [0, MAX_INPUT_VALUE],
        outputRange: [equipmentName.length >= 20 ? 28 : 36, 28],
        extrapolate: 'clamp'
      })
    },
    {
      bottom: offset.interpolate({
        inputRange: [0, MAX_INPUT_VALUE],
        outputRange: [equipmentDescription ? 75 : 30, 20],
        extrapolate: 'clamp'
      }),
    },

  ]

  const descriptionAnimationConfig = [
    {
      transform: [{
        translateY: offset.interpolate({
          inputRange: [0, MAX_INPUT_VALUE],
          outputRange: [0, -120],
          extrapolate: 'clamp'
        }),
      }]
    },
    {
      opacity: offset.interpolate({
        inputRange: [0, MAX_INPUT_VALUE / 2],
        outputRange: [1, 0],
        extrapolate: 'clamp'
      })
    },
    {
      bottom: offset.interpolate({
        inputRange: [0, MAX_INPUT_VALUE],
        outputRange: [equipmentDescription ? -5 : 30, 20],
        extrapolate: 'clamp'
      }),
    },
  ];

  return (
    <Container style={[...containerAnimationConfig]}>
      <Icon
        style={[...iconAnimationConfig]}
        resizeMode={"contain"}
        source={equipmentIcon} />
      <Title style={[...titleAnimationConfig]}> {equipmentName}</Title>
      <Description style={[...descriptionAnimationConfig]}> {equipmentDescription} </Description>
    </Container>
  )
};

export default Header;
