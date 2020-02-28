import React, { useState } from 'react';
import { Picker, ToastAndroid } from 'react-native';
import { connect } from 'react-redux'

// styles
import { Container, ContinueConfigArea, Content, NextPageButton } from './styles';
import { Text, TextLight } from "../../../styles/fonts";
import Colors from "../../../styles/colors";

//util
import states from "../../../utilities/estados"
import tarifaBranca from "../../../utilities/tarifaBranca.json"

function SelectState(props) {
  const [state, setState] = useState('NONE')
  const [dealerships, setDealerships] = useState(tarifaBranca);
  const [selectedDealership, setSelectedDealership] = useState('');


  function toggleNext() {
    if (state != 'NONE') {

      setSelectedDealership(selectedDealership ? selectedDealership : dealerships[0]);
      props.setUf(state);
      props.setDealership(selectedDealership ? selectedDealership : dealerships[0]);
      props.navigation.navigate('SelectTarifa');
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'É necessário selecionar um estado para continuar',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
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
            setDealerships(tarifaBranca.filter(item => item.UF === itemValue));
            setSelectedDealership('');
          }}>
          {states.map((value, key) => {
            return <Picker.Item value={value.sigla} label={value.name} />;
          })}
        </Picker>

        {state !== 'NONE' &&
          <>
            <Text style={{ marginTop: 20 }} fontSize='h5'>Concessionária  </Text>
            <Picker
              selectedValue={selectedDealership}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedDealership(itemValue);
              }}>
              {dealerships.map((value, key) => {
                return <Picker.Item value={value} label={value.Distribuidora} />;
              })}
            </Picker>
          </>
        }
      </Content>

      <ContinueConfigArea>
        <NextPageButton
          style={{
            backgroundColor: state === 'NONE' ?
              Colors.lightGray1 : Colors.primary,
          }}
          onPress={() => toggleNext()}>

          <Text fontSize='h6' color={'#fff'}>
            Continuar
          </Text>
        </NextPageButton>
      </ContinueConfigArea>
    </Container>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    setUf: (uf) => dispatch({ type: 'SET_UF', payload: { uf } }),
    setDealership: (dealership) => dispatch({
      type: 'SET_DEALERSHIP',
      payload: { dealership }
    })
  };
};


export default connect(null, mapDispatchToProps)(SelectState);
