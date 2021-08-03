import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';

import ButtonComponent from '../components/Button/ButtonComponent';
import ConfirmationWrapper from '../components/ConfirmationWrapper/ConfirmationWrapper';

const ExtraScreen = () => {
  return (
    <View style={styles.container}>
      <ConfirmationWrapper
        onConfirm={() => Alert.alert('Your action was confirmed!')}>
        <ButtonComponent />
      </ConfirmationWrapper>

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
