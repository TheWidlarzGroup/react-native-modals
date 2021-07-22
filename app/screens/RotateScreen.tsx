import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {theme} from '../theme/theme';

import ButtonComponent from '../components/Button/ButtonComponent';
import ModalComponent from '../components/Modal/ModalComponent';

const width = Dimensions.get('window').width;
const heigth = Dimensions.get('window').height;

const RotateScreen = () => {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);
  const [showFourthModal, setShowFourthModal] = useState(false);

  return (
    <View style={styles.container}>
      <ButtonComponent
        style={styles.buttonTopLeft}
        onClick={() => setShowFirstModal(true)}
      />
      <ModalComponent
        isVisible={showFirstModal}
        onBackdropPress={() => setShowFirstModal(false)}
        onBackButtonPress={() => setShowFirstModal(false)}
        hideModal={() => setShowFirstModal(false)}
      />

      <ButtonComponent
        style={styles.buttonTopRight}
        onClick={() => setShowSecondModal(true)}
      />
      <ModalComponent
        isVisible={showSecondModal}
        onBackdropPress={() => setShowSecondModal(false)}
        onBackButtonPress={() => setShowSecondModal(false)}
        hideModal={() => setShowSecondModal(false)}
      />

      <ButtonComponent
        style={styles.buttonBottomLeft}
        onClick={() => setShowThirdModal(true)}
      />
      <ModalComponent
        isVisible={showThirdModal}
        onBackdropPress={() => setShowThirdModal(false)}
        onBackButtonPress={() => setShowThirdModal(false)}
        hideModal={() => setShowThirdModal(false)}
      />

      <ButtonComponent
        style={styles.buttonBottomRight}
        onClick={() => setShowFourthModal(true)}
      />
      <ModalComponent
        isVisible={showFourthModal}
        onBackdropPress={() => setShowFourthModal(false)}
        onBackButtonPress={() => setShowFourthModal(false)}
        hideModal={() => setShowFourthModal(false)}
      />
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
