import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../styles/colors';

import Welcome from '../pages/Starter/Welcome/index'
import SetDefaultKwValue from '../pages/Starter/SetDefaultKwValue/index';
import SetDefaultKwValueTarifaBranca from '../pages/Starter/SetDefaultKwValueTarifaBranca';
import SetRooms from '../pages/Starter/SetRooms/index';
import NewRoom from '../pages/Main/Room/NewRoom/index';
import SelectState from "../pages/Starter/SelectState/index"
import SelectTarifa from "../pages/Starter/SelectTarifa/index";
import Final from '../pages/Starter/Final/index'

export default StarterStack = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null
    },
  },

  SelectState: {
    screen: SelectState,
    navigationOptions: {
      headerTintColor: '#9999',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        shadowColor: 'transparent',
        elevation: 0,
      },
    },
  },

  SelectTarifa: {
    screen: SelectTarifa,
    navigationOptions: {
      headerTintColor: '#9999',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        shadowColor: 'transparent',
        elevation: 0,
      },
    },
  },

  SetDefaultKwValue: {
    screen: SetDefaultKwValue,
    navigationOptions: {
      headerTintColor: '#9999',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        shadowColor: 'transparent',
        elevation: 0,
      },
    },
  },

  SetDefaultKwValueTarifaBranca: {
    screen: SetDefaultKwValueTarifaBranca,
    navigationOptions: {
      headerTintColor: '#9999',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        shadowColor: 'transparent',
        elevation: 0,
      },
    },
  },


  SetRooms: {
    screen: SetRooms,
    navigationOptions: {
      headerTintColor: '#9999',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        shadowColor: 'transparent',
        elevation: 0,
      },
    },
  },

  StarterNewRoom: {
    screen: NewRoom,
    navigationOptions: {
      title: 'Novo cômodo',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: Colors.primary,
      },
    },
  },



  Final: {
    screen: Final,
    navigationOptions: {
      headerTintColor: '#9999',
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
