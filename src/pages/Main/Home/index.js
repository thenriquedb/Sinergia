import React, { useEffect, useState } from 'react';
import { View, Animated } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Redux
import { connect } from 'react-redux';

// Style
import Colors from '../../../styles/colors';
import {
  Container,
  ContainerNoRooms,
  Rooms,
  RoomListContainer,
  Details,
  SettingsButton,
  TotalConsumeKW,
  Header,
  Scroll
} from './style';
import { TextLight, TextThin, TextBold } from '../../../styles/fonts';

// Components
import ActionButton from 'react-native-action-button';
import { SwipeListView } from 'react-native-swipe-list-view';
import CardRoom from '../../../components/Cards/CardRoom/index';
import HiddenCard from '../../../components/Cards/CardRoom/HiddenCardRoom';

import Lottie from "lottie-react-native";
import emptyAnimation from "../../../assets/empty.json";

//util
import capitalizeFirstLetter from "../../../util/capitalizeFirstLetter";
import { moneyMask, kwMask } from "../../../util/masks";

const Home = props => {
  const [totalKw, setTotalKw] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [updateList, setUpdateList] = useState(false);
  const [roomHigherConsumption, setRoomHigherConsumption] = useState(false);

  const offsetList = new Animated.Value(40);
  const scrollOffset = new Animated.Value(0);

  useEffect(() => {
    calcTotalKw();
    calcTotalAmount();

    Animated.spring(offsetList,
      {
        toValue: 0,
        velocity: 10,
        bounciness: 20,
        useNativeDriver: true
      }).start();

    props.house.rooms.length > 0 && getRoomHigherConsumption();
  });


  const scrollAnimatedEvent = () => {
    Animated.event([{
      nat
    }]);
  }

  const calcTotalKw = () => {
    const total = props.house.rooms.reduce((prevVal, elem) => prevVal + elem.totalKw, 0)
    setTotalKw(total);
  }

  const calcTotalAmount = () => {
    if (props.tarifaUsed === 'convencional') {
      setTotalAmount(
        props.house.rooms.reduce(
          (prevVal, elem) => prevVal + elem.tarifaConvencional.monthlyExpenses,
          0,
        ),
      );
    } else {
      setTotalAmount(
        props.house.rooms.reduce(
          (prevVal, elem) => prevVal + elem.tarifaBranca.monthlyExpenses,
          0,
        ),
      );
    }
  }

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
  const getRoomHigherConsumption = () => {
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
        <Scroll
          scrollEventThrottle={16}
          onScroll={Animated.event([{
            nativeEvent: {
              contentOffset: { y: scrollOffset }
            }
          }])}

        >
          <Header style={[
            {
              height: scrollOffset.interpolate({
                inputRange: [0, 150],
                outputRange: [150, 70],
                extrapolate: 'clamp'
              })
            }, {
              opacity: scrollOffset.interpolate({
                inputRange: [0, 150],
                outputRange: [1, 0],
              })
            }
          ]}>
            <TotalConsumeKW>
              <TextBold textAlign='center' color="#fff" fontSize="h4">
                Valor Total
              </TextBold>

              <TextThin textAlign='center' color="#fff" fontSize="h1"> {moneyMask(totalAmount)} </TextThin>
            </TotalConsumeKW>

            <Details>
              <View>
                <TextBold textAlign='center' color="#FFF"> Consumo total </TextBold>
                <TextLight textAlign='center' color="#fff" fontSize="h5"> {kwMask(totalKw)} </TextLight>
              </View>

              <View>
                <TextBold textAlign='center' color="#FFF"> Maior consumo </TextBold>
                <TextLight textAlign='center' color="#fff" fontSize="h5">
                  {roomHigherConsumption}
                </TextLight>
              </View>

              <View>
                <TextBold textAlign='center' color="#FFF"> Tarifa utilizada </TextBold>
                <TextLight textAlign='center' color="#fff" fontSize="h5">
                  {capitalizeFirstLetter(props.tarifaUsed)}
                </TextLight>
              </View>
            </Details>
          </Header>

          <Rooms>
            <RoomListContainer style={{
              transform: [{ translateY: offsetList }]
            }}>
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
            </RoomListContainer>
          </Rooms>
        </Scroll>

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
      <Lottie
        source={emptyAnimation}
        autoPlay
        loop
        speed={2}
        resizeMode={"cover"}
        autoSize
        style={{ height: 200, width: 200 }}
      />
      <TextBold textAlign="center" color="#999" fontSize='h4'> Ainda não foi cadastrado nenhum cômodo </TextBold>
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


Home.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <SettingsButton onPress={() => navigation.navigate('Settings')}>
          <MaterialCommunityIcons name="settings" size={25} color="#fff" />
        </SettingsButton>)
    }
  }
}

const mapStateToProps = state => ({
  house: state.houseReducer,
  tarifaUsed: state.houseReducer.tarifa
});

export default connect(mapStateToProps, null)(Home);