import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/Home/index';
import NewRoom from './pages/NewRoom/index';

const mainStack = createStackNavigator({
  Home,
  NewRoom,
});

export default createAppContainer(mainStack);
