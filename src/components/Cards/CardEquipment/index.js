import React from 'react';
import { TouchableHighlight, Image } from 'react-native';

// styles
import { Container, Details, DetailsLabels, Icon, IconContainer, InfoContainer } from './styles';
import { TextLight } from '../../../styles/fonts';

import { connect } from 'react-redux'

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
              <TextLight> {equipment.kwMonthly.toFixed(2)} KW </TextLight>
            </DetailsLabels>

            <DetailsLabels>
              <TextLight> Gasto mensal </TextLight>
              <TextLight> R$
              {
                  props.tarifaUsed === 'convencional' ?
                    (equipment.tarifaConvencional.monthlyExpenses).toFixed(2).replace('.', ',')
                    :
                    (equipment.tarifaBranca.monthlyExpenses).toFixed(2).replace('.', ',')
                }
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
