import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//rotas
import MainStack from './mainStack';
import StarterStack from './starterStack';
import Preload from '../pages/Preload';

const Routes = createSwitchNavigator({
  Preload, // erro ta aqui 
  StarterStack,
  MainStack,
}, { headerMode: 'none' });

export default createAppContainer(Routes);
