import React from 'react';

import {
  Container,
  HeaderTop,
  HeaderInfo,
  HeaderInfosContainer,
  HeaderInfoLabel,
  HeaderInfoValue,
  Title,
  Icon,
} from './styles';

import { moneyMask, kwMask } from "../../../../../util/masks";

function HeaderVisible(props) {
  const {
    offset,
    room,
    totalTarifaBranca,
    totalTarifaConvencional,
    kwMonthly,
    equipmentHigherConsumption,
    tarifaUsed
  } = props;

  const headerInfosAnimationConfig = [
    {
      height: offset.interpolate({
        inputRange: [0, 320, 600],
        outputRange: [40, 20, 0],
        extrapolate: 'clamp'
      })
    },
    {
      marginTop: offset.interpolate({
        inputRange: [200, 500],
        outputRange: [15, -10],
        extrapolate: 'clamp'
      })
    },
    {
      transform: [{
        translateY: offset.interpolate({
          inputRange: [150, 400],
          outputRange: [0, -10],
        }),
        translateX: offset
      }]
    },
    {
      opacity: offset.interpolate({
        inputRange: [150, 250, 320, 400],
        outputRange: [1, 0, 0, 0],
        extrapolate: 'clamp'
      })
    }
  ];

  const headerTopAnimationConfig = [
    {
      height: offset.interpolate({
        inputRange: [0, 320, 600],
        outputRange: [200, 40, 0],
        extrapolate: 'clamp'
      })
    },
  ];

  const titleAnimationConfig = [
    {
      fontSize: offset.interpolate({
        inputRange: [0, 500],
        outputRange: [40, 28],
        extrapolate: 'clamp'
      })
    },
  ];

  const iconAnimationConfig = [
    {
      height: offset.interpolate({
        inputRange: [0, 320, 600],
        outputRange: [140, 80, 0],
        extrapolate: 'clamp'
      })
    },
    {
      transform: [{
        translateY: offset.interpolate({
          inputRange: [150, 400],
          outputRange: [0, -10],
          extrapolate: 'clamp'
        }),
      }]
    },
    {
      opacity: offset.interpolate({
        inputRange: [150, 250, 320, 400],
        outputRange: [1, 0, 0, 0],
        extrapolate: 'clamp'
      })
    }
  ];

  return (
    <Container>
      <HeaderTop style={[...headerTopAnimationConfig]}>
        <Icon
          style={[...iconAnimationConfig]}
          resizeMode={"contain"}
          source={room.icon.light} />

        <Title style={[...titleAnimationConfig]}>{room.name} </Title>
      </HeaderTop>

      <HeaderInfosContainer style={[...headerInfosAnimationConfig]}>
        <HeaderInfo>
          <HeaderInfoLabel>Gasto Mensal </HeaderInfoLabel>
          <HeaderInfoValue>
            {tarifaUsed === 'convencional' ? moneyMask(totalTarifaConvencional) : moneyMask(totalTarifaBranca)}
          </HeaderInfoValue>
        </HeaderInfo>

        <HeaderInfo>
          <HeaderInfoLabel>Consumo total </HeaderInfoLabel>
          <HeaderInfoValue>{kwMask(kwMonthly)} </HeaderInfoValue>
        </HeaderInfo>

        <HeaderInfo>
          <HeaderInfoLabel>Maior Consumo </HeaderInfoLabel>
          <HeaderInfoValue
            style={{ fontSize: equipmentHigherConsumption.length <= 20 ? 22 : 16 }}
          >
            {
              equipmentHigherConsumption.length >= 20 ?
                equipmentHigherConsumption.substring(0, 20).concat('...')
                : equipmentHigherConsumption
            }
          </HeaderInfoValue>
        </HeaderInfo>
      </HeaderInfosContainer>
    </Container>
  );
}

export default HeaderVisible;