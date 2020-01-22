import React from 'react';
import { TextInput } from 'react-native';

import { MyInput, Label } from './styles';
import Colors from '../../styles/colors';

const Input = props => {
  return (
    <>
      <Label> {props.label} </Label>
      <MyInput
        value={props.value}
        onChangeText={props.onChangeText}
        style={{ borderColor: props.borderColor ? props.borderColor : Colors.lightGray1 }}
        maxLength={props.maxLength ? props.maxLength : 18}
        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
        placeholderTextColor={Colors.lightGray}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Input;
