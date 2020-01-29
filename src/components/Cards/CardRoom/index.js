import React from 'react';
import { TouchableHighlight } from 'react-native';

// styles
import { Container, TotalPrice, Details } from './styles';
import { TextLight, TextBold } from '../../../styles/fonts';

import { connect } from 'react-redux'

import { moneyMask, kwMask } from "../../../util/masks";

const CardRoom = props => {
  const { room } = props;

  return (
    <TouchableHighlight
      onPress={() => props.toggleRoomCard(room)}
      style={{ marginBottom: 15 }}
      underlayColor="#FDFDFD">
      <Container>
        <Details>
          <TextLight fontSize="h4"> {room.name} </TextLight>
          <TextLight fontSize="h5">
            {' '}
            {room.equipments.length} equipamentos
          </TextLight>
          <TextLight fontSize="h5"> {kwMask(room.totalKw)} </TextLight>
        </Details>

        <TotalPrice>
          <TextLight fontSize="h5"> Valor total</TextLight>
          <TextBold fontSize="h3">
            {props.tarifaUsed === "convencional" ?
              moneyMask(room.tarifaConvencional.monthlyExpenses) :
              moneyMask(room.tarifaBranca.monthlyExpenses)
            }
          </TextBold>
        </TotalPrice>
      </Container>
    </TouchableHighlight>
  );
};

const mapStateToProps = state => ({
  tarifaUsed: state.houseReducer.tarifa
});


export default connect(mapStateToProps, null)(CardRoom);
