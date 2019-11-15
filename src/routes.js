import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/Home/index';

const mainStack = createStackNavigator({
  Home,
});

export default createAppContainer(mainStack);
