import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {theme} from '../theme/theme';

import ButtonComponent from '../components/Button/ButtonComponent';
// uncomment for modal implementation
// import ModalComponent from '../components/Modal/ModalComponent';

const width = Dimensions.get('window').width;
const heigth = Dimensions.get('window').height;

const SlideScreen = () => {
  // uncomment needed state for modal implementation and import useState from React
  // const [showFirstModal, setShowFirstModal] = useState(false);
  // const [showSecondModal, setShowSecondModal] = useState(false);
  // const [showThirdModal, setShowThirdModal] = useState(false);
  // const [showFourthModal, setShowFourthModal] = useState(false);

  return (
    <View style={styles.container}>
      <ButtonComponent
        style={styles.buttonTop}
        // uncomment for modal implementation
        // onClick={() => setShowFirstModal(true)}
      />
      <ButtonComponent
        style={styles.buttonLeft}
        // uncomment for modal implementation
        // onClick={() => setShowSecondModal(true)}
      />
      <ButtonComponent
        style={styles.buttonRight}
        // uncomment for modal implementation
        // onClick={() => setShowThirdModal(true)}
      />
      <ButtonComponent
        style={styles.buttonBottom}
        // uncomment for modal implementation
        // onClick={() => setShowFourthModal(true)}
      />
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
  topModal: {
    flex: 1 / 3,
  },
  rightModal: {
    flex: 1,
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

export default SlideScreen;
