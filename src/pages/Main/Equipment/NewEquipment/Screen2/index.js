import React, { useState } from 'react';
import { View, Picker, CheckBox, TouchableOpacity, ScrollView } from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';
import Input from '../../../../../components/Input/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ActionButton from 'react-native-action-button';
import { connect } from 'react-redux';
import moment from "moment"

// styles
import { Container, RegisteredContainer, Header, SetOperation, SelectTime, } from './styles';
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

  // Hour pickers
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(() => {
    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 15);
    return currentDate;
  });

  const [startTimePickerVisible, setStartTimePickerVisible] = useState(false);
  const [endTimePickerVisible, setEndTimePickerVisible] = useState(false);
  const [weekendUsageTime, setWeekendUsageTime] = useState(false);

  const [frequencyOfUseOnWeekdays, setFrequencyOfUseOnWeekdays] = useState(1);
  const [frequencyOfUseOnWeekend, setFrequencyOfUseOnWeekend] = useState(1);

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
          onValueChange={itemValue => setSelectedModel(itemValue)}>
          {equipment.models.map((value, key) => {
            return <Picker.Item key={key} value={value} label={value.name} />;
          })}
        </Picker>
      </View>
    );
  };

  const toggleSaveBtn = () => {
    const totalTimeOn = on24Hours ? 24 : moment.duration(moment(endTime).diff(startTime)).asHours();
    const power = !selectedModel ? equipment.models[0].power : selectedModel.power

    // Consumo de KW/H mensais
    const kwMonthly = (power * quantity * totalTimeOn * 30) / 1000
    const tarifaConvencional = kwMonthly * props.valueKW;

    const newEquipment = {
      id: new Date().getTime().toString(),
      name: customName,
      power,
      quantity,
      totalTimeOn,
      kwMonthly,
      tarifaConvencional: {
        monthlyExpenses: tarifaConvencional,
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
              <TouchableOpacity onPress={() => setStartTimePickerVisible(true)}>
                <SelectTime>
                  <Text>
                    {startTime.getHours()}:
                    {startTime.getMinutes() < 10
                      ? '0' + startTime.getMinutes()
                      : startTime.getMinutes()}
                  </Text>
                </SelectTime>
              </TouchableOpacity>
              <DateTimePicker
                is24Hour={true}
                mode={'time'}
                date={startTime}
                isVisible={startTimePickerVisible}
                onConfirm={date => setStartTime(date)}
                onCancel={() => setStartTimePickerVisible(false)}
              />

              <TextBold
                style={{ marginTop: 10 }}
                color={'#707070'}
                fontSize={'h6'}>
                Horário de término
              </TextBold>

              <TouchableOpacity onPress={() => setEndTimePickerVisible(true)}>
                <SelectTime>
                  <Text>
                    {endTime.getHours()}:{' '}
                    {endTime.getMinutes() < 10
                      ? '0' + endTime.getMinutes()
                      : endTime.getMinutes()}
                  </Text>
                </SelectTime>
              </TouchableOpacity>

              <DateTimePicker
                is24Hour={true}
                mode={'time'}
                date={endTime}
                isVisible={endTimePickerVisible}
                onConfirm={date => setEndTime(date)}
                onCancel={() => setEndTimePickerVisible(false)}
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
                Tempo de funcionamento por dia
              </TextBold>
              <Picker
                selectedValue={weekendUsageTime}
                style={{ width: 320 }}
                onValueChange={(itemValue, itemIndex) =>
                  setWeekendUsageTime(itemValue)
                }>
                <Picker.Item key={'key'} value={0.25} label={'15 minutos'} />
                <Picker.Item key={'key'} value={0.5} label={'30 minutos'} />
                <Picker.Item key={'key'} value={0.75} label={'45 minutos'} />
                <Picker.Item key={'key'} value={1} label={'1 hora'} />
                <Picker.Item key={'key'} value={2} label={'2 horas'} />
                <Picker.Item key={'key'} value={3} label={'3 horas'} />
                <Picker.Item key={'key'} value={4} label={'4 horas'} />
                <Picker.Item key={'key'} value={5} label={'5 horas'} />
                <Picker.Item key={'key'} value={6} label={'6 horas'} />
                <Picker.Item key={'key'} value={7} label={'7 horas'} />
                <Picker.Item key={'key'} value={8} label={'8 horas'} />
                <Picker.Item key={'key'} value={9} label={'9 horas'} />
                <Picker.Item key={'key'} value={10} label={'10 horas'} />
                <Picker.Item key={'key'} value={11} label={'11 horas'} />
                <Picker.Item key={'key'} value={12} label={'12 horas'} />
                <Picker.Item key={'key'} value={13} label={'13 horas'} />
                <Picker.Item key={'key'} value={14} label={'14 horas'} />
                <Picker.Item key={'key'} value={15} label={'15 horas'} />
                <Picker.Item key={'key'} value={16} label={'16 horas'} />
                <Picker.Item key={'key'} value={17} label={'17 horas'} />
                <Picker.Item key={'key'} value={18} label={'18 horas'} />
                <Picker.Item key={'key'} value={19} label={'19 horas'} />
                <Picker.Item key={'key'} value={20} label={'20 horas'} />
                <Picker.Item key={'key'} value={21} label={'21 horas'} />
                <Picker.Item key={'key'} value={22} label={'22 horas'} />
                <Picker.Item key={'key'} value={23} label={'23 horas'} />
                <Picker.Item key={'key'} value={24} label={'24 horas'} />
              </Picker>
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
      <Header>
        <TextBold color={'#fff'} fontSize={'h3'} textAlign={'center'}>
          {equipment.name}
        </TextBold>

        <TextLight textAlign={'center'} fontSize={'h5'} color={'#fff'}>
          {equipment.models[0].description}
        </TextLight>
      </Header>

      <ScrollView
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}>
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

          <TextBold fontSize={'h5'}> Potência </TextBold>
          <Input
            value={power}
            onChangeText={power => setPower(power)}
            keyboardType={'numeric'}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <CheckBox
              contentContainerStyle={{ padding: 0 }}
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
