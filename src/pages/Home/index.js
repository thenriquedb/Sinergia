import React from 'react';
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

const Home = (props, {navigation}) => {
  return (
    <Container>
      <Header />
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
        onPress={() => navigation.navigate('NewRoom')}
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
