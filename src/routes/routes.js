import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//rotas
import MainStack from './mainStack.routes';
import StarterStack from './starterStack.routes';
import Preload from '../pages/Preload';

const Routes = createSwitchNavigator({
  Preload, // erro ta aqui 
  StarterStack,
  MainStack,
}, { headerMode: 'none' });

export default createAppContainer(Routes);
