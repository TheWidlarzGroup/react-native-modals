import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigation from './src/navigation/BottomTabNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default App;
