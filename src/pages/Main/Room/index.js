import React, { Component } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// redux
import { connect } from 'react-redux';

// components
import Collapse from '../../../components/Collapse/index';
import CardEquipment from '../../../components/Cards/CardEquipment/index';
import HiddenCard from '../../../components/Cards/CardEquipment/HiddenCard';
import { SwipeListView } from 'react-native-swipe-list-view';
import ActionButton from 'react-native-action-button';

// styles
import {
  EquipmentsList,
  Container,
  HeaderContainer,
  HeaderInfo,
  HeaderInfosContainer,
  ContainerNoEquipment,
} from './styles';

import Colors from '../../../styles/colors';
import { TextBold, TextLight, Text } from '../../../styles/fonts';

class Room extends Component {
  constructor(props) {
    super(props);

    this.state = {
      room: this.props.rooms.find(item => item.id === this.props.navigation.getParam('roomId')),
      kwMonthly: 0,
      MonthlyExpenses: 0,
      EquipmentsListUpdate: false,
      equipmentHigherConsumption: ''
    };

    this.headerCollapseVisible = this.headerCollapseVisible.bind(this);
    this.toggleNewEquipment = this.toggleNewEquipment.bind(this);
    this.renderEquipmentsList = this.renderEquipmentsList.bind(this);
    this.renderNoEquipment = this.renderNoEquipment.bind(this);

    this.calculateKwMonthly = this.calculateKwMonthly.bind(this);
    this.calculateMonthlyExpenses = this.calculateMonthlyExpenses.bind(this);
    this.reRenderEquipmentsList = this.reRenderEquipmentsList.bind(this);
    this.getRoomHigherConsumption = this.setEquipmentHigherConsumption.bind(this);

    this.state.room.equipments.length > 0 ? this.setEquipmentHigherConsumption() : null

  }

  // Quando algum equipamento for deletado ou editado aé necessario recalcular o KW
  reRenderEquipmentsList() {
    let s = this.state;
    s.EquipmentsListUpdate = !s.EquipmentsListUpdate;
    this.setState(s);

    this.calculateKwMonthly();
    this.calculateMonthlyExpenses();
    this.setEquipmentHigherConsumption();
  }

  componentDidMount() {
    const { navigation } = this.props;

    this.focusListener = navigation.addListener('didFocus', () => {
      this.calculateKwMonthly();
      this.calculateMonthlyExpenses();
      this.setEquipmentHigherConsumption();
    });
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }


  // Calcula o consumo total de KW mensais do comôdo
  calculateKwMonthly() {
    let kwTotal = this.state.room.equipments.reduce(
      (preVal, elem) => preVal + elem.kwMonthly,
      0,
    );

    this.props.setRoomKwMonthly(this.state.room.id, kwTotal);
  }

  setEquipmentHigherConsumption() {
    let maior = this.state.room.equipments[0].kwMonthly;
    let maiorNome = this.state.room.equipments[0].name;


    this.state.room.equipments.forEach(item => {
      if (item.kwMonthly > maior) {
        maior = item.kwMonthly;
        maiorNome = item.name;
      }
    });

    let s = this.state;
    s.equipmentHigherConsumption = maiorNome;
    this.setState(s);
  }


  // Calcula o consumo total de R$ mensais do coomôdo
  // Calcular a tarifa convencional e a branca
  calculateMonthlyExpenses() {
    let totalTarifaConvencional = this.state.room.totalKw * this.props.valueKW;
    let totalTarifaBranca = 0;

    this.props.setRoomMonthlyExpenses(this.state.room.id, totalTarifaConvencional, totalTarifaBranca)
    // return;
  }

  headerCollapseVisible() {
    return (
      <HeaderContainer>
        <TextBold textAlign={'center'} color={'#fff'} fontSize={'h1'}>
          {this.state.room.name}
        </TextBold>

        <HeaderInfosContainer>
          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Gasto Mensal
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              R$
              {this.state.room.tarifaConvencional.monthlyExpenses
                .toFixed(2)
                .replace('.', ',')}
            </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Consumo total
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              {this.state.room.totalKw.toFixed(2)} KW
            </TextLight>
          </HeaderInfo>

          {/* <TextLight fontSize="h4"> {equipment.name.length >= 22 ? equipment.name.substring(0, 22).concat('...') : equipment.name} </TextLight> */}

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Maior Consumo{' '}
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              {this.state.equipmentHigherConsumption.length >= 20 ?
                this.state.equipmentHigherConsumption.substring(0, 20).concat('...')
                : this.state.equipmentHigherConsumption}
            </TextLight>
          </HeaderInfo>
        </HeaderInfosContainer>
      </HeaderContainer>
    );
  }

  headerCollapseHidden() {
    return (
      <HeaderContainer>
        <TextBold color={'#fff'} fontSize={'h4'}>
          Gastos mensais
        </TextBold>

        <HeaderInfosContainer>
          <HeaderInfo>
            <TextLight textAlign='center' color={'#fff'} fontSize={'h3'}>
              R$ {this.state.room.tarifaBranca.monthlyExpenses
                .toFixed(2)
                .replace('.', ',')}
            </TextLight>
            <TextBold textAlign='center' color={'#fff'} fontSize={'h5'}> Tarifa branca</TextBold>
          </HeaderInfo>

          <HeaderInfo>
            <TextLight textAlign='center' color={'#fff'} fontSize={'h3'}>
              R$ {this.state.room.tarifaConvencional.monthlyExpenses
                .toFixed(2)
                .replace('.', ',')}
            </TextLight>
            <TextBold textAlign='center' color={'#fff'} fontSize={'h5'}> Tarifa convencional</TextBold>
          </HeaderInfo>
        </HeaderInfosContainer>

        <Text style={{ marginTop: 20, }} color={'#fff'} fontSize={'h5'}>
          Utilizando a tarifa branca você economiza   </Text>

        <TextBold color={'#fff'} fontSize={'h2'}>
          R$ {
            Math.abs(this.state.room.tarifaConvencional.monthlyExpenses - this.state.room.tarifaBranca.monthlyExpenses)
              .toFixed(2)
              .replace('.', ',')
          }
        </TextBold>
      </HeaderContainer>
    );
  }

  // Adcionar novo equipamento ao cômodo
  toggleNewEquipment() {
    this.props.navigation.navigate('NewEquipment1', {
      idRoom: this.state.room.id,
      typeRoom: this.state.room.typeRoom
    });
  }

  //  Se o comôdo não possuir nenhum equipamento cadastrado
  renderNoEquipment() {
    return (
      <ContainerNoEquipment>
        <MaterialCommunityIcons name="candle" size={100} color="#707070" />

        <TextBold textAlign={'center'} color={'#707070'} fontSize={'h4'}> Nenhum equipamento cadastrado </TextBold>
        <TextLight color="#707070" textAlign='center' fontSize='h5'>
          "{this.state.room.name}" não possui nenhum equipamento cadastrado.
       </TextLight>


        <ActionButton
          size={55}
          onPress={() => this.toggleNewEquipment()}
          buttonColor={Colors.primary}
        />
      </ContainerNoEquipment>
    );
  }

  //  Se o comôdo possuir pelo menos um equipamento cadastrado
  renderEquipmentsList() {
    return (
      <Container>
        <Collapse
          visible={this.headerCollapseVisible()}
          hidden={this.headerCollapseHidden()}
        />
        <EquipmentsList>
          <SwipeListView
            extraData={this.state.EquipmentsListUpdate}
            data={this.state.room.equipments}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            rightOpenValue={-100}
            disableRightSwipe={true}
            renderHiddenItem={({ item, index }) => (
              <HiddenCard reRender={this.reRenderEquipmentsList} idRoom={this.state.room.id} idEquipment={item.id} />
            )}
            renderItem={({ item }) => <CardEquipment equipment={item} />}
          />
        </EquipmentsList>

        <ActionButton
          size={55}
          onPress={() => this.toggleNewEquipment()}
          buttonColor={Colors.primary}
        />
      </Container>
    );
  }

  render() {
    return this.state.room.equipments.length
      ? this.renderEquipmentsList()
      : this.renderNoEquipment();
  }
}

const mapStateToProps = state => ({
  rooms: state.houseReducer.rooms,
  valueKW: state.houseReducer.valueKW,
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

export default connect(mapStateToProps, mapDispatchToProps)(Room);
