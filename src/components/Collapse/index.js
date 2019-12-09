import React, {useState} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {is} from '@babel/types';

// import { Container } from './styles';

const Collapse = () => {
  const [isVisible, setIsVisible] = useState(false);

  function render(params) {
    if (isVisible) {
      return (
        <View>
          <Text> view ok</Text>
        </View>
      );
    } else {
      return null;
    }
  }

  return (
    <View>
      <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
        <Text>Clique aqui</Text>
      </TouchableOpacity>

      {render()}
    </View>
  );
};

export default Collapse;
