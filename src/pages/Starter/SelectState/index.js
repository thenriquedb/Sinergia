import React, { useState } from 'react';

import { Picker, View } from 'react-native';

// styles
import { Container, ContinueConfigArea, Content, NextPageButton } from './styles';
import { Text, TextLight } from "../../../styles/fonts";
import Colors from "../../../styles/colors";

//util
import states from "../../../utilities/estados"

const SelectState = (props) => {
  const [state, setState] = useState('')
  const [dealership, setDealership] = useState('')

  const toggleNext = () => {
    props.navigation.navigate('SelectTarifa');
  }




  return (
    <Container>
      <TextLight textAlign='center' fontSize='h4'> Primeiramente vamos selecionar o seu estado e sua concessionária.  </TextLight>
      <Content>
        <Text fontSize='h5'> Estado  </Text>
        <Picker
          selectedValue={state}
          onValueChange={(itemValue, itemIndex) => {
            setState(itemValue);
          }}>
          {states.map((value, key) => {
            return <Picker.Item value={value.sigla} label={value.name} />;
          })}
        </Picker>


        {state !== 'NONE' ? <View>
          <Text style={{ marginTop: 20 }} fontSize='h5'> Concessionária  </Text>
          <Picker
            selectedValue={state}
            onValueChange={(itemValue, itemIndex) => {
              setState(itemValue);
            }}>
            {states.map((value, key) => {
              return <Picker.Item value={value.sigla} label={value.name} />;
            })}
          </Picker>
        </View> : null}

      </Content>

      <ContinueConfigArea>
        <NextPageButton
          style={{
            backgroundColor: state === 'NONE' ? Colors.lightGray1 : Colors.primary,
          }}
          disabled={state === 'NONE' ? true : false}
          onPress={() => toggleNext()}>
          <Text
            fontSize='h6' color={'#fff'}> Continuar </Text>
        </NextPageButton>
      </ContinueConfigArea>
    </Container>
  )
};

export default SelectState;
