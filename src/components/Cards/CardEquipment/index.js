import React, { useState } from 'react';
import { TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'
import Swipeable from "react-native-gesture-handler/Swipeable";

// styles
import { Container, Details, DetailsLabels, Icon, IconContainer, InfoContainer } from './styles';
import { TextLight } from '../../../styles/fonts';

import HiddenCard from "../HiddenCard";
import Alert from "../../Alert";

import { moneyMask, kwMask } from "../../../util/masks";

const CardEquipment = props => {
  const { equipment, idRoom, navigation } = props;
  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const deleteMessage = `Você deseja excluir o equipamento ${equipment.name}? Esta ação não poderá ser desfeita futuramente.`

  return (
    <Swipeable
      renderRightActions={HiddenCard}
      onSwipeableRightOpen={() => setmodalIsVisible(!modalIsVisible)}
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

      <Alert
        title={"Deletar"}
        message={deleteMessage}
        confirm={() => {
          props.deleteEquipment(idRoom, equipment.id);
          setmodalIsVisible(!modalIsVisible);
        }}
        cancel={() => setmodalIsVisible(!modalIsVisible)}
        isVisible={modalIsVisible} />
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
