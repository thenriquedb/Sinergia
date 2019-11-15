import React from 'react';
import {View, Text, FlatList} from 'react-native';

import styles from './style';

// Components
import Header from './Header/index';
import CardRoom from '../../components/CardRoom/index';

const DATA = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}];

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={() => <CardRoom />}
        />
      </View>
    </View>
  );
};

Home.navigationOptions = () => {
  return {header: null};
};

export default Home;
