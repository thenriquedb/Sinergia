import React, { Component } from 'react';

import Input from '../../../components/Input/index';
import { connect } from 'react-redux'

// styles
import { Container, NextPageButton, ContinueConfigArea, Content, InputArea } from './styles';
import { TextLight, Text } from '../../../styles/fonts';

class SetDefaultKwValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultKwValue: '0'
    }
    this.toggleNext = this.toggleNext.bind(this);
  }

  toggleNext() {
    this.props.setValueKw(parseFloat(this.state.defaultKwValue));
    this.props.navigation.navigate('SetRooms');
  }

  render() {
    return (
      <Container>
        <Content>
          <TextLight textAlign='center' fontSize='h4'> Primeiramente vamos definir o valor padrão do KWh  </TextLight>
          <InputArea>
            <Input
              value={this.state.defaultKwValue}
              keyboardType={'numeric'}
              maxLength={10}
              onChangeText={defaultKwValue => this.setState({ defaultKwValue })}
              placeholder="Valor KW/h"
            />
          </InputArea>
        </Content>

        <ContinueConfigArea>
          <NextPageButton onPress={() => this.toggleNext()}>
            <Text fontSize='h6' color='#fff'> Próximo </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SetDefaultKwValue);

