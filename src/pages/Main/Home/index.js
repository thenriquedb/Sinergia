import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Redux
import { connect } from 'react-redux';

// Style
import Colors from '../../../styles/colors';
import { Container, ContainerNoRooms, Rooms, Details, TotalConsumeKW, Header } from './style';
import { TextLight, TextThin, TextBold } from '../../../styles/fonts';

// Components
import ActionButton from 'react-native-action-button';
import { SwipeListView } from 'react-native-swipe-list-view';
import CardRoom from '../../../components/Cards/CardRoom/index';
import HiddenCard from '../../../components/Cards/CardRoom/HiddenCardRoom';

const Home = props => {
  const [totalKw, setTotalKw] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [updateList, setUpdateList] = useState(false);
  const [roomHigherConsumption, setRoomHigherConsumption] = useState(false);

  useEffect(() => {
    setTotalKw(
      props.house.rooms.reduce((prevVal, elem) => prevVal + elem.totalKw, 0),
    );

    setTotalAmount(
      props.house.rooms.reduce(
        (prevVal, elem) => prevVal + elem.tarifaConvencional.monthlyExpenses,
        0,
      ),
    );

    props.house.rooms.length > 0 ? getRoomHigherConsumption() : null
  });

  const reRender = () => {
    setUpdateList(!updateList);
  };

  const toggleNewRoomBtn = () => {
    props.navigation.navigate('NewRoom');
  };


  const toggleRoomCard = room => {
    props.navigation.navigate('Room', { roomId: room.id });
  };

  // Seleciona o maior cômodo de maior consumo
  const getRoomHigherConsumption = room => {
    let highestExpense = props.house.rooms[0].tarifaConvencional.monthlyExpenses;
    let largestRoomSpent = props.house.rooms[0].name;

    props.house.rooms.forEach(item => {
      if (item.tarifaConvencional.monthlyExpenses > highestExpense) {
        highestExpense = item.tarifaConvencional.monthlyExpenses;
        largestRoomSpent = item.name
      }
    });

    setRoomHigherConsumption(largestRoomSpent);
  }

  // Pelo menos um cômodo cadastrado
  const renderHasRooms = () => {
    return (
      <Container>
        <Header>
          <TotalConsumeKW>
            <TextBold textAlign='center' color="#fff" fontSize="h5">
              Valor Total
          </TextBold>

            <TextThin textAlign='center' color="#fff" fontSize="h1">
              R${' '}
              {totalAmount
                .toFixed(2)
                .toString()
                .replace('.', ',')}
            </TextThin>
          </TotalConsumeKW>

          <Details>
            <View>
              <TextBold textAlign='center' color="#FFF"> Consumo total </TextBold>
              <TextLight textAlign='center' color="#fff" fontSize="h4">
                {totalKw.toFixed(2)} KW
            </TextLight>
            </View>

            <View>
              <TextBold textAlign='center' color="#FFF"> Maior consumo </TextBold>
              <TextLight textAlign='center' color="#fff" fontSize="h4">
                {roomHigherConsumption}
              </TextLight>
            </View>

            <View>
              <TextBold textAlign='center' color="#FFF"> Bandeira </TextBold>
              <TextLight textAlign='center' color="#fff" fontSize="h4">
                {props.house.flag}
              </TextLight>
            </View>
          </Details>
        </Header>

        <Rooms>
          <SwipeListView
            data={props.house.rooms}
            showsVerticalScrollIndicator={false}
            keyExtractor={room => room.id}
            rightOpenValue={-100}
            disableRightSwipe={true}
            extraData={updateList}
            renderHiddenItem={({ item }) => (
              <HiddenCard
                refreshList={reRender}
                room={item}
              />
            )}
            renderItem={({ item }) => (
              <CardRoom toggleRoomCard={toggleRoomCard} room={item} />
            )}
          />
        </Rooms>



        <ActionButton
          size={55}
          onPress={() => toggleNewRoomBtn()}
          buttonColor={Colors.primary}
        />
      </Container>
    );
  }

  const renderNoRooms = () => (
    <ContainerNoRooms >
      <MaterialCommunityIcons name="candle" size={100} color="#707070" />
      <TextBold color="#707070" fontSize='h4'> Nenhum cômodo cadastrado</TextBold>
      <TextLight color="#707070" textAlign='center' fontSize='h5'>  Vivamus interdum purus non neque commodo fringilla.   </TextLight>
      <ActionButton
        size={55}
        onPress={() => toggleNewRoomBtn()}
        buttonColor={Colors.primary}
      />
    </ContainerNoRooms>
  )


  return (
    props.house.rooms.length > 0 ? renderHasRooms() : renderNoRooms()
  );
};

const mapStateToProps = state => ({
  house: state.houseReducer,
});

export default connect(mapStateToProps, null)(Home);