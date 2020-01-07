import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../styles/colors';

import Welcome from '../pages/Starter/Welcome/index'

export default StarterStack = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      // title: 'Novo equipamento',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        shadowColor: 'transparent',
        elevation: 0,
      },
    },
  },
});

// , { headerMode: 'none' }
