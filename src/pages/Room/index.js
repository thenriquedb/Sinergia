import React, {Component} from 'react';
import {View, Text} from 'react-native';

// components
import Collapse from '../../components/Collapse/index';
import CardEquipment from '../../components/Cards/CardEquipment/index';
import {EquipmentsList, Container} from './styles';
import HiddenCard from '../../components/Cards/CardEquipment/HiddenCard';

import {SwipeListView} from 'react-native-swipe-list-view';

// import { Container } from './styles';

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {room: this.props.navigation.getParam('room')};
  }

  render() {
    return (
      <Container>
        <Text> {this.state.room.name}</Text>
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
