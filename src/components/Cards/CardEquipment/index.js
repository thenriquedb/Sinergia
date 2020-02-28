import React from 'react';
import { TouchableHighlight, Alert } from 'react-native';
import Swipeable from "react-native-gesture-handler/Swipeable";
import { connect } from 'react-redux'

import HiddenCard from "../HiddenCard";

// styles
import { Container, Details, DetailsLabels, Icon, IconContainer, InfoContainer } from './styles';
import { TextLight } from '../../../styles/fonts';

import { moneyMask, kwMask } from "../../../util/masks";

function CardEquipment(props) {
  const { equipment, idRoom, navigation } = props;

  function deleteEquipment() {
    Alert.alert(
      'Excluir',
      `Você deseja excluir o equipamento "${equipment.name}"? Esta ação não poderá ser desfeita futuramente.`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        { text: 'Confirmar', onPress: () => props.deleteEquipment(idRoom, equipment.id) },
      ],
      { cancelable: true },
    );
  }


  return (
    <Swipeable
      renderRightActions={HiddenCard}
      onSwipeableRightOpen={() => deleteEquipment()}
    >
      <TouchableHighlight
        onPress={() => navigation.navigate('Equipment', {
          equipment: equipment,
          action: 'edit',
          idRoom,
        })}
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
                <TextLight> KWh Mensal </TextLight>
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
    </Swipeable>
  );
};


const mapStateToProps = state => ({
  tarifaUsed: state.houseReducer.tarifa
});

const mapDispatchToProps = dispatch => {
  return {
    deleteEquipment: (idRoom, idEquipment, type) => dispatch({ type: 'DELETE_EQUIPMENT', payload: { idRoom, idEquipment } }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CardEquipment);
