import React, { useState } from 'react';
import { connect } from 'react-redux';

import NavigationHeader from "../NavigationHeader";

import Collapse from '../../../../components/Collapse/';
import HeaderHidden from "./HeaderHidden";
import HeaderVisible from "./HeaderVisible";

const Header = (props) => {
  const {
    room,
    navigation,
    tarifaUsed,
    equipmentHigherConsumption,
    totalTarifaConvencional,
    totalTarifaBranca,
    kwMonthly,
    scrollOffset
  } = props;

  return (
    <>
      <NavigationHeader
        offset={scrollOffset}
        navigation={navigation}
        room={room}
        tarifaUsed={tarifaUsed}
      />

      <Collapse
        offset={scrollOffset}
        visible={
          <HeaderVisible
            offset={scrollOffset}
            totalTarifaBranca={totalTarifaBranca}
            totalTarifaConvencional={totalTarifaConvencional}
            tarifaUsed={tarifaUsed}
            kwMonthly={kwMonthly}
            room={room}
            equipmentHigherConsumption={equipmentHigherConsumption}
          />
        }
        hidden={
          <HeaderHidden
            offset={scrollOffset}
            totalTarifaBranca={totalTarifaBranca}
            totalTarifaConvencional={totalTarifaConvencional}
          />
        }
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  tarifaUsed: state.houseReducer.tarifa,
});


export default connect(mapStateToProps, null)(Header);
