import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../styles/colors';

// screens
import Home from '../pages/Main/Home';
import Room from '../pages/Main/Room';
import NewRoom from '../pages/Main/NewRoom';
import NewEquipment1 from '../pages/Main/NewEquipment/Screen1';
import NewEquipment2 from '../pages/Main/NewEquipment/Screen2';

// Settings
import Settings from '../pages/Settings/General/index';
import About from '../pages/Settings/About/index';
import SettingsSetTarifa from '../pages/Settings/SetTarifa';
import SettingsSelectState from '../pages/Settings/SelectState';
import SettingsSelectDefaultValues from '../pages/Settings/SelectDefaultValues';

export default MainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false
    }
  },

  Room: {
    screen: Room,
    navigationOptions: {
      headerShown: false
    }
  },

  NewRoom: {
    screen: NewRoom,
    navigationOptions: {
      title: 'Novo cômodo',
    },
  },

  NewEquipment1: {
    screen: NewEquipment1,
    navigationOptions: {
      title: 'Novo equipamento',

    },
  },

  NewEquipment2: {
    screen: NewEquipment2,
    navigationOptions: {
      // title: 'Novo equipamento',
    },
  },

  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Configurações',
    }
  },

  SettingsSetTarifa: {
    screen: SettingsSetTarifa,
    navigationOptions: {
      title: 'Tarifa padrão',
    }
  },

  SettingsSelectState: {
    screen: SettingsSelectState,
    navigationOptions: {
      title: 'Estado e concessionária',
    }
  },

  SettingsAbout: {
    screen: About,
    navigationOptions: {
      title: 'Sobre',
    }
  },

  SettingsSelectDefaultValues: {
    screen: SettingsSelectDefaultValues,
    navigationOptions: {
      title: 'Valor padrão do KWh',
    }
  }
}, {
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerStyle: {
      elevation: 0,
      backgroundColor: Colors.primary,
    },
  },
});

