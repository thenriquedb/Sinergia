import React, {Component} from 'react';
import {View} from 'react-native';

// redux
import {connect} from 'react-redux';

// components
import Collapse from '../../components/Collapse/index';
import CardEquipment from '../../components/Cards/CardEquipment/index';
import HiddenCard from '../../components/Cards/CardEquipment/HiddenCard';
import {SwipeListView} from 'react-native-swipe-list-view';
import ActionButton from 'react-native-action-button';

// estilos
import {
  EquipmentsList,
  Container,
  HeaderContainer,
  HeaderInfo,
  HeaderInfosContainer,
} from './styles';

import Colors from '../../styles/colors';

import {TextBold, TextLight, Text, TextThin} from '../../styles/fonts';

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: this.props.navigation.getParam('room'),
    };

    this.collapseVisible = this.collapseVisible.bind(this);
    // this.setConsumeData = this.setConsumeData.bind(this);
    this.toggleNewEquipment = this.toggleNewEquipment.bind(this);
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
              {this.state.room.tarifaConvencional.monthlySpend
                .toFixed(2)
                .replace('.', ',')}
            </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Consumo Total
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              {this.state.room.tarifaConvencional.kwMonthly}
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
          Valor total
        </TextBold>
        <HeaderInfosContainer>
          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Diário
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              R$ 0,40
            </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Semanal
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              R$ 1,40
            </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Mensal
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              R$ 6,00
            </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Anual
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              R$ 72,00
            </TextLight>
          </HeaderInfo>
        </HeaderInfosContainer>

        <TextBold style={{marginTop: 20}} color={'#fff'} fontSize={'h5'}>
          Consumo total (KW/h)
        </TextBold>
        <HeaderInfosContainer>
          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Diário
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              12 KW
            </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Semanal
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              84 KW
            </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Mensal
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              336 KW
            </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Anual
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              4032 KW
            </TextLight>
          </HeaderInfo>
        </HeaderInfosContainer>
      </HeaderContainer>
    );
  }

  toggleNewEquipment() {
    this.props.navigation.navigate('NewEquipment');
  }

  render() {
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
            // extraData={updateList}
            renderHiddenItem={({item, index}) => <HiddenCard />}
            renderItem={({item}) => <CardEquipment equipment={item} />}
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
}

// const mapDispatchToProps = dispatch => {
//   return {
//     calculateConsumeRoom: idRoom => {
//       dispatch({type: 'CALCULATE_CONSUME_ROOM', payload: {idRoom}});
//     },
//   };
// };

// export default connect(null, mapDispatchToProps)(Room);
