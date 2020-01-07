import React, { Component } from 'react';
import { Picker, Alert } from 'react-native';

// redux
import { connect } from 'react-redux';

// components
import Input from '../../../../components/Input/index';

// styles
import { Container, SaveBtn } from './styles';
import { TextBold } from '../../../../styles/fonts';

// utilities
import roomsList from '../../../../utilities/roomsList';

class EditRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldName: this.props.navigation.getParam('room').name,
      newName: this.props.navigation.getParam('room').name,
      idRoom: this.props.navigation.getParam('room').id,
      selectedRoom: '',
    };
    this.toggleEditBtn = this.toggleEditBtn.bind(this);
  }

  toggleEditBtn() {
    if (this.state.newName.length >= 4) {
      if (this.state.newName === this.state.oldName) {
        Alert('Novo nome não pode ser igual ao original.');
        return;
      }

      try {
        this.props.editRoom(
          this.state.idRoom,
          this.state.newName,
          this.state.selectedRoom,
        );

        Alert.alert('O cômodo ' + this.state.oldName + ' foi atualizado para ' + this.state.newName +
          ' com sucesso!');

        this.props.navigation.goBack();
        setName('');
      } catch (error) {
        Alert.alert('Não foi atualizar cômodo ' + this.state.oldName + '.');
      }
    } else {
      Alert.alert('O novo nome precisa possuir no mínimo 4 caracteres.');
    }
  }

  render() {
    return (
      <Container>
        <Input
          value={this.state.newName}
          onChangeText={newName => this.setState({ newName })}
          placeholder="Novo nome"
        />
        <Picker
          selectedValue={this.state.selectedRoom}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedRoom(itemValue);
          }}>
          {roomsList.map((value, key) => {
            return <Picker.Item key={key} value={key} label={value.name} />;
          })}
        </Picker>

        <SaveBtn onPress={() => this.toggleEditBtn()}>
          <TextBold fontSize="h5" color="#fff">
            Atualizar
          </TextBold>
        </SaveBtn>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editRoom: (id, name, typeRoom) => {
      dispatch({ type: 'EDIT_ROOM', payload: { id, name, typeRoom } });
    },
  };
};
export default connect(null, mapDispatchToProps)(EditRoom);
