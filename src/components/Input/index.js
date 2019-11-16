import React from 'react';
import {TextInput} from 'react-native';

import styles from './styles';
import Colors from '../../styles/colors';

const Input = props => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={Colors.lightGray}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
