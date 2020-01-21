import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

// styles
import { HeaderContainer, Icon, HeaderInfo, HeaderInfosContainer, HeaderTop } from './styles';
import { TextBold, TextLight, Text } from '../../../../styles/fonts';

import { connect } from 'react-redux';

import EditRoomModal from "../EditRoomModal"
import Collapse from '../../../../components/Collapse/';

const Header = (props) => {
  const { room } = props;
  const [equipmentHigherConsumption, setEquipmentHigherConsumption] = useState('');
  const [kwMonthly, setKwMonthly] = useState(0);
  const [totalTarifaConvencional, setTotalTarifaConvencional] = useState(0);
  const [totalTarifaBranca, setTotalTarifaBranca] = useState(0);
  const [editModalIsVisible, setEditModalIsVisible] = useState(false);

  useEffect(() => {
    setKwMonthly(room.equipments.reduce(
      (preVal, elem) => preVal + elem.kwMonthly,
      0,
    ));
    calculateMonthlyExpenses();
    getEquipmentHigherConsumption();
  });


  useEffect(() => {
    props.setRoomKwMonthly(room.id, kwMonthly);
    props.setRoomMonthlyExpenses(room.id, totalTarifaConvencional, totalTarifaBranca)
  }, [kwMonthly, totalTarifaBranca, totalTarifaConvencional])


  const getEquipmentHigherConsumption = () => {
    let maior = room.equipments[0].kwMonthly;
    let maiorNome = room.equipments[0].name;

    room.equipments.forEach(item => {
      if (item.kwMonthly > maior) {
        maior = item.kwMonthly;
        maiorNome = item.name;
      }
    });

    setEquipmentHigherConsumption(maiorNome);
  }

  // Calcula o consumo total de R$ mensais do coomôdo
  // Calcular a tarifa convencional e a branca
  const calculateMonthlyExpenses = () => {
    setTotalTarifaConvencional(kwMonthly * props.valueKW);
    setTotalTarifaBranca(room.equipments[0].tarifaBranca.monthlyExpenses);
  }

  const headerCollapseVisible = () => {
    return (
      <HeaderContainer>
        <HeaderTop>
          <Icon resizeMode={"contain"} source={room.icon.light} />

          <TouchableOpacity onPress={() => setEditModalIsVisible(!editModalIsVisible)}>
            <TextBold textAlign={'center'} color={'#fff'} fontSize={'h1'}>
              {room.name}
            </TextBold>

          </TouchableOpacity>
        </HeaderTop>

        <HeaderInfosContainer>
          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h5'}>
              Gasto Mensal
            </Text>
            <TextLight color={'#fff'} fontSize={'h4'}>
              R$
              {
                props.tarifaUsed === 'convencional' ?
                  totalTarifaConvencional
                    .toFixed(2)
                    .replace('.', ',')
                  :
                  totalTarifaBranca
                    .toFixed(2)
                    .replace('.', ',')
              }
            </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h5'}>
              Consumo total
            </Text>
            <TextLight color={'#fff'} fontSize={'h4'}>
              {kwMonthly.toFixed(2)} KW
            </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h5'}>
              Maior Consumo{' '}
            </Text>
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
            Math.abs(totalTarifaConvencional - totalTarifaBranca)
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

      <EditRoomModal
        isVisible={editModalIsVisible}
        room={room}
        updateData={() => { }}
        closeModal={() => setEditModalIsVisible(!editModalIsVisible)} />
    </>
  );
};

const mapStateToProps = state => ({

  valueKW: state.houseReducer.valueKW,
  tarifaUsed: state.houseReducer.tarifa
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
    editRoom: (id, name, typeRoom) => {
      dispatch({ type: 'EDIT_ROOM', payload: { id, name, typeRoom } });
    },
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Header);
