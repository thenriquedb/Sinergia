import React, { useEffect, useState } from 'react';

// styles
import { HeaderContainer, Icon, HeaderInfo, HeaderInfosContainer, HeaderTop } from './styles';
import { TextBold, TextLight, Text } from '../../../../styles/fonts';

import { connect } from 'react-redux';

import Collapse from '../../../../components/Collapse/';
import { moneyMask, kwMask } from "../../../../util/masks";

const Header = (props) => {
  const {
    roomName,
    tarifaUsed,
    equipmentHigherConsumption,
    totalTarifaConvencional,
    totalTarifaBranca,
    kwMonthly,
    roomIcon
  } = props;



  const headerCollapseVisible = () => {
    return (
      <HeaderContainer>
        <HeaderTop>
          <Icon resizeMode={"contain"} source={roomIcon} />

          <TextBold textAlign={'center'} color={'#fff'} fontSize={'h1'}>
            {roomName}
          </TextBold>

        </HeaderTop>

        <HeaderInfosContainer>
          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h5'}>
              Gasto Mensal
            </Text>
            <TextLight color={'#fff'} fontSize={'h4'}>
              {tarifaUsed === 'convencional' ? moneyMask(totalTarifaConvencional) : moneyMask(totalTarifaBranca)}
            </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h5'}> Consumo total </Text>
            <TextLight color={'#fff'} fontSize={'h4'}> {kwMask(kwMonthly)} </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h5'}> Maior Consumo </Text>
            <TextLight color={'#fff'} fontSize={'h4'}>
              {equipmentHigherConsumption.length >= 20 ?
                equipmentHigherConsumption.substring(0, 20).concat('...')
                : equipmentHigherConsumption}
            </TextLight>
          </HeaderInfo>
        </HeaderInfosContainer>
      </HeaderContainer>
    );
  }

  const headerCollapseHidden = () => {
    return (
      <HeaderContainer>
        <TextBold color={'#fff'} fontSize={'h4'}>
          Gastos mensais
        </TextBold>

        <HeaderInfosContainer>
          <HeaderInfo>
            <TextLight textAlign='center' color={'#fff'} fontSize={'h3'}>
              R$ {totalTarifaBranca
                .toFixed(2)
                .replace('.', ',')}
            </TextLight>
            <TextBold textAlign='center' color={'#fff'} fontSize={'h5'}> Tarifa branca</TextBold>
          </HeaderInfo>

          <HeaderInfo>
            <TextLight textAlign='center' color={'#fff'} fontSize={'h3'}>
              R$ {totalTarifaConvencional.toFixed(2)
                .replace('.', ',')}
            </TextLight>
            <TextBold textAlign='center' color={'#fff'} fontSize={'h5'}> Tarifa convencional</TextBold>
          </HeaderInfo>
        </HeaderInfosContainer>

        <Text style={{ marginTop: 20, }} color={'#fff'} fontSize={'h5'}>
          Utilizando a tarifa branca você economiza   </Text>

        <TextBold color={'#fff'} fontSize={'h2'}>
          R$ {
            (totalTarifaConvencional - totalTarifaBranca)
              .toFixed(2)
              .replace('.', ',')
          }
        </TextBold>
      </HeaderContainer>
    );
  }

  return (
    <>
      <Collapse
        visible={headerCollapseVisible()}
        hidden={headerCollapseHidden()}
      />
    </>
  );
};





const mapStateToProps = (state, ownProps) => ({
  valorTarifaConvencional: state.houseReducer.dealership.valorTarifaConvencional,
  tarifaUsed: state.houseReducer.tarifa,
});

const mapDispatchToProps = dispatch => {
  return {
    setRoomKwMonthly: (idRoom, totalKwMonthly) =>
      dispatch({
        type: 'SET_ROOM_KW_MONTHLY',
        payload: { idRoom, totalKwMonthly },
      }),
    setRoomMonthlyExpenses: (idRoom, totalTarifaConvencional, totalTarifaBranca) =>
      dispatch({
        type: 'SET_ROOM_MONTHLY_EXPENSES',
        payload: { idRoom, totalTarifaConvencional, totalTarifaBranca },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
