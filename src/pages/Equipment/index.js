import React from 'react';
import {View} from 'react-native';

import {Container, EquipmentsList, Header} from './styles';

// Lista de equipamentos
import equipmentsList from '../../../utilities/equipmentsList';

import {TextBold, TextThin, TextLight, Text} from '../../../styles/fonts';

const NewEquipment = props => {
  // const {navigation} = props;
  const equipments = equipmentsList.rooms['bedroom'];
  console.log('equipments do quarto', equipments);

  return (
    <Container>
      <Header>
        <TextBold color={'#fff'} fontSize={'h3'} textAlign={'center'}>
          Geladeira
        </TextBold>

        <TextLight textAlign={'center'} fontSize={'h6'} color={'#fff'}>
          Duis ante arcu, tincidunt sit amet vehicula id, accumsan a tellus.
        </TextLight>
      </Header>
      <EquipmentsList>
        <Text> Cadastrar novo cômodo </Text>
      </EquipmentsList>
    </Container>
  );
};

export default NewEquipment;
