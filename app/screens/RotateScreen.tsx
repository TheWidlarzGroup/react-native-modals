import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {theme} from '../theme/theme';

import ButtonComponent from '../components/Button/ButtonComponent';

const width = Dimensions.get('window').width;
const heigth = Dimensions.get('window').height;

const RotateScreen = () => {
  return (
    <View style={styles.container}>
      <ButtonComponent title="Modal" style={styles.buttonTopLeft} />
      <ButtonComponent title="Modal" style={styles.buttonTopRight} />
      <ButtonComponent title="Modal" style={styles.buttonBottomLeft} />
      <ButtonComponent title="Modal" style={styles.buttonBottomRight} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonTopLeft: {
    position: 'absolute',
    top: heigth / 3 - theme.buttons.standardHeight / 2,
    left: width / 4 - theme.buttons.standardWidth / 2,
  },
  buttonTopRight: {
    position: 'absolute',
    top: heigth / 3 - theme.buttons.standardHeight / 2,
    right: width / 4 - theme.buttons.standardWidth / 2,
  },
  buttonBottomLeft: {
    position: 'absolute',
    top: heigth - heigth / 3 - theme.buttons.standardHeight / 2,
    left: width / 4 - theme.buttons.standardWidth / 2,
  },
  buttonBottomRight: {
    position: 'absolute',
    top: heigth - heigth / 3 - theme.buttons.standardHeight / 2,
    right: width / 4 - theme.buttons.standardWidth / 2,
  },
});

export default RotateScreen;
