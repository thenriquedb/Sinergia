import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { connect } from 'react-redux'
import { Container, TarifaCard, Icon, ContinueConfigArea, Content, NextPageButton, styles } from './styles';
import { TextLight } from "../../../styles/fonts";
import Colors from "../../../styles/colors";

import SettingsModal from "../../../components/SettingsModal";
import RadioForm from "../../../components/RadioForm";

import { RadioContainer, Circle, CheckedCircle } from './styles';

const SetTarifa = (props) => {
  const radio_props = [
    { label: 'Tarifa Convencional', value: 'convencional' },
    { label: 'Tarifa Branca', value: 'branca' }
  ];

  const [tarifa, setTarifa] = useState(props.tarifaUsed)

  useEffect(() => {
    props.setTarifa(tarifa);
  }, [tarifa])

  const modalContent = () => {
    return (
      <>
        <RadioForm
          defaultValue={props.tarifaUsed}
          selectedItem={setTarifa}
          cancel={props.cancel}
          items={radio_props} />
      </>
    );
  }

  return (
    <SettingsModal

      title="Tarifa"
      cancel={props.cancel}
      isVisible={props.isVisible}
      content={modalContent()} />
  );
};

const mapStateToProps = state => ({
  tarifaUsed: state.houseReducer.tarifa,
});

const mapDispatchToProps = dispatch => {
  return {
    setTarifa: (tarifa) => dispatch({ type: 'SET_TARIFA', payload: { tarifa } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SetTarifa);


