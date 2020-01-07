import React, { useState } from 'react';
import { Picker, Alert } from 'react-native';

// redux
import { connect } from 'react-redux';

// components
import Input from '../../../../components/Input/index';

// styles
import { Container, SaveBtn } from './styles';
import { Text } from '../../../../styles/fonts';

// utilities
import roomsList from '../../../../utilities/roomsList';

const NewRoom = props => {
  const [name, setName] = useState('');
  const [selectedRoom, setSelectedRoom] = useState(roomsList[0].value);

  const toggleSaveBtn = () => {
    console.log("tipo do comodo selecionado: ", selectedRoom)
    if (name.length >= 4) {
      const found = props.rooms.find(item => item.name === name);
      if (!found) {
        try {
          props.addNewRoom(name, selectedRoom);
          Alert.alert('O cômodo ' + name + ' foi cadastrado com sucesso!');
          setName('');
        } catch (error) {
          Alert.alert('Não foi possivel cadastrar o cômodo ' + name + '.');
        }
      } else {
        Alert.alert('O cômodo ' + name + 'já foi cadastrado.');
      }
    }


    else {
      Alert.alert('O nome precisa possuir no mínimo 4 caracteres');
    }
  };

  return (
    <Container>
      <Input
        value={name}
        onChangeText={name => setName(name)}
        placeholder="Nome"
      />
      <Picker
        selectedValue={selectedRoom}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedRoom(itemValue);
        }}>
        {roomsList.map((value, key) => {
          return <Picker.Item key={key} value={value.value} label={value.name} />;
        })}
      </Picker>
      <SaveBtn onPress={() => toggleSaveBtn()}>
        <Text fontSize="h5" color="#fff">
          Salvar
        </Text>
      </SaveBtn>
    </Container>
  );
};

const mapStateToProps = state => ({
  rooms: state.houseReducer.rooms,
});


const mapDispatchToProps = dispatch => {
  return {
    addNewRoom: (name, typeRoom) =>
      dispatch({ type: 'ADD_ROOM', payload: { name, typeRoom } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRoom);
