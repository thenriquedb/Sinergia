import React, { Component } from 'react';

import { View, FlatList } from 'react-native';

import { connect } from 'react-redux'

// styles
import { Container, NextPageButton, ContinueConfigArea, Content, InputArea } from './styles';
import { TextLight, Text } from '../../../styles/fonts';

class SetRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: '0'
    }
    this.toggleNext = this.toggleNext.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  componentWillMount() {
    this.setState({ rooms: this.props.rooms })
  }

  toggleNext() {
    this.props.setValueKw(parseFloat(this.state.defaultKwValue));
    this.props.navigation.navigate('SetRooms');
  }

  renderButton() {
    console.log('this.props.rooms: ', this.props.rooms);
    if (this.state.rooms.length > 0) {
      return (
        <NextPageButton onPress={() => this.props.navigation.navigate('Final')}>
          <Text fontSize='h6' color='#fff'> Próximo </Text>
        </NextPageButton>
      );
    } else {
      return (
        <NextPageButton onPress={() => this.props.navigation.navigate('StarterNewRoom')}>
          <Text fontSize='h6' color='#fff'> Adcionar um novo comôdo </Text>
        </NextPageButton>
      );
    }
  }

  render() {
    return (
      <Container>
        <TextLight textAlign='center' fontSize='h4'> Esta quase pronto! Agora é só cadastrar os cômodos  </TextLight>

        <Content>
        </Content>

        <ContinueConfigArea>
          {this.renderButton()}
        </ContinueConfigArea>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  rooms: state.houseReducer.rooms,
});


// export default connect(mapStateToProps, mapDispatchToProps)(SetRooms);
export default connect(mapStateToProps, null)(SetRooms);


