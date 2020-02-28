import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'

import SimpleCardRoom from '../../../components/Cards/SimpleCardRoom';

import {
  Container,
  NextPageButton,
  ContinueConfigArea,
  Content,
  RoomsList,
  NewRoomButton
} from './styles';
import { TextLight, Text } from '../../../styles/fonts';


class SetRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateList: false
    }
    this.toggleEditRoom = this.toggleEditRoom.bind(this);
    this.reRender = this.reRender.bind(this);
  }

  reRender() {
    let s = this.state;
    s.updateList = !s.updateList;
    this.setState(s);
  }

  toggleEditRoom(data) {
    this.props.navigation.navigate('StarterEditRoom', { room: data });
  };

  render() {
    return (
      <Container>
        <TextLight textAlign='center' fontSize='h4'> Esta quase pronto! Agora é só cadastrar os cômodos  </TextLight>
        <View style={{ flex: 1 }}>
          <Content >
            <RoomsList
              data={this.props.rooms}
              keyExtractor={item => item.name}
              showsVerticalScrollIndicator={false}
              disableRightSwipe={true}
              renderItem={({ item }) => <SimpleCardRoom room={item} />}
            />

            {this.props.rooms.length ?
              <TouchableHighlight
                underlayColor2={'#fcf8f7'}
                onPress={() => this.props.navigation.navigate('StarterNewRoom')}>
                <NewRoomButton>
                  <Text fontSize={'h5'} color={'#cccccc'}> Adcionar um novo comôdo </Text>
                </NewRoomButton>
              </TouchableHighlight>
              : null
            }
          </Content>
        </View>

        <ContinueConfigArea>
          {this.props.rooms.length ?
            <NextPageButton onPress={() => this.props.navigation.navigate('Final')}>
              <Text fontSize='h6' color='#fff'> Continuar </Text>
            </NextPageButton>
            :
            <NextPageButton onPress={() => this.props.navigation.navigate('StarterNewRoom')}>
              <Text fontSize='h6' color='#fff'> Adcionar um novo comôdo </Text>
            </NextPageButton>
          }
        </ContinueConfigArea>
      </Container>
    )
  }
}
const mapStateToProps = state => ({
  rooms: state.houseReducer.rooms,
});

export default connect(mapStateToProps, null)(SetRooms);