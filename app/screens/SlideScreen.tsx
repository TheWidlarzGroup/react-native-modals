import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {theme} from '../theme/theme';

import ButtonComponent from '../components/Button/ButtonComponent';
import ModalComponent from '../components/Modal/ModalComponent';

const width = Dimensions.get('window').width;
const heigth = Dimensions.get('window').height;

const SlideScreen = () => {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);
  const [showFourthModal, setShowFourthModal] = useState(false);

  return (
    <View style={styles.container}>
      <ButtonComponent
        style={styles.buttonTop}
        onClick={() => setShowFirstModal(true)}
      />
      <ModalComponent
        isVisible={showFirstModal}
        onBackdropPress={() => setShowFirstModal(false)}
        onBackButtonPress={() => setShowFirstModal(false)}
        swipeDirection="up"
        onSwipeComplete={() => setShowFirstModal(false)}
        hideModal={() => setShowFirstModal(false)}
        animationIn="slideInDown"
        animationOut="slideOutUp"
        style={styles.topModal}
      />

      <ButtonComponent
        style={styles.buttonLeft}
        onClick={() => setShowSecondModal(!showSecondModal)}
      />
      <ModalComponent
        isVisible={showSecondModal}
        onBackdropPress={() => setShowSecondModal(false)}
        onBackButtonPress={() => setShowSecondModal(false)}
        swipeDirection="left"
        onSwipeComplete={() => setShowSecondModal(false)}
        hideModal={() => setShowSecondModal(false)}
        animationIn="slideInLeft"
        animationInTiming={800}
        backdropTransitionInTiming={800}
        animationOut="slideOutLeft"
        animationOutTiming={800}
        backdropTransitionOutTiming={800}
      />

      <ButtonComponent
        style={styles.buttonRight}
        onClick={() => setShowThirdModal(!showThirdModal)}
      />
      <ModalComponent
        isVisible={showThirdModal}
        onBackdropPress={() => setShowThirdModal(false)}
        onBackButtonPress={() => setShowThirdModal(false)}
        swipeDirection="right"
        onSwipeComplete={() => setShowThirdModal(false)}
        hideModal={() => setShowThirdModal(false)}
        animationIn="bounceInRight"
        animationInTiming={500}
        animationOut="bounceOutRight"
        animationOutTiming={500}
        backdropOpacity={1}
        style={styles.rightModal}
      />

      <ButtonComponent
        style={styles.buttonBottom}
        onClick={() => setShowFourthModal(!showFourthModal)}
      />
      <ModalComponent
        isVisible={showFourthModal}
        onBackdropPress={() => setShowFourthModal(false)}
        onBackButtonPress={() => setShowFourthModal(false)}
        swipeDirection="down"
        onSwipeComplete={() => setShowFourthModal(false)}
        hideModal={() => setShowFourthModal(false)}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        style={styles.bottomModal}
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
