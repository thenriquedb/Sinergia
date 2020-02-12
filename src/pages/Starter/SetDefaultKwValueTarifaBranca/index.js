import React, { Component } from 'react';

import Input from '../../../components/Input/index';
import { connect } from 'react-redux'
import { TouchableOpacity } from "react-native";

// styles
import { Container, NextPageButton, ContinueConfigArea, Content, InputContainer } from './styles';
import { TextLight, Text } from '../../../styles/fonts';
import Colors from '../../../styles/colors';

import validateDecimalValues from "../../../util/validateDecimalValues";

class SetDefaultKwValueTarifaBranca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorForaPonta: '1',
      valorIntermediaria: '2',
      valorPonta: '3',
    }
    this.toggleNext = this.toggleNext.bind(this);
  }

  toggleNext() {
    this.props.setValueKwTarifaBranca(this.state.valorPonta, this.state.valorIntermediaria, this.state.valorForaPonta);
    this.props.navigation.navigate('SetRooms');
  }

  componentWillMount() {
    let s = this.state;
    s.valorPonta = this.props.valorForaPonta;
    s.valorIntermediaria = this.props.valorIntermediaria;
    s.valorForaPonta = this.props.valorForaPonta;
    this.setState(s);
  }

  render() {
    return (
      <Container>
        <Content>
          <TextLight style={{ marginBottom: 20 }} textAlign='center' fontSize='h4'> Valor faturado do KWh </TextLight>

          <InputContainer>
            <Input
              value={this.state.valorForaPonta}
              keyboardType={'numeric'}
              label="Fora de ponta"
              maxLength={10}
              borderColor={Colors.low}
              onChangeText={valorForaPonta => this.setState({ valorForaPonta: validateDecimalValues(valorForaPonta) })}
              placeholder="Fora de ponta"
            />
          </InputContainer>

          <InputContainer>
            <Input
              value={this.state.valorIntermediaria}
              keyboardType={'numeric'}
              label="Intermediário a ponta"
              maxLength={10}
              borderColor={Colors.medium}
              onChangeText={valorIntermediaria => this.setState({ valorIntermediaria: validateDecimalValues(valorIntermediaria) })}
              placeholder="Intermediário a ponta "
            />
          </InputContainer>

          <InputContainer>
            <Input
              value={this.state.valorPonta}
              keyboardType={'numeric'}
              label="Ponta"
              maxLength={10}
              borderColor={Colors.high}
              onChangeText={valorPonta => this.setState({ valorPonta: validateDecimalValues(valorPonta) })}
              placeholder="Ponta"
            />
          </InputContainer>
          <TouchableOpacity onPress={() => alert('')}>
            <TextLight color={'#707070'} fontSize={'h6'} textAlign="center">  Onde encontrar? </TextLight>
          </TouchableOpacity>
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
  valorPonta: state.houseReducer.dealership.valorPonta,
  valorIntermediaria: state.houseReducer.dealership.valorIntermediaria,
  valorForaPonta: state.houseReducer.dealership.valorForaPonta,
});

const mapDispatchToProps = dispatch => {
  return {
    setValueKw: (valueKW) => dispatch({ type: 'SET_VALUE_KW', payload: { valueKW } }),
    setValueKwTarifaBranca: (valorPonta, valorIntermediaria, valorForaPonta) =>
      dispatch({ type: 'SET_VALUE_KW_TARIFA_BRANCA', payload: { valorPonta, valorIntermediaria, valorForaPonta } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SetDefaultKwValueTarifaBranca);

