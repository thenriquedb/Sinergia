import React, { Component } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// redux
import { connect } from 'react-redux';

// components
import Collapse from '../../components/Collapse/index';
import CardEquipment from '../../components/Cards/CardEquipment/index';
import HiddenCard from '../../components/Cards/CardEquipment/HiddenCard';
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

import Colors from '../../styles/colors';
import { TextBold, TextLight, Text } from '../../styles/fonts';

class Room extends Component {
  constructor(props) {
    super(props);

    this.state = {
      room: this.props.rooms.find(item => item.id === this.props.navigation.getParam('roomId')),
      kwMonthly: 0,
      EquipmentsListUpdate: false,
    };

    this.collapseVisible = this.collapseVisible.bind(this);
    this.toggleNewEquipment = this.toggleNewEquipment.bind(this);
    this.renderEquipmentsList = this.renderEquipmentsList.bind(this);
    this.renderNoEquipment = this.renderNoEquipment.bind(this);

    this.calculateKwMonthly = this.calculateKwMonthly.bind(this);
    this.calculateMonthlyExpenses = this.calculateMonthlyExpenses.bind(this);
    this.reRenderEquipmentsList = this.reRenderEquipmentsList.bind(this);
  }

  // Quando algum equipamento for deletado ou editado aé necessario recalcular o KW
  reRenderEquipmentsList() {
    let s = this.state;
    s.EquipmentsListUpdate = !s.EquipmentsListUpdate;
    this.setState(s);

    this.calculateKwMonthly();

  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      this.calculateKwMonthly();
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }



  // Calcula o consumo total de KW mensais do coomôdo
  calculateKwMonthly() {
    let kwTotal = this.state.room.equipments.reduce(
      (preVal, elem) => preVal + elem.kwMonthly,
      0,
    );

    this.props.setRoomKwMonthly(this.state.room.id, kwTotal);

    let s = this.state;
    s.kwMonthly = kwTotal;
    s.room = this.props.rooms.find(item => item.id === this.state.room.id);
    this.setState(s);
  }

  // Calcula o consumo total de R$ mensais do coomôdo
  calculateMonthlyExpenses() {
    return;
  }

  collapseVisible() {
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
              {/* {this.state.room.tarifaConvencional.monthlySpend
                .toFixed(2)
                .replace('.', ',')} */}
            </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Consumo Total
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              {this.state.room.tarifaConvencional.kwMonthly} KW
            </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Maior Consumo{' '}
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              {'aaaaa'}
            </TextLight>
          </HeaderInfo>
        </HeaderInfosContainer>
      </HeaderContainer>
    );
  }

  collapseHidden() {
    return (
      <HeaderContainer>
        <TextBold color={'#fff'} fontSize={'h5'}>
          Tarifa convencional
        </TextBold>
        <HeaderInfosContainer>
          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Gasto mensal
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              R$ 6,00
            </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Consumo mensal (KW/h)
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              44 W
            </TextLight>
          </HeaderInfo>
        </HeaderInfosContainer>

        <TextBold style={{ marginTop: 20 }} color={'#fff'} fontSize={'h5'}>
          Tarifa branca
        </TextBold>
        <HeaderInfosContainer>
          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Gasto mensal
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              R$ 6,00
            </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Consumo mensal (KW/h)
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              44 W
            </TextLight>
          </HeaderInfo>
        </HeaderInfosContainer>
      </HeaderContainer>
    );
  }

  toggleNewEquipment() {


    this.props.navigation.navigate('NewEquipment1', {
      idRoom: this.state.room.id,
    });
  }

  renderNoEquipment() {
    return (
      <ContainerNoEquipment>
        <MaterialCommunityIcons name="candle" size={100} color="#707070" />

        <TextBold textAlign={'center'} color={'#707070'} fontSize={'h4'}>
          "{this.state.room.name}" não possui nenhum equipamento cadastrado.
        </TextBold>

        <ActionButton
          size={55}
          onPress={() => this.toggleNewEquipment()}
          buttonColor={Colors.primary}
        />
      </ContainerNoEquipment>
    );
  }

  renderEquipmentsList() {
    return (
      <Container>
        <Collapse
          visible={this.collapseVisible()}
          hidden={this.collapseHidden()}
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
});

const mapDispatchToProps = dispatch => {
  return {
    setRoomKwMonthly: (idRoom, totalKwMonthly) =>
      dispatch({
        type: 'SET_ROOM_KW_MONTHLY',
        payload: { idRoom, totalKwMonthly },
      }),
    setRoomMonthlyExpenses: (idRoom, totalMonthlyExpenses) =>
      dispatch({
        type: 'SET_ROOM_MONTHLY_EXPENSES',
        payload: { idRoom, totalMonthlyExpenses },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
