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
              placeholder="Valor KWh"
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(SetDefaultKwValue);

