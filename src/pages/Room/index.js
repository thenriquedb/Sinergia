import React, {Component} from 'react';
import {View} from 'react-native';

// components
import Collapse from '../../components/Collapse/index';
import CardEquipment from '../../components/Cards/CardEquipment/index';
import HiddenCard from '../../components/Cards/CardEquipment/HiddenCard';
import {SwipeListView} from 'react-native-swipe-list-view';

// estilos
import {
  EquipmentsList,
  Container,
  HeaderContainer,
  HeaderInfo,
  HeaderInfosContainer,
} from './styles';
import {TextBold, TextLight, Text, TextThin} from '../../styles/fonts';
export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {room: this.props.navigation.getParam('room')};
    this.collapseVisible = this.collapseVisible.bind(this);
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
              R$ 11,40
            </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Consumo Total
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              227 W
            </TextLight>
          </HeaderInfo>

          <HeaderInfo>
            <Text color={'#fff'} fontSize={'h6'}>
              Maior Consumo
            </Text>
            <TextLight color={'#fff'} fontSize={'h5'}>
              Geladeira
            </TextLight>
          </HeaderInfo>
        </HeaderInfosContainer>
      </HeaderContainer>
    );
  }

  render() {
    return (
      <Container>
        <Collapse
          visible={this.collapseVisible()}
          hidden={<Text> Nao visivel </Text>}
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
      </Container>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {};
// };

// export default connect(null, mapDispatchToProps)(Room);
