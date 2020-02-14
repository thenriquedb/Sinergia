import React, { useState, useEffect } from 'react';
import { Animated, BackHandler } from 'react-native';

import ActionButton from 'react-native-action-button';
import { connect } from 'react-redux';

import Header from "./Header";
import CardRoom from '../../../components/Cards/CardRoom/index';
import RoomListEmpty from "./RoomListEmpty";

import Colors from '../../../styles/colors';
import { Container, Rooms, RoomList } from './style';

const Home = props => {
  const { rooms, house, navigation, tarifaUsed } = props;
  const [updateList, setUpdateList] = useState(false);


  // Desabilita o retorno para as telas de boas vindas
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => BackHandler.exitApp());
  }, [])

  const scrollOffset = new Animated.Value(0);

  useEffect(() => {
    console.log("HOME ROOMS: ", rooms)
  }, [house])

  const reRender = () => {
    setUpdateList(!updateList);
  };

  return (
    <>
      {rooms.length > 0 ?
        <Container>
          <Header
            navigation={navigation}
            rooms={rooms}
            scrollOffset={scrollOffset}
            tarifaUsed={tarifaUsed}
          />

          <Rooms>
            <RoomList
              data={rooms}
              showsVerticalScrollIndicator={false}
              keyExtractor={room => room.id}
              extraData={props.house}
              renderItem={({ item }) => (
                <CardRoom
                  refreshList={reRender}
                  toggleRoomCard={() => navigation.navigate('Room', { roomId: item.id })}
                  room={item} />
              )}
              scrollEventThrottle={16}
              onScroll={Animated.event([{
                nativeEvent: {
                  contentOffset: { y: scrollOffset },
                  useNativeDriver: true
                }
              }])}
            />
          </Rooms>
        </Container> :
        <RoomListEmpty />
      }

      <ActionButton
        size={55}
        onPress={() => navigation.navigate('NewRoom')}
        buttonColor={Colors.primary}
      />
    </>
  );
};


const mapStateToProps = state => ({
  house: state.houseReducer,
  rooms: state.houseReducer.rooms,
  tarifaUsed: state.houseReducer.tarifa
});

export default connect(mapStateToProps, null)(Home);