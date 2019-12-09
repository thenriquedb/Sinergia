import React from 'react';
import {TouchableHighlight} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// styles
import {
  Container,
  Details,
  DetailsLabels,
  Icon,
  InfoContainer,
  EquipmentsList,
} from './styles';
import {TextLight, TextBold} from '../../../styles/fonts';

const CardEquipment = props => {
  const {equipment} = props;

  return (
    <TouchableHighlight
      onPress={() => props.toggleRoomCard(props.idRoom)}
      style={{marginBottom: 15}}
      underlayColor="#FDFDFD">
      <Container>
        <Icon>
          <MaterialCommunityIcons name="delete" size={50} color="#000" />
        </Icon>

        <Details>
          <TextLight fontSize="h4"> {equipment.name} </TextLight>
          <InfoContainer>
            <DetailsLabels>
              <TextLight> Potência </TextLight>
              <TextLight> {equipment.power} W </TextLight>
            </DetailsLabels>

            <DetailsLabels>
              <TextLight> KW/h Mensal </TextLight>
              <TextLight> {equipment.kwMensal} KW </TextLight>
            </DetailsLabels>

            <DetailsLabels>
              <TextLight> Gasto mensal </TextLight>
              <TextLight> R$ {equipment.mensalAmount}</TextLight>
            </DetailsLabels>
          </InfoContainer>
        </Details>
      </Container>
    </TouchableHighlight>
  );
};

export default CardEquipment;
