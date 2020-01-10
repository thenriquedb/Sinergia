import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import SvgUri from 'react-native-svg-uri';

// styles
import {
  Container, Details, DetailsLabels, Icon, InfoContainer,
} from './styles';
import { TextLight, TextBold } from '../../../styles/fonts';

const CardEquipment = props => {
  const { equipment } = props;


  return (
    <TouchableHighlight
      onPress={() => props.toggleRoomCard(props.idRoom)}
      style={{ marginBottom: 15 }}
      underlayColor="#FDFDFD">
      <Container>
        <Icon>
          <Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={equipment.icon.dark} />
          {/* <SvgUri
         gg */}
        </Icon>

        <Details>
          <TextLight fontSize="h4"> {equipment.name.length >= 22 ? equipment.name.substring(0, 22).concat('...') : equipment.name} </TextLight>
          <InfoContainer>
            <DetailsLabels>
              <TextLight> Potência </TextLight>
              <TextLight> {equipment.power} W </TextLight>
            </DetailsLabels>

            <DetailsLabels>
              <TextLight> KW/h Mensal </TextLight>
              <TextLight> {equipment.kwMonthly.toFixed(2)} KW </TextLight>
            </DetailsLabels>

            <DetailsLabels>
              <TextLight> Gasto mensal </TextLight>
              <TextLight> R$ {(equipment.tarifaConvencional.monthlyExpenses).toFixed(2)}</TextLight>
            </DetailsLabels>
          </InfoContainer>
        </Details>
      </Container>
    </TouchableHighlight>
  );
};

export default CardEquipment;
