import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

const Preload = (props) => {
  if (props.firstUse) {
    props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'StarterStack' })]
    }));
  } else {
    props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'MainStack' })]
    }));
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    firstUse: state.houseReducer.firstUse
  };
};

export default connect(mapStateToProps)(Preload);