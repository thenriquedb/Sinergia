import React, { useState } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Collapse = props => {
  const [isVisible, setIsVisible] = useState(true);

  function render(params) {
    return isVisible ? props.visible : props.hidden;
  }

  return (
    <View>
      {render()}
      <TouchableOpacity
        style={{ alignItems: 'center' }}
        onPress={() => setIsVisible(!isVisible)}>
        {isVisible ? (
          <MaterialCommunityIcons name="chevron-up" size={45} color="#fff" />
        ) : (
            <MaterialCommunityIcons name="chevron-down" size={45} color="#fff" />
          )}
      </TouchableOpacity>
    </View>
  );
};

export default Collapse;
