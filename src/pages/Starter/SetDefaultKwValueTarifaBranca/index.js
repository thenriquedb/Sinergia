import React, { Component } from 'react';

import Input from '../../../components/Input/index';
import { connect } from 'react-redux'
import { TouchableOpacity } from "react-native";

// styles
import { Container, NextPageButton, ContinueConfigArea, Content, InputArea } from './styles';
import { TextLight, Text } from '../../../styles/fonts';
import Colors from '../../../styles/colors';

class SetDefaultKwValueTarifaBranca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foraDePontaValue: '1',
      intermediarioAPontaValue: '2',
      pontaValue: '3',
    }
    this.toggleNext = this.toggleNext.bind(this);
  }

  toggleNext() {
    this.props.navigation.navigate('SetRooms');

  }

  render() {
    return (
      <Container>
        <Content>
          <TextLight textAlign='center' fontSize='h4'> Valor faturado do KWh </TextLight>

          <InputArea>
            <Text style={{ marginTop: 20 }} fontSize='h5'> Fora de ponta  </Text>
            <Input
              value={this.state.foraDePontaValue}
              keyboardType={'numeric'}
              maxLength={10}
              borderColor={Colors.low}
              onChangeText={defaultKwValue => this.setState({ defaultKwValue })}
              placeholder="Fora de ponta"
            />

            <Text style={{ marginTop: 20 }} fontSize='h5'> Intermediário a ponta </Text>
            <Input
              value={this.state.intermediarioAPontaValue}
              keyboardType={'numeric'}
              maxLength={10}
              borderColor={Colors.medium}
              onChangeText={defaultKwValue => this.setState({ defaultKwValue })}
              placeholder="Intermediário a ponta "
            />

            <Text style={{ marginTop: 20 }} fontSize='h5'> Ponta </Text>
            <Input
              value={this.state.pontaValue}
              keyboardType={'numeric'}
              maxLength={10}
              borderColor={Colors.high}
              onChangeText={defaultKwValue => this.setState({ defaultKwValue })}
              placeholder="Ponta"
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
  valueKW: state.houseReducer.valueKW,
});

const mapDispatchToProps = dispatch => {
  return {
    setValueKw: (valueKW) => dispatch({ type: 'SET_VALUE_KW', payload: { valueKW } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SetDefaultKwValueTarifaBranca);

