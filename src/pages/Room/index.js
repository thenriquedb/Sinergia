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
  EquipmentsList, Container, HeaderContainer,
  HeaderInfo, HeaderInfosContainer, ContainerNoEquipment
} from './styles';
import Colors from '../../styles/colors';

import { TextBold, TextLight, Text } from '../../styles/fonts';

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: this.props.navigation.getParam('room'),
      expenses: {},
    };

    this.collapseVisible = this.collapseVisible.bind(this);
    this.toggleNewEquipment = this.toggleNewEquipment.bind(this);
    this.renderEquipmentsList = this.renderEquipmentsList.bind(this);
    this.renderNoEquipment = this.renderNoEquipment.bind(this);
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
              {/* {this.state.room.tarifaConvencional.kwMonthly} */}
            </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Maior Consumo{' '}
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              {/* {'aaaaa'} */}
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
            data={this.state.room.equipments}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            rightOpenValue={-100}
            disableRightSwipe={true}
            renderHiddenItem={({ item, index }) => <HiddenCard />}
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

export default connect(mapStateToProps, null)(Room);
