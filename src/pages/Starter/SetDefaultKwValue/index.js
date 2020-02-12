import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Alert } from "react-native";
import Input from '../../../components/Input/index';
import { TouchableOpacity } from "react-native";

// styles
import { Container, NextPageButton, ContinueConfigArea, Content, InputArea } from './styles';
import { TextLight, Text } from '../../../styles/fonts';

import validateDecimalValues from "../../../util/validateDecimalValues";

class SetDefaultKwValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultKwValue: ''
    }
    this.toggleNext = this.toggleNext.bind(this);
  }

  toggleNext() {
    if (this.state.defaultKwValue.match(/^(\d+\.?\d{0,9}|\.\d{1,9})$/)) {
      this.props.setValueKw(this.state.defaultKwValue);
      this.props.navigation.navigate('SetRooms');
    } else {
      this.setState({ defaultKwValue: '' })
      Alert.alert(
        'Entrada incorreta',
        'Use apenas números e ponto.',
        [
          { text: 'OK' },
        ],
        { cancelable: true },
      );
    }
  }

  componentDidMount() {
    let s = this.state;
    s.defaultKwValue = this.props.valorTarifaConvencional;
    this.setState(s);
  }

  render() {
    return (
      <Container>
        <Content>
          <TextLight textAlign='center' fontSize='h4'> Primeiramente vamos definir o valor faturado do KWh  </TextLight>
          <InputArea>
            <Input
              value={this.state.defaultKwValue}
              keyboardType={'numeric'}
              maxLength={10}
              onChangeText={defaultKwValue => this.setState({ defaultKwValue: validateDecimalValues(defaultKwValue) })}
              placeholder="Valor KWh"
            />
            <TouchableOpacity onPress={() => alert('')}>
              <TextLight color={'#707070'} fontSize={'h6'} textAlign="center">  Onde encontrar? </TextLight>
            </TouchableOpacity>
          </InputArea>
        </Content>

        <ContinueConfigArea>
          <NextPageButton onPress={() => this.toggleNext()}>
            <Text fontSize='h6' color='#fff'> Continuar </Text>
          </NextPageButton>
        </ContinueConfigArea>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  valorTarifaConvencional: state.houseReducer.dealership.valorTarifaConvencional,
});

const mapDispatchToProps = dispatch => {
  return {
    setValueKw: (valorTarifaConvencional) => dispatch({ type: 'SET_VALUE_KW', payload: { valorTarifaConvencional } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SetDefaultKwValue);

