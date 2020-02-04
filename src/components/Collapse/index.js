import React, { useState } from 'react';

import { View, Animated, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Collapse = props => {
  const [isVisible, setIsVisible] = useState(true);
  const { offset } = props;

  function render(params) {
    return isVisible ? props.visible : props.hidden;
  }

  const arrowAnimationConfigs = [
    {
      transform: [{
        scale: offset.interpolate({
          inputRange: [0, 400],
          outputRange: [1, 0.7],
          extrapolate: "clamp"
        })
      }]
    }
  ]

  return (
    <View>
      {render()}
      <TouchableOpacity
        style={{ alignItems: 'center' }}
        onPress={() => setIsVisible(!isVisible)}>
        {!isVisible ?
          (
            <Animated.View style={[...arrowAnimationConfigs]}>
              <MaterialCommunityIcons name="chevron-up" size={45} color="#fff" />
            </Animated.View>
          ) :
          (
            <Animated.View style={[...arrowAnimationConfigs]}>
              <MaterialCommunityIcons name="chevron-down" size={45} color="#fff" />
            </Animated.View>
          )}
      </TouchableOpacity>
    </View>
  );
};

export default Collapse;
