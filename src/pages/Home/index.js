import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';

//Redux
import {connect} from 'react-redux';

// Style
import Colors from '../../styles/colors';

// Components
import ActionButton from 'react-native-action-button';
import {Container, Tasks} from './style';
import Header from './Header/index';
import CardRoom from '../../components/CardRoom/index';

const Home = props => {
  const [totalKw, setTotalKw] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalKw(
      props.rooms.reduce((prevVal, elem) => prevVal + elem.totalKw, 0),
    );

    setTotalAmount(
      props.rooms.reduce((prevVal, elem) => prevVal + elem.totalAmount, 0),
    );
  });

  return (
    <Container>
      <Header totalKw={totalKw} totalAmount={totalAmount} />
      <Tasks>
        <FlatList
          data={props.rooms}
          showsVerticalScrollIndicator={false}
          keyExtractor={room => room.id}
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
        onPress={() => props.navigation.navigate('NewRoom')}
        buttonColor={Colors.primary}
      />
    </Container>
  );
};

Home.navigationOptions = () => {
  return {header: null};
};

const mapStateToProps = state => {
  return {rooms: state.houseReducer.rooms};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
