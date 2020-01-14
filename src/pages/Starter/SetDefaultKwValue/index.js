import React, { Component } from 'react';

import Input from '../../../components/Input/index';
import { connect } from 'react-redux'
import { TouchableOpacity } from "react-native";

// styles
import { Container, NextPageButton, ContinueConfigArea, Content, InputArea } from './styles';
import { TextLight, Text } from '../../../styles/fonts';

class SetDefaultKwValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultKwValue: '1'
    }
    this.toggleNext = this.toggleNext.bind(this);
  }

  toggleNext() {
    if (this.state.defaultKwValue.match(/^(\d+\.?\d{0,9}|\.\d{1,9})$/)) {
      this.props.setValueKw(parseFloat(this.state.defaultKwValue));
      this.props.navigation.navigate('SetRooms');
    } else {
      this.setState({ defaultKwValue: '' })
      alert('esta errado')
    }
  }

  componentDidMount() {
    let s = this.state;
    s.defaultKwValue = this.props.valueKW;
    this.setState(s);
  }

  render() {
    return (
      <Container>
        <Content>
          <TextLight textAlign='center' fontSize='h4'> Primeiramente vamos definir o valor faturado do KWh  </TextLight>
          <TextLight> valorKw: {this.props.valueKW} </TextLight>
          <InputArea>
            <Input
              value={this.state.defaultKwValue}
              keyboardType={'numeric'}
              maxLength={10}
              onChangeText={defaultKwValue => this.setState({ defaultKwValue })}
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
  dealership: state.houseReducer,
  valueKW: state.houseReducer.dealership.valorTarifaConvencional,
});

const mapDispatchToProps = dispatch => {
  return {
    setValueKw: (valueKW) => dispatch({ type: 'SET_VALUE_KW', payload: { valueKW } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SetDefaultKwValue);

