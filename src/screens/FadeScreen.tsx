import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {theme} from '../theme/theme';

import ButtonComponent from '../components/Button/ButtonComponent';
// uncomment for modal implementation
// import ModalComponent from '../components/Modal/ModalComponent';

const width = Dimensions.get('window').width;
const heigth = Dimensions.get('window').height;

const FadeScreen = () => {
  // uncomment needed state for modal implementation and import useState from React
  // const [showFirstModal, setShowFirstModal] = useState(false);
  // const [showSecondModal, setShowSecondModal] = useState(false);
  // const [showThirdModal, setShowThirdModal] = useState(false);
  // const [showFourthModal, setShowFourthModal] = useState(false);

  return (
    <View style={styles.container}>
      <ButtonComponent
        // uncomment for modal implementation
        // onClick={() => setShowFirstModal(true)}
        style={styles.buttonTopLeft}
      />

      <ButtonComponent
        // uncomment for modal implementation
        // onClick={() => setShowSecondModal(true)}
        style={styles.buttonTopRight}
      />

      <ButtonComponent
        // uncomment for modal implementation
        // onClick={() => setShowThirdModal(true)}
        style={styles.buttonBottomLeft}
      />

      <ButtonComponent
        // uncomment for modal implementation
        // onClick={() => setShowFourthModal(true)}
        style={styles.buttonBottomRight}
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
  smallModal: {
    flex: 1 / 3,
  },
  bottomModal: {
    height: 150,
    width: width - 20,
    position: 'absolute',
    bottom: -10,
    left: -10,
    borderRadius: 10,
  },
});

export default FadeScreen;
