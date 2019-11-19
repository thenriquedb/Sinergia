import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {Picker, Alert} from 'react-native';
import {connect} from 'react-redux';

// utilities
import roomsList from '../../../utilities/roomsList';

// components
import Input from '../../../components/Input/index';

// styles
import {Container, SaveBtn} from './styles';
import {TextBold} from '../../../styles/fonts';

const EditRoomModal = props => {
  const [name, setName] = useState(props.name);
  const [selectedRoom, setSelectedRoom] = useState('');

  const toggleEditBtn = () => {
    if (name.length >= 0) {
      try {
        props.editRoom(props.idRoom, name, selectedRoom);
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
      Alert.alert('O nome precisa possuir no mínimo 4 caracteres');
    }
  };

  return (
    <Modal
      isVisible={props.isVisible}
      swipeDirection={['down']}
      onSwipeComplete={props.toggleModal}
      style={{justifyContent: 'flex-end', margin: 0}}>
      <Container>
        <Input
          value={name}
          onChangeText={name => setName(name)}
          placeholder="Novo nome"
        />
        <Picker
          selectedValue={props.selectedRoom}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedRoom(itemValue);
          }}>
          {roomsList.map((value, key) => {
            return <Picker.Item key={key} value={key} label={value.name} />;
          })}
        </Picker>
        <SaveBtn
          onPress={() => toggleEditBtn(props.idRoom, name, selectedRoom)}>
          <TextBold fontSize="h5" color="#fff">
            {' '}
            Atualizar{' '}
          </TextBold>
        </SaveBtn>
      </Container>
    </Modal>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    editRoom: (id, name, typeRoom) => {
      dispatch({type: 'EDIT_ROOM', payload: {id, name, typeRoom}});
    },
  };
};

export default connect(null, mapDispatchToProps)(EditRoomModal);
