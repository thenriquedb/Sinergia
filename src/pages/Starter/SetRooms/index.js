import React, { Component } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';

import { View, TouchableHighlight } from 'react-native';
import SimpleCardRoom from '../../../components/Cards/SimpleCardRoom';
import HiddenSimpleCardRoom from '../../../components/Cards/SimpleCardRoom/HiddenSimpleCardRoom';


import { connect } from 'react-redux'

// styles
import { Container, NextPageButton, ContinueConfigArea, Content, NewRoomButton } from './styles';
import { TextLight, Text } from '../../../styles/fonts';


class SetRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: '0',
      updateList: false
    }
    this.renderButton = this.renderButton.bind(this);
    this.toggleEditRoom = this.toggleEditRoom.bind(this);
    this.renderAddNewRoom = this.renderAddNewRoom.bind(this);
    this.reRender = this.reRender.bind(this);
  }

  // componentDidMount() {
  //   const { navigation } = this.props;

  //   this.focusListener = navigation.addListener('didFocus', () => {
  //     this.reRender();
  //   });
  // }

  // componentWillUnmount() {
  //   this.focusListener.remove();
  // }


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
    if (this.state.rooms.length > 0) {
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
            <SwipeListView
              data={this.props.rooms}
              extraData={this.state.updateList}
              keyExtractor={item => item.name}
              showsVerticalScrollIndicator={false}
              rightOpenValue={-100}
              disableRightSwipe={true}
              renderItem={({ item }) => <SimpleCardRoom room={item} />}
              renderHiddenItem={({ item }) => <HiddenSimpleCardRoom
                refreshList={this.reRender}
                toggleEditRoom={this.toggleEditRoom}
                room={item} />}
            />
            {this.state.rooms.length > 0 ? this.renderAddNewRoom() : null}
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


