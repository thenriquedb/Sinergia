import React, { useState } from 'react';
import { TouchableOpacity, ToastAndroid } from 'react-native';
import { connect } from 'react-redux'

// styles
import {
  Container,
  TarifaCard,
  Icon,
  ContinueConfigArea,
  Content,
  NextPageButton,
  styles
} from './styles';
import { Text, TextLight } from "../../../styles/fonts";
import Colors from "../../../styles/colors";

function SelectTarifa(props) {
  const [tarifa, setTarifa] = useState('')

  function toggleNext() {
    if (tarifa) {
      props.setTarifa(tarifa);
      tarifa === 'convencional' ? props.navigation.navigate('SetDefaultKwValue') : props.navigation.navigate('SetDefaultKwValueTarifaBranca');
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'É necessário selecionar uma tarifa para continuar',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
  }

  return (
    <Container>
      <TextLight textAlign='center' fontSize='h4'> Qual é o seu tipo de tarifa?  </TextLight>

      <Content>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setTarifa('convencional')}>

          <TarifaCard style={tarifa === 'convencional' && styles.SelectedTarifaCard}>
            <Icon
              resizeMode={"contain"}
              source={require("../../../assets/icons/others/tarifa-convencional.png")}
            />

            <TextLight
              color={tarifa === 'convencional' ? Colors.primary : ''}
              textAlign={'center'}
              fontSize={'h5'}>
              Tarifa convencional
            </TextLight>
          </TarifaCard>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setTarifa('branca')}>

          <TarifaCard style={tarifa === 'branca' && styles.SelectedTarifaCard}>
            <Icon
              resizeMode={"contain"}
              source={require("../../../assets/icons/others/tarifa-branca.png")}
            />

            <TextLight
              fontSize={'h5'}
              color={tarifa === 'branca' && Colors.primary}
              textAlign={'center'}>
              Tarifa {'\n'}branca
            </TextLight>
          </TarifaCard>
        </TouchableOpacity>
      </Content>

      <ContinueConfigArea>
        <NextPageButton
          style={{ backgroundColor: !tarifa ? Colors.lightGray1 : Colors.primary }}
          onPress={() => toggleNext()}>
          <Text fontSize='h6' color={'#fff'}> Continuar </Text>
        </NextPageButton>
      </ContinueConfigArea>
    </Container>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    setTarifa: (tarifa) => dispatch({ type: 'SET_TARIFA', payload: { tarifa } }),
  };
};

export default connect(null, mapDispatchToProps)(SelectTarifa);
