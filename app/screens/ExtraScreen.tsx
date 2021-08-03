import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';

import ButtonComponent from '../components/Button/ButtonComponent';
import ConfirmationWrapper from '../components/ConfirmationWrapper/ConfirmationWrapper';
import SwipePicker from '../components/SwipePicker/SwipePicker';

const ExtraScreen = () => {
  const [showSwipePicker, setShowSwipePicker] = useState(false);

  return (
    <View style={styles.container}>
      <ConfirmationWrapper
        onConfirm={() => Alert.alert('Your action was confirmed!')}>
        <ButtonComponent />
      </ConfirmationWrapper>

      <ButtonComponent onClick={() => setShowSwipePicker(true)} />
      <SwipePicker
        isVisible={showSwipePicker}
        hideModal={() => setShowSwipePicker(false)}
        swipeLeftAction={() => Alert.alert('You swiped left!')}
        swipeRightAction={() => Alert.alert('You swiped right!')}
      />
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
