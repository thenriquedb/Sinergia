import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Colors from './styles/colors';

// screens
import Home from './pages/Home/index';

import Room from './pages/Room/index';
import NewRoom from './pages/Room/NewRoom/index';
import EditRoom from './pages/Room/EditRoom/index';

import NewEquipment1 from './pages/Equipment/NewEquipment/Screen1/index';
import NewEquipment2 from './pages/Equipment/NewEquipment/Screen2/index';

const mainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },

  Room: {
    screen: Room,
    navigationOptions: {
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: Colors.primary,
        shadowColor: 'transparent',
        elevation: 0,
      },
    },
  },

  NewRoom: {
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

  EditRoom: {
    screen: EditRoom,
    navigationOptions: {
      title: 'Editar cômodo',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: Colors.primary,
      },
    },
  },

  NewEquipment1: {
    screen: NewEquipment1,
    navigationOptions: {
      title: 'Novo equipamento',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: Colors.primary,
      },
    },
  },

  NewEquipment2: {
    screen: NewEquipment2,
    navigationOptions: {
      // title: 'Novo equipamento',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: Colors.primary,
        shadowColor: 'transparent',
        elevation: 0,
      },
    },
  },
});

export default createAppContainer(mainStack);
