import React from 'react';
import {TextInput} from 'react-native';

import styles from './styles';
import Colors from '../../styles/colors';

const Input = props => {
  return (
    <TextInput
      value={props.value}
      onChangeText={props.onChangeText}
      maxLength={props.maxLength ? props.maxLength : 18}
      keyboardType={props.keyboardType ? props.keyboardType : 'text'}
      style={styles.input}
      placeholderTextColor={Colors.lightGray}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
