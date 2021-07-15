import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {theme} from '../theme/theme';

import ButtonComponent from '../components/Button/ButtonComponent';

const width = Dimensions.get('window').width;
const heigth = Dimensions.get('window').height;

const SlideScreen = () => {
  return (
    <View style={styles.container}>
      <ButtonComponent title="Modal" style={styles.buttonTop} />
      <ButtonComponent title="Modal" style={styles.buttonLeft} />
      <ButtonComponent title="Modal" style={styles.buttonRight} />
      <ButtonComponent title="Modal" style={styles.buttonBottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonTop: {
    position: 'absolute',
    top: heigth / 5 - theme.buttons.standardHeight / 2,
    left: width / 2 - theme.buttons.standardWidth / 2,
  },
  buttonLeft: {
    position: 'absolute',
    top: heigth / 2 - theme.buttons.standardHeight / 2,
    left: width / 4 - theme.buttons.standardWidth / 2,
  },
  buttonRight: {
    position: 'absolute',
    top: heigth / 2 - theme.buttons.standardHeight / 2,
    right: width / 4 - theme.buttons.standardWidth / 2,
  },
  buttonBottom: {
    position: 'absolute',
    top: heigth - heigth / 5 - theme.buttons.standardHeight / 2,
    left: width / 2 - theme.buttons.standardWidth / 2,
  },
});

export default SlideScreen;
