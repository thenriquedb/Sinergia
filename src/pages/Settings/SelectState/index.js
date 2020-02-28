import React, { useState, useEffect } from 'react';
import { Picker, Alert } from 'react-native';
import { connect } from 'react-redux'

// styles
import { Container, Label, Content, Footer, SaveBtn } from './styles';
import { TextLight } from "../../../styles/fonts";
import Colors from "../../../styles/colors";

//util
import states from "../../../utilities/estados"
import tarifaBranca from "../../../utilities/tarifaBranca.json"
import reCalcularValores from "../../../util/reCalcularValores";

function SelectState(props) {
  const { navigation } = props;
  const [uf, setUF] = useState(props.usedUF);
  const [dealerships, setDealerships] = useState(tarifaBranca.filter(item => item.UF === props.usedUF));
  const [selectedDealership, setSelectedDealership] = useState(props.dealership);

  useEffect(() => {
    setDealerships(tarifaBranca.filter(item => item.UF === uf));
    setSelectedDealership(tarifaBranca.find(item => item.UF === uf));
    setUF(uf);
  }, [uf]);

  function toglleSaveButton() {
    Alert.alert(
      'Confirmar',
      'Deseja atualizar sua conconcessionária? ',
      [
        { text: 'Cancelar' },
        {
          text: 'OK', onPress: () => {
            const roomsEdit = reCalcularValores(props.rooms, props.dealership);
            props.setRooms(roomsEdit);
            props.setUf(uf);
            props.setDealership(selectedDealership);

            navigation.goBack();
            Alert.alert(
              'Atualizado com sucesso!',
              'Conconcessionária atualizada com sucesso!',
              [
                { text: 'OK' },
              ],
              { cancelable: true },
            );
          }
        },
      ],
      { cancelable: false },
    )

  }

  return (
    <Container>
      <Content>

        <Label fontSize='h5'> Estado  </Label>
        <Picker
          selectedValue={uf}
          onValueChange={itemValue => setUF(itemValue)}>
          {states.map((value, key) => {
            return <Picker.Item key={key} value={value.sigla} label={value.name} />;
          })}
        </Picker>


        {uf !== 'NONE' &&
          <>
            <Label style={{ marginTop: 20 }} fontSize='h5'> Concessionária  </Label>
            <Picker
              selectedValue={selectedDealership}
              onValueChange={itemValue => setSelectedDealership(itemValue)}>
              {dealerships.map((value, key) => {
                return <Picker.Item key={value.Distribuidora} value={value} label={value.Distribuidora} />;
              })}
            </Picker>
          </>}
      </Content>

      <Footer>
        <SaveBtn
          onPress={() => toglleSaveButton()}
          style={{ backgroundColor: uf !== 'NONE' ? Colors.primary : Colors.darkGray1 }}
        >
          <TextLight
            color={false ? '#000' : '#fff'}
            fontSize={'h5'}>
            Salvar
            </TextLight>
        </SaveBtn>
      </Footer>
    </Container>
  )
};

const mapStateToProps = state => ({
  usedUF: state.houseReducer.uf,
  dealership: state.houseReducer.dealership,
  rooms: state.houseReducer.rooms,
});

const mapDispatchToProps = dispatch => {
  return {
    setUf: (uf) => dispatch({ type: 'SET_UF', payload: { uf } }),
    setRooms: (rooms) => dispatch({ type: 'SET_ROOMS', payload: { rooms } }),
    setDealership: (dealership) => dispatch({ type: 'SET_DEALERSHIP', payload: { dealership } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectState);
