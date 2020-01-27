import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Picker, CheckBox, ScrollView } from 'react-native';

// components
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ActionButton from 'react-native-action-button';
import SetTime from "./SetTime";
import Input from "../../../../../components/Input";


//util
import moment from "moment";
import calcTarifaBranca from "../../../../../util/calcTarifaBranca";

// styles
import { Container, RegisteredContainer, Header, Icon, CheckBoxArea, InputArea } from './styles';
import Colors from '../../../../../styles/colors';
import { TextBold, TextLight, Text } from '../../../../../styles/fonts';

const NewEquipment2 = props => {
  const equipment = props.navigation.getParam('equipment');

  // states
  const [selectedModel, setSelectedModel] = useState(equipment.models[0]);
  const [customName, setCustomName] = useState(equipment.models[0].name);
  const [quantity, setQuantity] = useState('1');
  const [power, setPower] = useState(equipment.models[0].power.toString());
  const [on24Hours, setOn24Hours] = useState(false);

  // Picker de horas - dias da semana
  const [startTimeWeekdays, setStartTimeWeekdays] = useState(new Date());
  const [endTimeWeekdays, setEndTimeWeekdays] = useState(() => {
    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 15);
    return currentDate;
  });

  const [frequencyOfUseOnWeekdays, setFrequencyOfUseOnWeekdays] = useState(1);


  // Picker de horas - finais de semana
  const [startTimeWeekend, setStartTimeWeekend] = useState(new Date());
  const [endTimeWeekend, setEndTimeWeekend] = useState(() => {
    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 15);
    return currentDate;
  });

  const [frequencyOfUseOnWeekend, setFrequencyOfUseOnWeekend] = useState(1);


  // Renderiza caso o equipamento possuir mais de um modelo
  const renderHasModels = () => {
    return (
      <>
        <TextBold color={''} fontSize={'h6'}> Modelo </TextBold>
        <Picker
          selectedValue={selectedModel}
          style={{ width: 350 }}
          onValueChange={itemValue => selectEquipmentModel(itemValue)}>
          {equipment.models.map((value, key) => {
            return <Picker.Item key={key} value={value} label={value.name} />;
          })}
        </Picker>
      </>
    );
  };

  const selectEquipmentModel = (itemValue) => {
    setSelectedModel(itemValue);
    setCustomName(itemValue.name);
    setPower(itemValue.power.toString())
  }

  const toggleSaveBtn = () => {
    const totalTimeOn = on24Hours ? 24 : moment.duration(moment(endTimeWeekdays).diff(startTimeWeekdays)).asHours();
    const power = !selectedModel ? equipment.models[0].power : selectedModel.power

    // Consumo de KW/H mensais
    const kwMonthly = (power * quantity * totalTimeOn * 30) / 1000

    // calculo da tarifa convencional
    const tarifaConvencional = kwMonthly * props.valueKW;

    // calculo da tarifa branca
    const tarifaBranca = calcTarifaBranca(kwMonthly, props.dealership, startTimeWeekdays, endTimeWeekdays, on24Hours);

    const newEquipment = {
      id: new Date().getTime().toString(),
      name: customName,
      icon: equipment.icon,
      power,
      quantity,
      totalTimeOn,
      kwMonthly,
      tarifaConvencional: {
        monthlyExpenses: tarifaConvencional,
      },
      tarifaBranca: {
        monthlyExpenses: tarifaBranca,
      },
      frequencyOfUseOnWeekdays,
      frequencyOfUseOnWeekend,
    };

    props.addNewEquipment(props.navigation.getParam('idRoom'), newEquipment);
    props.navigation.navigate('Room');
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <Icon resizeMode={"contain"} source={equipment.icon.light} />

          <TextBold color={'#fff'} fontSize={'h3'} textAlign={'center'}>
            {equipment.name}
          </TextBold>

          <TextLight textAlign={'center'} fontSize={'h5'} color={'#fff'}>
            {equipment.models[0].description}
          </TextLight>
        </Header>

        <RegisteredContainer>
          {equipment.models.length > 1 ? renderHasModels() : null}

          <InputArea>
            <Input
              label="Nome"
              value={customName}
              onChangeText={customName => setCustomName(customName)}
            />
          </InputArea>

          <InputArea>
            <Input
              label={"Quantidade"}
              value={quantity.replace(/[^0-9]/g, '')}
              maxLength={2}
              onChangeText={quantity => setQuantity(quantity)}
              keyboardType={'numeric'}
            />
          </InputArea>

          <InputArea>
            <Input
              label={"Potência (W)"}
              value={power}
              onChangeText={power => setPower(power)}
              keyboardType={'numeric'}
            />
          </InputArea>

          <CheckBoxArea>
            <CheckBox
              value={on24Hours}
              onValueChange={() => setOn24Hours(!on24Hours)}
            />
            <Text> Equipamento fica ligado 24 horas </Text>
          </CheckBoxArea>

          <SetTime
            startTimeWeekdays={startTimeWeekdays}
            setStartTimeWeekdays={setStartTimeWeekdays}
            endTimeWeekdays={endTimeWeekdays}
            setEndTimeWeekdays={setEndTimeWeekdays}
            startTimeWeekend={startTimeWeekend}
            setStartTimeWeekend={setStartTimeWeekend}
            endTimeWeekend={endTimeWeekend}
            setEndTimeWeekend={setEndTimeWeekend}
            on24Hours={on24Hours}
            frequencyOfUseOnWeekdays={frequencyOfUseOnWeekdays}
            setFrequencyOfUseOnWeekdays={setFrequencyOfUseOnWeekdays}
            frequencyOfUseOnWeekend={frequencyOfUseOnWeekend}
            setFrequencyOfUseOnWeekend={setFrequencyOfUseOnWeekend}
          />
        </RegisteredContainer>
      </ScrollView>

      <ActionButton
        size={55}
        renderIcon={() => (
          <MaterialCommunityIcons name="content-save" size={30} color="#fff" />
        )}
        onPress={() => toggleSaveBtn()}
        buttonColor={Colors.primary}
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  valueKW: state.houseReducer.valueKW,
  dealership: state.houseReducer.dealership
});

const mapDispatchToProps = dispatch => {
  return {
    addNewEquipment: (id, newEquipment) =>
      dispatch({
        type: 'ADD_EQUIPMENT',
        payload: {
          id,
          newEquipment,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEquipment2);
