import React from 'react';
import {View, StyleSheet} from 'react-native';

import ButtonComponent from '../components/Button/ButtonComponent';

const ExtraScreen = () => {
  return (
    <View style={styles.container}>
      <ButtonComponent />
      <ButtonComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default ExtraScreen;
