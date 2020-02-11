import React, { useEffect, useState } from 'react';
import { connect } from 'redux';

// const newEquipment = {
//   tarifaConvencional: {
//     monthlyExpenses: tarifaConvencional,
//   },
//   tarifaBranca: {
//     monthlyExpenses: tarifaBranca,
//   },
// };

function reCalcularValores() {
  return (
    null
  );
}

const mapStateToProps = (state, ownProps) => ({
  rooms: state.houseReducer.rooms
});

const mapDispatchToProps = dispatch => {
  return {
    setRoomMonthlyExpenses: (idRoom, totalTarifaConvencional, totalTarifaBranca) =>
      dispatch({
        type: 'SET_ROOM_MONTHLY_EXPENSES',
        payload: { idRoom, totalTarifaConvencional, totalTarifaBranca },
      }),
  };
};


export default connect(mapStateToProps, mapDispatchToProps);
