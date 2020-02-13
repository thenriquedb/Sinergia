import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//rotas
import MainStack from './mainStack';
import StarterStack from './starterStack';
import Preload from '../pages/Preload';

const Routes = createStackNavigator({
  Preload,
  StarterStack,
  MainStack,
}, { headerMode: 'none' });

export default createAppContainer(Routes);
