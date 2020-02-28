import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import {
  Container,
  RadioItem,
  RadioButtonMarked,
  Circle,
  RadioLabel
} from './styles';

function RadioForm(props) {
  const { items, defaultValue } = props;
  const [selecedItem, setSelecedItem] = useState(items.findIndex(item => item.value === defaultValue));

  const MarketItem = () => (
    <Circle>
      <RadioButtonMarked>
      </RadioButtonMarked>
    </Circle>
  );

  return (
    <Container>
      {items.map((item, index) => {
        return (
          <TouchableOpacity activeOpacity={1.0} onPress={() => {
            setSelecedItem(index);
            props.selectedItem(item.value);
            props.cancel()
          }}>
            <RadioItem>
              {selecedItem === index ? MarketItem() : <Circle />}
              <RadioLabel> {item.label} </RadioLabel>
            </RadioItem>
          </TouchableOpacity>
        );
      })}
    </Container>
  );
};

export default RadioForm;
