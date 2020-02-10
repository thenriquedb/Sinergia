import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'

import SimpleCardRoom from '../../../components/Cards/SimpleCardRoom';

// styles
import { Container, NextPageButton, ContinueConfigArea, Content, RoomsList, NewRoomButton } from './styles';
import { TextLight, Text } from '../../../styles/fonts';


class SetRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateList: false
    }
    this.renderButton = this.renderButton.bind(this);
    this.toggleEditRoom = this.toggleEditRoom.bind(this);
    this.renderAddNewRoom = this.renderAddNewRoom.bind(this);
    this.reRender = this.reRender.bind(this);
  }

  reRender() {
    let s = this.state;
    s.updateList = !s.updateList;
    this.setState(s);
  }

  renderAddNewRoom() {
    return (
      <TouchableHighlight underlayColor={'#fcf8f7'} onPress={() => this.props.navigation.navigate('StarterNewRoom')}>
        <NewRoomButton>
          <Text fontSize={'h5'} color={'#cccccc'}> Adcionar um novo comôdo </Text>
        </NewRoomButton>
      </TouchableHighlight>
    );
  }


  toggleEditRoom(data) {
    this.props.navigation.navigate('StarterEditRoom', { room: data });
  };


  renderButton() {
    // console.log("this.state.rooms ", this.state.rooms);
    if (this.props.rooms) {
      return (
        <NextPageButton onPress={() => this.props.navigation.navigate('Final')}>
          <Text fontSize='h6' color='#fff'> Continuar </Text>
        </NextPageButton>
      );
    } else {
      return (
        <NextPageButton onPress={() => this.props.navigation.navigate('StarterNewRoom')}>
          <Text fontSize='h6' color='#fff'> Adcionar um novo comôdo </Text>
        </NextPageButton>
      );
    }
  }

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
            {this.props.rooms && this.renderAddNewRoom()}
          </Content>
        </View>

        <ContinueConfigArea>
          {this.renderButton()}
        </ContinueConfigArea>
      </Container>
    )
  }
}
const mapStateToProps = state => ({
  rooms: state.houseReducer.rooms,
});

export default connect(mapStateToProps, null)(SetRooms);


