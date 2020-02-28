import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// style
import { Container, DeleteButton, IconContainer } from './styles';

const HiddenCard = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [-160, 0],
    outputRange: [1, 0],
    extrapolate: "clamp"
  });

  return (
    <Container>
      <DeleteButton>
        <IconContainer
          style={[
            {
              transform: [{
                scale: scale
              }]
            }
          ]}>
          <MaterialCommunityIcons name="delete" size={40} color="#fff" />
        </IconContainer>
      </DeleteButton>
    </Container>
  );
};


export default HiddenCard;
