import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

//Redux
import { connect } from 'react-redux';

// Style
import Colors from '../../styles/colors';
import { Container, Tasks, Details, TotalConsumeKW, Header } from './style';
import { TextLight, TextThin, TextBold } from '../../styles/fonts';

// Components
import ActionButton from 'react-native-action-button';
import { SwipeListView } from 'react-native-swipe-list-view';
import CardRoom from '../../components/Cards/CardRoom/index';
import HiddenCard from '../../components/Cards/CardRoom/HiddenCardRoom';

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

  const toggleNewRoomBtn = () => {
    props.navigation.navigate('NewRoom');
  };

  const toggleEditRoom = data => {
    props.navigation.navigate('EditRoom', { room: data });
  };

  const toggleRoomCard = room => {
    props.navigation.navigate('Room', { room: room });
  };

  return (
    <Container>
      <Header>
        <TotalConsumeKW>
          <TextBold color="#fff" fontSize="h5">
            Consumo Total
          </TextBold>

          <TextThin color="#fff" fontSize="h1">
            {totalKw} KW
          </TextThin>
        </TotalConsumeKW>

        <Details>
          <View>
            <TextBold color="#FFF"> Valor total </TextBold>
            <TextLight color="#fff" fontSize="h4">
              R${' '}
              {totalAmount
                .toFixed(2)
                .toString()
                .replace('.', ',')}
            </TextLight>
          </View>

          <View>
            <TextBold color="#FFF"> Maior consumo </TextBold>
            <TextLight color="#fff" fontSize="h4">
              Sala
            </TextLight>
          </View>

          <View>
            <TextBold color="#FFF"> Bandeira </TextBold>
            <TextLight color="#fff" fontSize="h4">
              Amarela
            </TextLight>
          </View>
        </Details>
      </Header>

      <Tasks>
        <SwipeListView
          data={props.house.rooms}
          showsVerticalScrollIndicator={false}
          keyExtractor={room => room.id}
          rightOpenValue={-100}
          disableRightSwipe={true}
          extraData={updateList}
          renderHiddenItem={({ item, index }) => (
            <HiddenCard
              refreshList={reRender}
              room={item}
              toggleEditRoom={toggleEditRoom}
            />
          )}
          renderItem={({ item }) => (
            <CardRoom toggleRoomCard={toggleRoomCard} room={item} />
          )}
        />
      </Tasks>
      <ActionButton
        size={55}
        onPress={() => toggleNewRoomBtn()}
        buttonColor={Colors.primary}
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  house: state.houseReducer,
});

export default connect(mapStateToProps, null)(Home);
