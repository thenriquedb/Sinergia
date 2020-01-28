import React, { useState, useEffect } from 'react';

import { Picker, View } from 'react-native';

//redux
import { connect } from 'react-redux'

// styles
import { Container, Label } from './styles';
import { Text, TextLight } from "../../../styles/fonts";

//util
import states from "../../../utilities/estados"
import tarifaBranca from "../../../utilities/tarifaBranca.json"

const SelectState = (props) => {
  const [uf, setUF] = useState(props.usedUF);
  const [dealerships, setDealerships] = useState(tarifaBranca.filter(item => item.UF === props.usedUF));
  const [selectedDealership, setSelectedDealership] = useState(props.usedDealership);


  useEffect(() => {
    props.setDealership(selectedDealership);
  }, [selectedDealership]);

  useEffect(() => {
    setDealerships(tarifaBranca.filter(item => item.UF === uf));
    setSelectedDealership(tarifaBranca.find(item => item.UF === uf));
    props.setUf(uf);
  }, [uf]);

  return (
    <Container>
      <Label fontSize='h5'> Estado  </Label>
      <Picker
        selectedValue={uf}
        onValueChange={itemValue => setUF(itemValue)}>
        {states.map((value, key) => {
          return <Picker.Item key={key} value={value.sigla} label={value.name} />;
        })}
      </Picker>


      {uf !== 'NONE' &&
        <View>
          <Label style={{ marginTop: 20 }} fontSize='h5'> Concessionária  </Label>
          <Picker
            selectedValue={selectedDealership}
            onValueChange={itemValue => setSelectedDealership(itemValue)}>
            {dealerships.map((value, key) => {
              return <Picker.Item key={value.Distribuidora} value={value} label={value.Distribuidora} />;
            })}
          </Picker>
        </View>}
    </Container>
  )
};

const mapStateToProps = state => ({
  usedUF: state.houseReducer.uf,
  usedDealership: state.houseReducer.dealership
});

const mapDispatchToProps = dispatch => {
  return {
    setUf: (uf) => dispatch({ type: 'SET_UF', payload: { uf } }),
    setDealership: (dealership) => dispatch({ type: 'SET_DEALERSHIP', payload: { dealership } })
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SelectState);
