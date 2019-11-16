import React from 'react';
import {Button} from 'react-native';
import {connect} from 'react-redux';
import {addRoom} from '../../store/actions/house';

// Componentes
import Select from '../../components/Select/index';
import Input from '../../components/Input/index';

import {Container} from './styles';
import {Text} from '../../styles/fonts';

const NewRoom = props => {
  return (
    <Container>
      <Input placeholder={'Nome'} />
      <Select />
      <Button
        onPress={() => props.addNewRoom('Novo comodo')}
        title="Adcionar novo comodo"
      />
    </Container>
  );
};

NewRoom.navigationOptions = () => {
  return {
    title: 'Novo cômodo',
  };
};

const mapStateToProps = state => {
  return {rooms: state.houseReducer.rooms};
};

const mapDispatchToProps = dispatch => {
  return {
    addNewRoom: name => dispatch({type: 'ADD_ROOM', payload: {name}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRoom);
