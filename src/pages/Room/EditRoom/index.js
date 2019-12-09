import React, {useState} from 'react';
import {Picker, Alert} from 'react-native';

// redux
import {connect} from 'react-redux';

// components
import Input from '../../../components/Input/index';

// styles
import {Container, SaveBtn} from './styles';
import {TextBold} from '../../../styles/fonts';

// utilities
import roomsList from '../../../utilities/roomsList';

const EditRoom = props => {
  const [name, setName] = useState(props.name);
  const [selectedRoom, setSelectedRoom] = useState('');

  useEffect(() => {
    if (props.isVisible) {
      setName(props.name);
      setSelectedRoom('');
    }
  }, [props.isVisible]);

  const toggleEditBtn = () => {
    if (name.length >= 4) {
      try {
        props.editRoom(props.idRoom, name, selectedRoom);
        // setSelectedRoom(props.selectedRoom);
        props.refreshList();
      } catch (error) {
        Alert.alert('Não foi atualizar cômodo ' + name + '.');
      }

      Alert.alert(
        'O cômodo ' +
          props.name +
          ' foi atualizado para ' +
          name +
          ' com sucesso!',
      );
      props.toggleModal();
      // onRowOpen(props.index);

      setName('');
    } else {
      Alert.alert('O novo nome precisa possuir no mínimo 4 caracteres.');
    }
  };

  return (
    <Container>
      <Input
        value={name}
        onChangeText={name => setName(name)}
        placeholder="Novo nome"
      />
      <Picker
        selectedValue={selectedRoom}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedRoom(itemValue);
        }}>
        {roomsList.map((value, key) => {
          return <Picker.Item key={key} value={key} label={value.name} />;
        })}
      </Picker>
      <SaveBtn onPress={() => toggleEditBtn(props.idRoom, name, selectedRoom)}>
        <TextBold fontSize="h5" color="#fff">
          {' '}
          Atualizar{' '}
        </TextBold>
      </SaveBtn>
    </Container>
  );
};

const mapStateToProps = state => {
  return {rooms: state.houseReducer.rooms};
};

const mapDispatchToProps = dispatch => {
  return {
    addNewRoom: (name, typeRoom) =>
      dispatch({type: 'ADD_ROOM', payload: {name, typeRoom}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRoom);
