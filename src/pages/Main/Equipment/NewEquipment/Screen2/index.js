import React, { useState } from 'react';
import { View, Picker, CheckBox, TouchableOpacity, ScrollView } from 'react-native';

// components
import DateTimePicker from 'react-native-modal-datetime-picker';
import Input from '../../../../../components/Input/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ActionButton from 'react-native-action-button';

// redux
import { connect } from 'react-redux';

//util
import moment from "moment";
import calcTarifaBranca from "../../../../../util/calcTarifaBranca";

// styles
import { Container, RegisteredContainer, Header, SetOperation, Icon, SelectTime, } from './styles';
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
  const [startTimePickerVisibleWeekdays, setStartTimeWeekdaysPickerVisible] = useState(false);
  const [endTimePickerVisibleWeekdays, setEndTimeWeekdaysPickerVisible] = useState(false);

  // Picker de horas - finais de semana
  const [startTimeWeekend, setStartTimeWeekend] = useState(new Date());
  const [endTimeWeekend, setEndTimeWeekend] = useState(() => {
    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 15);
    return currentDate;
  });

  const [frequencyOfUseOnWeekend, setFrequencyOfUseOnWeekend] = useState(1);
  const [startTimePickerVisibleWeekend, setStartTimeWeekendPickerVisible] = useState(false);
  const [endTimePickerVisibleWeekend, setEndTimeWeekendPickerVisible] = useState(false);


  // Renderiza caso o equipamento possuir mais de um modelo
  const renderHasModels = () => {
    return (
      <View>
        <TextBold color={''} fontSize={'h6'}>
          Modelo
        </TextBold>
        <Picker
          selectedValue={selectedModel}
          style={{ width: 350 }}
          onValueChange={itemValue => selectEquipmentModel(itemValue)}>
          {equipment.models.map((value, key) => {
            return <Picker.Item key={key} value={value} label={value.name} />;
          })}
        </Picker>
      </View>
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

  const renderSetTime = () => {
    return (
      <View>
        <TextBold style={{ marginTop: 15 }} fontSize={'h5'}>
          Dias da Semana
        </TextBold>

        <SetOperation>
          {!on24Hours ? (
            <View>
              <TextBold color={'#707070'} fontSize={'h6'}>
                Horário de início
              </TextBold>
              <TouchableOpacity onPress={() => setStartTimeWeekdaysPickerVisible(true)}>
                <SelectTime>
                  <Text>
                    {startTimeWeekdays.getHours()}:
                    {startTimeWeekdays.getMinutes() < 10
                      ? '0' + startTimeWeekdays.getMinutes()
                      : startTimeWeekdays.getMinutes()}
                  </Text>
                </SelectTime>
              </TouchableOpacity>
              <DateTimePicker
                is24Hour={true}
                mode={'time'}
                date={startTimeWeekdays}
                isVisible={startTimePickerVisibleWeekdays}
                onConfirm={date => setStartTimeWeekdays(date)}
                onCancel={() => setStartTimeWeekdaysPickerVisible(false)}
              />

              <TextBold
                style={{ marginTop: 10 }}
                color={'#707070'}
                fontSize={'h6'}>
                Horário de término
              </TextBold>

              <TouchableOpacity onPress={() => setEndTimeWeekdaysPickerVisible(true)}>
                <SelectTime>
                  <Text>
                    {endTimeWeekdays.getHours()}:{' '}
                    {endTimeWeekdays.getMinutes() < 10
                      ? '0' + endTimeWeekdays.getMinutes()
                      : endTimeWeekdays.getMinutes()}
                  </Text>
                </SelectTime>
              </TouchableOpacity>

              <DateTimePicker
                is24Hour={true}
                mode={'time'}
                date={endTimeWeekdays}
                isVisible={endTimePickerVisibleWeekdays}
                onConfirm={date => setEndTimeWeekdays(date)}
                onCancel={() => setEndTimeWeekdaysPickerVisible(false)}
              />
            </View>
          ) : null}

          <TextBold color={'#707070'} fontSize={'h6'}>
            Frequência de utilização
          </TextBold>

          <Picker
            selectedValue={frequencyOfUseOnWeekdays}
            style={{ width: 345 }}
            onValueChange={(itemValue, itemIndex) =>
              setFrequencyOfUseOnWeekdays(itemValue)
            }>
            <Picker.Item key={'key'} value={'1'} label={'1'} />
            <Picker.Item key={'key'} value={'2'} label={'2'} />
            <Picker.Item key={'key'} value={'3'} label={'3'} />
            <Picker.Item key={'key'} value={'4'} label={'4'} />
            <Picker.Item key={'key'} value={'5'} label={'5'} />
          </Picker>
        </SetOperation>

        <TextBold style={{ marginTop: 15 }} fontSize={'h5'}>
          Final de Semana
        </TextBold>

        <SetOperation>
          {!on24Hours ? (
            <View>
              <TextBold color={'#707070'} fontSize={'h6'}>
                Horário de início
              </TextBold>
              <TouchableOpacity onPress={() => setStartTimeWeekendPickerVisible(true)}>
                <SelectTime>
                  <Text>
                    {startTimeWeekend.getHours()}:
                    {startTimeWeekend.getMinutes() < 10
                      ? '0' + startTimeWeekend.getMinutes()
                      : startTimeWeekend.getMinutes()}
                  </Text>
                </SelectTime>
              </TouchableOpacity>
              <DateTimePicker
                is24Hour={true}
                mode={'time'}
                date={startTimeWeekend}
                isVisible={startTimePickerVisibleWeekend}
                onConfirm={date => setStartTimeWeekend(date)}
                onCancel={() => setStartTimeWeekendPickerVisible(false)}
              />

              <TextBold style={{ marginTop: 10 }} color={'#707070'} fontSize={'h6'}>
                Horário de término
              </TextBold>

              <TouchableOpacity onPress={() => setEndTimeWeekendPickerVisible(true)}>
                <SelectTime>
                  <Text>
                    {endTimeWeekend.getHours()}:{' '}
                    {endTimeWeekend.getMinutes() < 10
                      ? '0' + endTimeWeekend.getMinutes()
                      : endTimeWeekend.getMinutes()}
                  </Text>
                </SelectTime>
              </TouchableOpacity>

              <DateTimePicker
                is24Hour={true}
                mode={'time'}
                date={endTimeWeekend}
                isVisible={endTimePickerVisibleWeekend}
                onConfirm={date => setEndTimeWeekend(date)}
                onCancel={() => setEndTimeWeekendPickerVisible(false)}
              />
            </View>
          ) : null}

          <TextBold color={'#707070'} fontSize={'h6'}>
            Frequência de utilização
          </TextBold>

          <Picker
            selectedValue={frequencyOfUseOnWeekend}
            style={{ width: 320 }}
            onValueChange={(itemValue, itemIndex) =>
              setFrequencyOfUseOnWeekend(itemValue)
            }>
            <Picker.Item key={'key'} value={'1'} label={'1'} />
            <Picker.Item key={'key'} value={'2'} label={'2'} />
          </Picker>
        </SetOperation>
      </View>
    );
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

          <TextBold fontSize={'h5'}> Nome </TextBold>
          <Input
            value={customName}
            onChangeText={customName => setCustomName(customName)}
          />

          <TextBold fontSize={'h5'}> Quantidade </TextBold>
          <Input
            value={quantity.replace(/[^0-9]/g, '')}
            maxLength={2}
            onChangeText={quantity => setQuantity(quantity)}
            keyboardType={'numeric'}
          />

          <TextBold fontSize={'h5'}> Potência (W) </TextBold>
          <Input
            value={power}
            onChangeText={power => setPower(power)}
            keyboardType={'numeric'}
          />

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox
              value={on24Hours}
              onValueChange={() => setOn24Hours(!on24Hours)}
            />
            <Text> Equipamento fica ligado 24 horas </Text>
          </View>

          {renderSetTime()}
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
