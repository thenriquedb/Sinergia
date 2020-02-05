import React, { useState } from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Picker, TouchableOpacity } from 'react-native';

import { Container, SetOperation, SelectTime } from './styles';
import { Text, TextBold } from "../../../../../styles/fonts";

import { formatHour } from "../../../../../util/time";

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
      <TextBold style={{ marginTop: 15 }} fontSize={'h5'}>
        Dias da Semana
        </TextBold>

      <SetOperation>
        {!on24Hours &&
          <>
            <TextBold color={'#707070'} fontSize={'h6'}> Horário de início </TextBold>
            <TouchableOpacity onPress={() => setStartTimeWeekdaysPickerVisible(!startTimePickerVisibleWeekdays)}>
              <SelectTime>
                <Text> {formatHour(startTimeWeekdays)} </Text>
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

            <TextBold
              style={{ marginTop: 10 }}
              color={'#707070'}
              fontSize={'h6'}>
              Horário de término
              </TextBold>

            <TouchableOpacity onPress={() => setEndTimeWeekdaysPickerVisible(!endTimePickerVisibleWeekdays)}>
              <SelectTime>
                <Text> {formatHour(endTimeWeekdays)} </Text>
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
        }

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
          <>
            <TextBold color={'#707070'} fontSize={'h6'}>
              Horário de início
              </TextBold>
            <TouchableOpacity onPress={() => setStartTimeWeekendPickerVisible(!startTimePickerVisibleWeekend)}>
              <SelectTime>
                <Text> {formatHour(startTimeWeekend)} </Text>
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

            <TextBold style={{ marginTop: 10 }} color={'#707070'} fontSize={'h6'}>
              Horário de término
              </TextBold>

            <TouchableOpacity onPress={() => setEndTimeWeekendPickerVisible(true)}>
              <SelectTime>
                <Text> {formatHour(endTimeWeekend)} </Text>
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
          </>
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
    </Container>
  );
};

export default SetTime;
