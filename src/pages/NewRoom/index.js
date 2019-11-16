import React from 'react';

// Componentes
import Select from '../../components/Select/index';
import Input from '../../components/Input/index';
import {Container} from './styles';
import {Text} from '../../styles/fonts';

const NewRoom = ({navigation}) => {
  return (
    <Container>
      <Input placeholder={'Nome'} />
      <Select />
    </Container>
  );
};

NewRoom.navigationOptions = () => {
  return {
    title: 'Novo cômodo',
  };
};

export default NewRoom;
