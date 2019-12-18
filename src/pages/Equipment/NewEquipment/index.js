import React, {useState, useEffect} from 'react';
import {View, FlatList, TouchableHighlight} from 'react-native';

import {Container, EquipmentCard} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Lista de equipamentos
import equipmentsList from '../../../utilities/equipmentsList';

// styles
import {TextBold, TextThin, TextLight, Text} from '../../../styles/fonts';
import Colors from '../../../styles/colors';

const Equipment = item => {
  // if (item.empty) {
  //   return <View style={{backgroundColor: 'transparent'}} />;
  // }
  return (
    <TouchableHighlight
      underlayColor={Colors.primary}
      style={{flex: 1 / 3}}
      onPress={() => alert('')}>
      <EquipmentCard>
        <MaterialCommunityIcons
          name="radio"
          size={50}
          color={Colors.darkGray2}
        />

        <TextLight textAlign={'center'} color={Colors.darkGray2} fontSize={4}>
          {item.name}
        </TextLight>
      </EquipmentCard>
    </TouchableHighlight>
  );
};

const NewEquipment = props => {
  // const -+9{navigation} = props;
  const equipments = [
    ...equipmentsList.rooms['default'],
    ...equipmentsList.rooms['bedroom'],
  ].sort((a, b) => {
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
  });

  console.log('equipamentos:  ', equipments);

  const [selectedEquipment, setSelectedEquipment] = useState(null);

  return (
    <Container>
      <FlatList
        data={equipments}
        keyExtractor={item => item.name}
        numColumns={3}
        renderItem={({item}) => {
          return Equipment(item);
        }}
      />
      <Text>Selecione o tipo de equipamento que deseja adicionar </Text>
    </Container>
  );
};

export default NewEquipment;
