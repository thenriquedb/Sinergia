import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../styles/colors';

// screens
import Home from '../pages/Main/Home';
import Room from '../pages/Main/Room';
import NewRoom from '../pages/Main/NewRoom';
import NewEquipment from '../pages/Main/NewEquipment';
import Equipment from '../pages/Main/Equipment';

// Settings
import Settings from '../pages/Settings/General';
import About from '../pages/Settings/About';
import Help from '../pages/Settings/Help';
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

  NewEquipment: {
    screen: NewEquipment,
    navigationOptions: {
      title: 'Novo equipamento',
    },
  },

  Equipment: {
    screen: Equipment,
    navigationOptions: {
      headerShown: false
    }
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

  SettingsHelp: {
    screen: Help,
    navigationOptions: {
      title: 'Ajuda',
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

