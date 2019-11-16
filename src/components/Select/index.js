import React from 'react';
import styles from './style';

import {Text, Picker} from 'react-native';

const Select = () => {
  const x = '';
  return (
    <Picker
      style={{width: 100}}
      selectedValue={x}
      style={{height: 50, width: 100}}>
      <Picker.Item label="Sala" value="java" />
      <Picker.Item label="Cozinha" value="java" />
      <Picker.Item label="Banheiro" value="js" />
      <Picker.Item label="Quarto" value="js" />
    </Picker>
  );
};

export default Select;
