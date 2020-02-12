import React, { useState, useEffect } from 'react';

import { TouchableOpacity, ToastAndroid } from 'react-native';
import { connect } from 'react-redux'

import Input from "../../../components/Input";
import WhereToFindKwValues from "../../../components/WhereToFindKwValues";

import RestoreButton from "./RestoreButton";

import { Container, InputArea } from './styles';
import { TextLight } from '../../../styles/fonts';
import Colors from "../../../styles/colors";

import validateDecimalValues from "../../../util/validateDecimalValues";

function SelectDefaultValues(props) {
  const { dealership, dealershipBackup } = props;
  const { navigation } = props;

  const [valorTarifaConvencional, setValorTarifaConvencional] = useState(dealership.valorTarifaConvencional);
  const [valorIntermediaria, setValorIntermediaria] = useState(dealership.valorIntermediaria);
  const [valorPonta, setValorPonta] = useState(dealership.valorPonta);
  const [valorForaPonta, setValorForaPonta] = useState(dealership.valorForaPonta);

  const [isVisible, setIsVisible] = useState(false);

  function restoreDefaultValues() {
    setValorTarifaConvencional(dealershipBackup.valorTarifaConvencional);
    setValorIntermediaria(dealershipBackup.valorIntermediaria);
    setValorPonta(dealershipBackup.valorPonta);
    setValorForaPonta(dealershipBackup.valorForaPonta);
  }

  useEffect(() => {
    navigation.setParams({ restoreDefaultValues });
  }, []);


  // Alterar valores tarifa convencional no store
  useEffect(() => {
    props.setValueKw(validateDecimalValues(valorTarifaConvencional));
  }, [valorTarifaConvencional]);


  // Alterar valores tarifa branca no store
  useEffect(() => {
    props.setValueKwTarifaBranca(valorPonta, valorIntermediaria, valorForaPonta);
  }, [valorPonta, valorIntermediaria, valorForaPonta]);

  function renderInputs() {
    if (props.tarifaUsed === 'convencional') {
      return (
        <>
          <Input
            label="Valor faturado do KWh"
            value={valorTarifaConvencional}
            keyboardType={'decimal-pad'}
            maxLength={10}
            onChangeText={valorTarifaConvencional => setValorTarifaConvencional(validateDecimalValues(valorTarifaConvencional))}
            placeholder="Valor faturado do KWh"
          />

        </>
      );
    } else {
      return (
        <>
          <InputArea>
            <Input
              label="Fora de ponta"
              value={valorForaPonta}
              keyboardType={'numeric'}
              maxLength={10}
              borderColor={Colors.low}
              onChangeText={valorForaPonta => setValorForaPonta(validateDecimalValues(valorForaPonta))}
              placeholder="Fora de ponta"
            />
          </InputArea>

          <InputArea>
            <Input
              label="Intermediário a ponta"
              value={valorIntermediaria}
              keyboardType={'numeric'}
              maxLength={10}
              borderColor={Colors.medium}
              onChangeText={valorIntermediaria => setValorIntermediaria(validateDecimalValues(valorIntermediaria))}
              placeholder="Intermediário a ponta"
            />
          </InputArea>

          <InputArea>
            <Input
              label="Ponta"
              value={valorPonta}
              keyboardType={'numeric'}
              borderColor={Colors.high}
              maxLength={10}
              onChangeText={valorPonta => setValorPonta(validateDecimalValues(valorPonta))}
              placeholder="Ponta"
            />
          </InputArea>

        </>
      );
    }
  }

  return (
    <Container>
      {renderInputs()}
      <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
        <TextLight color={'#707070'} fontSize={'h6'} textAlign="center">  Onde encontrar? </TextLight>
      </TouchableOpacity>
      <WhereToFindKwValues
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </Container>
  );
};


SelectDefaultValues.navigationOptions = ({ navigation }) => {
  const restoreDefaultValues = navigation.getParam('restoreDefaultValues');

  return {
    headerRight: <RestoreButton restoreDefaultValues={restoreDefaultValues} />
  }
}


const mapStateToProps = state => ({
  dealership: state.houseReducer.dealership,
  dealershipBackup: state.houseReducer.dealershipBackup,
  tarifaUsed: state.houseReducer.tarifa,
});


const mapDispatchToProps = dispatch => {
  return {
    setValueKw: (valorTarifaConvencional) => dispatch({ type: 'SET_VALUE_KW', payload: { valorTarifaConvencional } }),
    setValueKwTarifaBranca: (valorPonta, valorIntermediaria, valorForaPonta) =>
      dispatch({ type: 'SET_VALUE_KW_TARIFA_BRANCA', payload: { valorPonta, valorIntermediaria, valorForaPonta } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectDefaultValues);
