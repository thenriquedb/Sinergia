import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

const Preload = ({ navigation, firstUse }) => {
  if (firstUse) {
    navigation.navigate("StarterStack")
  } else {
    navigation.navigate("MainStack")
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    firstUse: state.houseReducer.firstUse
  };
};

export default connect(mapStateToProps)(Preload);