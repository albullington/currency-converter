import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4f6d7a',
  $white: 'white',
  $border: '#e2e2e2',
  $inputText: '#797979',
})

export default () => <Home />;