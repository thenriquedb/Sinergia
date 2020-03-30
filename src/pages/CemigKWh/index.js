import React from 'react';

import { WebView } from 'react-native-webview';

function CemigKWh({ navigation }) {
  const link = navigation.getParam('link');

  return <WebView source={{ uri: link }} style={{ flex: 1 }} />;
}

export default CemigKWh;
