import React, { useState } from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Picker, TouchableOpacity } from 'react-native';

import { Text } from "../../../../styles/fonts";
import { Container, SetOperationLabel, HourLabel, SetOperation, SelectTime } from './styles';

import { formatHour } from "../../../../util/time";

const SetTime = (props) => {
  const {
    startTimeWeekdays,
    setStartTimeWeekdays,
    endTimeWeekdays,
    setEndTimeWeekdays,
    startTimeWeekend,
    setStartTimeWeekend,
    endTimeWeekend,
    setEndTimeWeekend,
    on24Hours,
    frequencyOfUseOnWeekdays,
    setFrequencyOfUseOnWeekdays,
    frequencyOfUseOnWeekend,
    setFrequencyOfUseOnWeekend
  } = props;

  const [startTimePickerVisibleWeekdays, setStartTimeWeekdaysPickerVisible] = useState(false);
  const [endTimePickerVisibleWeekdays, setEndTimeWeekdaysPickerVisible] = useState(false);

  const [startTimePickerVisibleWeekend, setStartTimeWeekendPickerVisible] = useState(false);
  const [endTimePickerVisibleWeekend, setEndTimeWeekendPickerVisible] = useState(false);

  return (
    <Container>
      <SetOperationLabel> Dias da Semana </SetOperationLabel>
      <SetOperation>
        <>
          <HourLabel> Horário de início </HourLabel>
          <TouchableOpacity
            disabled={on24Hours || !frequencyOfUseOnWeekdays ? true : false}
            onPress={() => setStartTimeWeekdaysPickerVisible(!startTimePickerVisibleWeekdays)}
          >

            <SelectTime color={on24Hours || !frequencyOfUseOnWeekdays ? '#eee' : '#cccccc'}>
              <Text color={on24Hours || !frequencyOfUseOnWeekdays ? '#ccc' : '#000'}> {formatHour(startTimeWeekdays)} </Text>
            </SelectTime>
          </TouchableOpacity>

          <DateTimePicker
            is24Hour={true}
            mode={'time'}
            date={startTimeWeekdays}
            isVisible={startTimePickerVisibleWeekdays}
            onConfirm={date => {
              setStartTimeWeekdays(date);
              setStartTimeWeekdaysPickerVisible(!startTimePickerVisibleWeekdays);
            }}
            onCancel={() => setStartTimeWeekdaysPickerVisible(!startTimePickerVisibleWeekdays)}
          />

          <HourLabel> Horário de término </HourLabel>
          <TouchableOpacity
            disabled={on24Hours || !frequencyOfUseOnWeekdays ? true : false}
            onPress={() => setEndTimeWeekdaysPickerVisible(!endTimePickerVisibleWeekdays)}>
            <SelectTime color={on24Hours || !frequencyOfUseOnWeekdays ? '#eee' : '#cccccc'}>
              <Text color={on24Hours || !frequencyOfUseOnWeekdays ? '#ccc' : '#000'}> {formatHour(endTimeWeekdays)} </Text>
            </SelectTime>
          </TouchableOpacity>

          <DateTimePicker
            is24Hour={true}
            mode={'time'}
            date={endTimeWeekdays}
            isVisible={endTimePickerVisibleWeekdays}
            onConfirm={date => {
              setEndTimeWeekdays(date);
              setEndTimeWeekdaysPickerVisible(!endTimePickerVisibleWeekdays);
            }}
            onCancel={() => setEndTimeWeekdaysPickerVisible(!endTimePickerVisibleWeekdays)}
          />
        </>

        <HourLabel> Frequência de utilização </HourLabel>
        <Picker
          selectedValue={frequencyOfUseOnWeekdays}
          style={{ width: 100 }}
          onValueChange={(itemValue, itemIndex) => setFrequencyOfUseOnWeekdays(itemValue)
          }>
          <Picker.Item key={'key'} value={0} label={'    0'} />
          <Picker.Item key={'key'} value={1} label={'    1'} />
          <Picker.Item key={'key'} value={2} label={'    2'} />
          <Picker.Item key={'key'} value={3} label={'    3'} />
          <Picker.Item key={'key'} value={4} label={'    4'} />
          <Picker.Item key={'key'} value={5} label={'    5'} />
        </Picker>
      </SetOperation>


      <SetOperationLabel> Final de Semana </SetOperationLabel>
      <SetOperation>
        <>
          <HourLabel> Horário de início </HourLabel>
          <TouchableOpacity
            disabled={on24Hours || !frequencyOfUseOnWeekend ? true : false}
            onPress={() => setStartTimeWeekendPickerVisible(!startTimePickerVisibleWeekend)}
          >
            <SelectTime color={on24Hours || !frequencyOfUseOnWeekend ? '#eee' : '#cccccc'}>
              <Text color={on24Hours || !frequencyOfUseOnWeekend ? '#ccc' : '#000'}> {formatHour(startTimeWeekend)} </Text>
            </SelectTime>

          </TouchableOpacity>
          <DateTimePicker
            is24Hour={true}
            mode={'time'}
            date={startTimeWeekend}
            isVisible={startTimePickerVisibleWeekend}
            onConfirm={date => {
              setStartTimeWeekend(date);
              setStartTimeWeekendPickerVisible(!startTimePickerVisibleWeekend);
            }}
            onCancel={() => setStartTimeWeekendPickerVisible(!startTimePickerVisibleWeekend)}
          />

          <HourLabel> Horário de término </HourLabel>
          <TouchableOpacity
            disabled={on24Hours || !frequencyOfUseOnWeekend ? true : false}
            onPress={() => setEndTimeWeekendPickerVisible(true)}>
            <SelectTime color={on24Hours || !frequencyOfUseOnWeekend ? '#eee' : '#cccccc'}>
              <Text color={on24Hours || !frequencyOfUseOnWeekend ? '#ccc' : '#000'}> {formatHour(endTimeWeekend)} </Text>
            </SelectTime>
          </TouchableOpacity>

          <DateTimePicker
            is24Hour={true}
            mode={'time'}
            date={endTimeWeekend}
            isVisible={endTimePickerVisibleWeekend}
            onConfirm={date => {
              setEndTimeWeekend(date);
              setEndTimeWeekendPickerVisible(!endTimePickerVisibleWeekend)
            }}
            onCancel={() => setEndTimeWeekendPickerVisible(!endTimePickerVisibleWeekend)}
          />
        </>

        <HourLabel> Frequência de utilização </HourLabel>
        <Picker
          selectedValue={frequencyOfUseOnWeekend}
          style={{ width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            setFrequencyOfUseOnWeekend(itemValue)
          }>
          <Picker.Item key={'key'} value={0} label={'    0'} />
          <Picker.Item key={'key'} value={1} label={'    1'} />
          <Picker.Item key={'key'} value={2} label={'    2'} />
        </Picker>
      </SetOperation>
    </Container>
  );
};

export default SetTime;
