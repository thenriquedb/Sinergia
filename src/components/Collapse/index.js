import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Animated, TouchableOpacity } from 'react-native';

function Collapse(props) {
  const [isVisible, setIsVisible] = useState(true);
  const { offset } = props;

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
      {isVisible ? props.visible : props.hidden}

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
