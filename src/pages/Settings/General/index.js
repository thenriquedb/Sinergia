import React, { useState } from 'react';
import { TouchableHighlight, ScrollView } from "react-native";

import { Container, SettingsItem, Icon, Title, Description, LabelContainer, IconContainer } from './styles';
import { connect } from 'react-redux'


import SetTarifa from "../SetTarifa"
import ufs from "../../../utilities/estados";

const Settings = (props) => {
  const { navigation } = props;
  const [tarifaModal, setTarifaModal] = useState(false);

  console.log("props.dealership: ", props.dealershipUsed)

  return (
    <Container>
      <ScrollView>
        <TouchableHighlight underlayColor="#F6F6F6" onPress={() => setTarifaModal(!tarifaModal)}>
          <SettingsItem>
            <IconContainer>
              <Icon source={require('../../../assets/icons/others/graph-white.png')} />
            </IconContainer>

            <LabelContainer>
              <Title> Tarifa usada</Title>
              <Description color="#999"> Tarifa {props.tarifaUsed}  </Description>
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
              <Description color="#999">Mauris consequat ac mi in porta. Duis hendrerit nibh vel sem pellentesque mollis.  </Description>
            </LabelContainer>
          </SettingsItem>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="#F6F6F6" onPress={() => navigation.navigate('SettingsSelectState')}>
          <SettingsItem>
            <IconContainer>
              <Icon source={require('../../../assets/icons/others/brazil.png')} />
            </IconContainer>

            <LabelContainer>
              <Title> Estado e Concessionaria</Title>
              <Description color="#999"> {ufs.find(item => item.sigla === props.usedUf).name} | {props.dealershipUsed.Distribuidora}  </Description>
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
              <Description color="#999">Mauris consequat ac mi in porta. Duis hendrerit nibh vel sem pellentesque mollis.  </Description>
            </LabelContainer>
          </SettingsItem>
        </TouchableHighlight>
      </ScrollView>
    </Container>
  )
};

const mapStateToProps = state => ({
  tarifaUsed: state.houseReducer.tarifa,
  dealershipUsed: state.houseReducer.dealership,
  usedUf: state.houseReducer.uf
});

export default connect(mapStateToProps, null)(Settings);
