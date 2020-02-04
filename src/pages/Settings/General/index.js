import React, { useState, useEffect } from 'react';
import { TouchableHighlight, ScrollView, Animated } from "react-native";

import {
  Container,
  SettingsItem,
  Icon,
  Title,
  Description,
  LabelContainer,
  IconContainer
} from './styles';
import { connect } from 'react-redux'

import SetTarifa from "../SetTarifa"
import ufs from "../../../utilities/estados";
import Alert from '../../../components/Alert';

const Settings = (props) => {
  const { navigation } = props;
  const [tarifaModal, setTarifaModal] = useState(false);

  const offsetY = new Animated.Value(40);

  useEffect(() => {
    Animated.spring(offsetY, {
      toValue: 0,
      velocity: 20,
      bounciness: 20,
      useNativeDriver: true
    }).start()
  }, []);

  return (
    <Container>
      <Animated.ScrollView
        style={{
          transform: [{
            translateY: offsetY
          }]
        }}>
        <TouchableHighlight underlayColor="#F6F6F6" onPress={() => setTarifaModal(!tarifaModal)}>
          <SettingsItem>
            <IconContainer>
              <Icon source={require('../../../assets/icons/others/graph-white.png')} />
            </IconContainer>

            <LabelContainer>
              <Title>Tarifa usada</Title>
              <Description color="#999">Tarifa {props.tarifaUsed}  </Description>
            </LabelContainer>

            <SetTarifa
              cancel={() => setTarifaModal(!tarifaModal)}
              isVisible={tarifaModal} />

          </SettingsItem>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="#F6F6F6" onPress={() => navigation.navigate('SettingsSelectDefaultValues')}>
          <SettingsItem>
            <IconContainer>
              <Icon source={require('../../../assets/icons/others/money-white.png')} />
            </IconContainer>

            <LabelContainer>
              <Title>Valor faturado do KWh </Title>
              <Description color="#999">Defina o valor faturado do KWh  </Description>
            </LabelContainer>
          </SettingsItem>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="#F6F6F6" onPress={() => navigation.navigate('SettingsSelectState')}>
          <SettingsItem>
            <IconContainer>
              <Icon source={require('../../../assets/icons/others/brazil.png')} />
            </IconContainer>

            <LabelContainer>
              <Title>Estado e Concessionaria</Title>
              <Description color="#999">{ufs.find(item => item.sigla === props.usedUf).name} | {props.dealershipUsed.Distribuidora}  </Description>
            </LabelContainer>
          </SettingsItem>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="#F6F6F6" onPress={() => navigation.navigate('SettingsAbout')}>
          <SettingsItem>
            <IconContainer>
              <Icon source={require('../../../assets/icons/others/info.png')} />
            </IconContainer>

            <LabelContainer>
              <Title>Sobre</Title>
              <Description color="#999">Desenvolvido em parceria com o IFMG Campus Formiga  </Description>
            </LabelContainer>
          </SettingsItem>
        </TouchableHighlight>
      </Animated.ScrollView>
    </Container>
  )
};

const mapStateToProps = state => ({
  tarifaUsed: state.houseReducer.tarifa,
  dealershipUsed: state.houseReducer.dealership,
  usedUf: state.houseReducer.uf
});

export default connect(mapStateToProps, null)(Settings);
