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

export default function HeaderVisible(props) {
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
        inputRange: [100, 500],
        outputRange: [40, 0],
        extrapolate: 'clamp'
      })
    },

    {
      marginTop: offset.interpolate({
        inputRange: [100, 500],
        outputRange: [10, -10],
        extrapolate: 'clamp'
      })
    },
    {
      transform: [{
        translateY: offset.interpolate({
          inputRange: [100, 500],
          outputRange: [0, 10],
        }),
        translateX: offset
      }]
    },
    {
      opacity: offset.interpolate({
        inputRange: [100, 300, 500],
        outputRange: [1, 0, 0],
        extrapolate: 'clamp'
      })
    }
  ];

  const headerTopAnimationConfig = [
    {
      height: offset.interpolate({
        inputRange: [100, 500],
        outputRange: [200, 20],
        extrapolate: 'clamp'
      })
    },
  ];

  const titleAnimationConfig = [
    {
      padding: offset.interpolate({
        inputRange: [100, 500],
        outputRange: [0, 40],
        extrapolate: 'clamp'
      })
    },
    {
      fontSize: offset.interpolate({
        inputRange: [100, 500],
        outputRange: [48, 36],
        extrapolate: 'clamp'
      })
    },
  ];

  const iconAnimationConfig = [
    {
      height: offset.interpolate({
        inputRange: [100, 300, 700],
        outputRange: [140, 0, 0],
        extrapolate: 'clamp'
      })
    },
    {
      opacity: offset.interpolate({
        inputRange: [100, 300, 500],
        outputRange: [1, 0.2, 0],
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

        <Title style={[...titleAnimationConfig]}>  {room.name} </Title>
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
