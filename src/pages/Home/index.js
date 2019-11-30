import React, {useEffect, useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';

//Redux
import {connect} from 'react-redux';

// Style
import Colors from '../../styles/colors';
import {Container, Tasks} from './style';

// Components
import ActionButton from 'react-native-action-button';
import Header from './Header/index';
import CardRoom from '../../components/CardRoom/index';
import HiddenCard from '../../components/CardRoom/HiddenCardRoom/index';

const Home = props => {
  const [totalKw, setTotalKw] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [updateList, setUpdateList] = useState(false);

  useEffect(() => {
    setTotalKw(
      props.house.rooms.reduce((prevVal, elem) => prevVal + elem.totalKw, 0),
    );

    setTotalAmount(
      props.house.rooms.reduce(
        (prevVal, elem) => prevVal + elem.totalAmount,
        0,
      ),
    );
  });

  const reRender = () => {
    setUpdateList(!updateList);
  };

  const toggleNewRoomModal = () => {
    props.navigation.navigate('NewRoom');
  };

  const toggleRoomCard = () => {
    props.navigation.navigate('Room');
  };

  return (
    <Container>
      <Header
        roomHigherConsumption={props.house.roomHigherConsumption}
        totalKw={totalKw}
        totalAmount={totalAmount}
      />
      <Tasks>
        <SwipeListView
          data={props.house.rooms}
          showsVerticalScrollIndicator={false}
          keyExtractor={room => room.id}
          rightOpenValue={-100}
          disableRightSwipe={true}
          extraData={updateList}
          renderHiddenItem={({item, index}) => (
            <HiddenCard
              refreshList={reRender}
              index={index}
              idRoom={item.id}
              name={item.name}
              selectedRoom={item.typeRoom}
            />
          )}
          renderItem={({item}) => (
            <CardRoom
              toggleRoomCard={toggleRoomCard}
              equipamentsAmount={item.equipaments.length}
              totalKw={item.totalKw}
              totalAmount={item.totalAmount}
              name={item.name}
            />
          )}
        />
      </Tasks>
      <ActionButton
        size={55}
        onPress={() => toggleNewRoomModal()}
        buttonColor={Colors.primary}
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  house: state.houseReducer,
});

export default connect(mapStateToProps, null)(Home);
