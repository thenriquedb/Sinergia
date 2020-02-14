import React, { useState, useEffect } from 'react';

import { TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux'

import Input from "../../../components/Input";
import WhereToFindKwValues from "../../../components/WhereToFindKwValues";

import RestoreButton from "./RestoreButton";

import { Container, InputArea, Footer, SaveBtn, Content } from './styles';
import { TextLight } from '../../../styles/fonts';
import Colors from "../../../styles/colors";

import validateDecimalValues from "../../../util/validateDecimalValues";
import reCalcularValores from "../../../util/reCalcularValores";

function SelectDefaultValues(props) {
  const { dealership, dealershipBackup, rooms, navigation } = props;

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

  function updateValues() {
    props.setValueKw(validateDecimalValues(valorTarifaConvencional));
    props.setValueKwTarifaBranca(valorPonta, valorIntermediaria, valorForaPonta);

    const dealershipEdit = dealership;
    dealershipEdit.valorTarifaConvencional = valorTarifaConvencional;
    dealershipEdit.valorPonta = valorPonta;
    dealershipEdit.valorIntermediaria = valorIntermediaria;
    dealershipEdit.valorForaPonta = valorForaPonta;

    const roomsEdit = reCalcularValores(rooms, dealershipEdit);
    props.setRooms(roomsEdit);
  }

  function toglleSaveButton() {
    if (valorTarifaConvencional && valorIntermediaria && valorPonta && valorForaPonta) {
      Alert.alert(
        'Confirmar',
        'Deseja atualizar os valores faturados do KWh?',
        [
          { text: 'Cancelar' },
          {
            text: 'Confirmar', onPress: () => {
              updateValues()
              navigation.goBack();
              Alert.alert(
                'Atualizado com sucesso!',
                'Os valores faturados do KWh foram atualizados com sucesso!',
                [
                  { text: 'OK' },
                ],
                { cancelable: true },
              );
            }
          },
        ],
        { cancelable: true },
      );

    } else {
      Alert.alert(
        'Campo vazio',
        'Todos os campos devem estar preenchidos.',
        [
          { text: 'OK' },
        ],
        { cancelable: true },
      );
    }
  }

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
      <Content>
        {renderInputs()}
        <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
          <TextLight color={'#707070'} fontSize={'h6'} textAlign="center">  Onde encontrar? </TextLight>
        </TouchableOpacity>
      </Content>

      <Footer>
        <SaveBtn
          onPress={() => toglleSaveButton()}
          style={{ backgroundColor: !valorForaPonta || !valorIntermediaria || !valorPonta || !valorTarifaConvencional ? Colors.darkGray1 : Colors.primary }}
        >
          <TextLight
            color={false ? '#000' : '#fff'}
            fontSize={'h5'}>
            Salvar
              </TextLight>
        </SaveBtn>
      </Footer>

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
  rooms: state.houseReducer.rooms,
});


const mapDispatchToProps = dispatch => {
  return {
    setValueKw: (valorTarifaConvencional) => dispatch({ type: 'SET_VALUE_KW', payload: { valorTarifaConvencional } }),
    setRooms: (rooms) => dispatch({ type: 'SET_ROOMS', payload: { rooms } }),
    setValueKwTarifaBranca: (valorPonta, valorIntermediaria, valorForaPonta) =>
      dispatch({ type: 'SET_VALUE_KW_TARIFA_BRANCA', payload: { valorPonta, valorIntermediaria, valorForaPonta } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectDefaultValues);
