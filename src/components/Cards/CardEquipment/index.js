import React from 'react';
import { TouchableHighlight } from 'react-native';

// styles
import { Container, Details, DetailsLabels, Icon, IconContainer, InfoContainer } from './styles';
import { TextLight } from '../../../styles/fonts';

import { connect } from 'react-redux'

import { moneyMask, kwMask } from "../../../util/masks";

const CardEquipment = props => {
  const { equipment } = props;

  return (
    <TouchableHighlight
      onPress={() => props.toggleRoomCard(props.idRoom)}
      style={{ marginBottom: 15 }}
      underlayColor="#FDFDFD">
      <Container>
        <IconContainer>
          <Icon resizeMode={"contain"} source={equipment.icon.dark} />
        </IconContainer>

        <Details>
          <TextLight fontSize="h4"> {equipment.name.length >= 22 ? equipment.name.substring(0, 22).concat('...') : equipment.name} </TextLight>
          <InfoContainer>
            <DetailsLabels>
              <TextLight> Potência </TextLight>
              <TextLight> {equipment.power} W </TextLight>
            </DetailsLabels>

            <DetailsLabels>
              <TextLight> KW/h Mensal </TextLight>
              <TextLight> {kwMask(equipment.kwMonthly)}  </TextLight>
            </DetailsLabels>

            <DetailsLabels>
              <TextLight> Gasto mensal </TextLight>
              <TextLight> {props.tarifaUsed === 'convencional' ?
                moneyMask(equipment.tarifaConvencional.monthlyExpenses) :
                moneyMask(equipment.tarifaBranca.monthlyExpenses)}
              </TextLight>
            </DetailsLabels>
          </InfoContainer>
        </Details>
      </Container>
    </TouchableHighlight>
  );
};


const mapStateToProps = state => ({
  tarifaUsed: state.houseReducer.tarifa
});

export default connect(mapStateToProps, null)(CardEquipment);
