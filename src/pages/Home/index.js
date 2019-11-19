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
import NewRoomModal from './NewRoomModal/index';

const Home = props => {
  const [totalKw, setTotalKw] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const [newRoomModalIsVisible, setNewRoomModalIsVisible] = useState(false);
  const [updateList, setUpdateList] = useState(false);

  useEffect(() => {
    setTotalKw(
      props.rooms.reduce((prevVal, elem) => prevVal + elem.totalKw, 0),
    );

    setTotalAmount(
      props.rooms.reduce((prevVal, elem) => prevVal + elem.totalAmount, 0),
    );
  });

  const reRender = () => {
    setUpdateList(!updateList);
  };

  const toggleNewRoomModal = () => {
    const t = !newRoomModalIsVisible;
    setNewRoomModalIsVisible(t);
  };

  return (
    <Container>
      <Header totalKw={totalKw} totalAmount={totalAmount} />
      <Tasks>
        <SwipeListView
          data={props.rooms}
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
            />
          )}
          renderItem={({item}) => (
            <CardRoom
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

      <NewRoomModal
        toggleModal={toggleNewRoomModal}
        isVisible={newRoomModalIsVisible}
      />
    </Container>
  );
};

Home.navigationOptions = () => {
  return {header: null};
};

const mapStateToProps = state => ({
  rooms: state.houseReducer.rooms,
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
