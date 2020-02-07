import React, { useState } from 'react';
import { Picker, Animated, Alert, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';

import CheckBox from "@react-native-community/checkbox";

// components
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ActionButton from 'react-native-action-button';
import SetTime from "./SetTime";
import Input from "../../../components/Input";
import Header from "./Header";

//util
import calcularTarifas from "../../../util/calcularTarifas";

// styles
import {
  Container,
  BackButton,
  RegisteredContainer,
  CheckBoxArea,
  InputArea
} from './styles';

import Colors from '../../../styles/colors';
import { TextBold, Text } from '../../../styles/fonts';

function Equipment(props) {
  const equipment = props.navigation.getParam('equipment');
  console.log("equipment: ", equipment)
  const action = props.navigation.getParam('action');
  const { navigation } = props;

  // states
  const [selectedModel, setSelectedModel] = useState(equipment.model ? equipment.model : equipment.models[0]);
  const [customName, setCustomName] = useState(equipment.name ? equipment.name : equipment.models[0].name);
  const [quantity, setQuantity] = useState(equipment.quantity ? equipment.quantity : '1');
  const [power, setPower] = useState(equipment.power ? equipment.power : equipment.models[0].power.toString());
  const [on24Hours, setOn24Hours] = useState(equipment.on24Hours ? on24Hours : false);
  const [useCustomEquipment, setUseCustomEquipment] = useState(equipment.useCustomEquipment ? equipment.useCustomEquipment : false);

  // Picker de horas - dias da semana
  const [startTimeWeekdays, setStartTimeWeekdays] = useState(equipment.startTimeWeekdays ? equipment.startTimeWeekdays : new Date());
  const [endTimeWeekdays, setEndTimeWeekdays] = useState(equipment.endTimeWeekdays ? equipment.endTimeWeekdays :
    () => {
      const currentDate = new Date();
      currentDate.setMinutes(currentDate.getMinutes() + 15);
      return currentDate;
    });
  const [frequencyOfUseOnWeekdays, setFrequencyOfUseOnWeekdays] = useState(equipment.frequencyOfUseOnWeekdays ? equipment.frequencyOfUseOnWeekdays : 1);

  // Picker de horas - finais de semana
  const [startTimeWeekend, setStartTimeWeekend] = useState(equipment.startTimeWeekend ? equipment.startTimeWeekend : new Date());
  const [endTimeWeekend, setEndTimeWeekend] = useState(equipment.endTimeWeekend ? equipment.endTimeWeekend :
    () => {
      const currentDate = new Date();
      currentDate.setMinutes(currentDate.getMinutes() + 15);
      return currentDate;
    });
  const [frequencyOfUseOnWeekend, setFrequencyOfUseOnWeekend] = useState(equipment.frequencyOfUseOnWeekend ? equipment.frequencyOfUseOnWeekend : 1);

  const scrollOffset = new Animated.Value(0);


  function validateInputs() {
    if (endTimeWeekdays < startTimeWeekdays || endTimeWeekend < startTimeWeekend) {
      ToastAndroid.showWithGravityAndOffset(
        'O horário de desligamento do equipamento não pode ser menor do que o horário de início',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      return false;
    }

    if (!power) {
      Alert.alert(
        'Potência',
        `O campo potência não pode ficar em branco`,
        [
          { text: 'OK' },
        ],
        { cancelable: true },
      );
      return false;
    }

    if (!quantity) {
      Alert.alert(
        'Quantidade',
        `O campo quantidade não pode ficar em branco`,
        [
          { text: 'OK' },
        ],
        { cancelable: true },
      );
      return false;
    }

    return true;
  }

  function toggleSaveBtn() {
    if (validateInputs()) {
      const { kwMonthly, totalTimeOn, tarifaConvencional, tarifaBranca } = calcularTarifas(
        quantity, power, frequencyOfUseOnWeekdays,
        frequencyOfUseOnWeekend, props.dealership, startTimeWeekdays,
        endTimeWeekdays, startTimeWeekend, endTimeWeekend, on24Hours);

      console.log("tarifaConvencional: ", tarifaConvencional)

      const newEquipment = {
        id: equipment.id ? equipment.id : new Date().getTime().toString(),
        name: customName,
        icon: equipment.icon,
        models: equipment.models,
        model: selectedModel,
        on24Hours,
        useCustomEquipment,
        power,
        quantity,
        totalTimeOn,
        kwMonthly,
        frequencyOfUseOnWeekdays,
        frequencyOfUseOnWeekend,
        startTimeWeekdays,
        endTimeWeekdays,
        startTimeWeekend,
        endTimeWeekend,
        tarifaConvencional: {
          monthlyExpenses: tarifaConvencional,
        },
        tarifaBranca: {
          monthlyExpenses: tarifaBranca,
        },
      };

      console.log("newEquipment: ", newEquipment)

      if (action == 'edit') {
        props.editEquipment(props.navigation.getParam('idRoom'), newEquipment.id, newEquipment);
      } else {
        props.addNewEquipment(props.navigation.getParam('idRoom'), newEquipment);
      }
      props.navigation.navigate('Room');
    };
  }

  function selectEquipmentModel(itemValue) {
    setSelectedModel(itemValue);
    setUseCustomEquipment(itemValue.name === 'Personalizado' ? true : false);
    setCustomName(itemValue.name === 'Personalizado' ? equipment.name : itemValue.name);
    setPower(itemValue.power.toString())
  }

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()} >
        <MaterialCommunityIcons name="arrow-left" size={28} color={Colors.white} />
      </BackButton>

      <Header
        equipmentName={equipment.name}
        equipmentIcon={equipment.icon.light}
        equipmentDescription={equipment.models[0].description}
        on24Hours={on24Hours}
        offset={scrollOffset}
      />

      <RegisteredContainer
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: { y: scrollOffset },
            }
          }
        ])
        }
      >

        {equipment.models.length > 1 &&
          <>
            <TextBold fontSize={'h6'}> Modelo </TextBold>
            <Picker
              selectedValue={selectedModel}
              style={{ width: 330 }}
              onValueChange={itemValue => selectEquipmentModel(itemValue)}>
              {equipment.models.map((value, key) => {
                return <Picker.Item key={key} value={value} label={value.name} />;
              })}
            </Picker>
          </>
        }

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

        {
          useCustomEquipment &&
          (
            <InputArea>
              <Input
                label={"Potência (W)"}
                value={power}
                onChangeText={power => setPower(power)}
                keyboardType={'numeric'}
              />
            </InputArea>
          )
        }

        <CheckBoxArea>
          <CheckBox
            tintColors={{ true: Colors.primary, false: '#999' }}
            value={on24Hours}
            onValueChange={() => {
              scrollOffset.setOffset(0)
              setOn24Hours(!on24Hours)
            }}
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

      <ActionButton
        size={55}
        renderIcon={() => (
          <MaterialCommunityIcons
            name={action === 'edit' ? "pencil" : "content-save"}
            size={30}
            color="#fff" />
        )}
        onPress={() => toggleSaveBtn()}
        buttonColor={Colors.primary}
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  valorTarifaConvencional: state.houseReducer.dealership.valorTarifaConvencional,
  dealership: state.houseReducer.dealership
});

const mapDispatchToProps = dispatch => {
  return {
    addNewEquipment: (id, newEquipment) => dispatch({
      type: 'ADD_EQUIPMENT', payload: { id, newEquipment },
    }),
    editEquipment: (idRoom, idEquipment, newEquipment) => dispatch({
      type: 'EDIT_EQUIPMENT', payload: { idRoom, idEquipment, newEquipment },
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Equipment);
