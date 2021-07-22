import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import ButtonComponent from '../components/Button/ButtonComponent';
import ModalComponent from '../components/Modal/ModalComponent';

const width = Dimensions.get('window').width;

const FadeScreen = () => {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);
  const [showFourthModal, setShowFourthModal] = useState(false);

  return (
    <View style={styles.container}>
      <ButtonComponent onClick={() => setShowFirstModal(true)} />
      <ModalComponent
        isVisible={showFirstModal}
        onBackdropPress={() => setShowFirstModal(false)}
        onBackButtonPress={() => setShowFirstModal(false)}
        hideModal={() => setShowFirstModal(false)}
        animationIn="fadeInDown"
        animationOut="fadeOutUp"
      />

      <ButtonComponent onClick={() => setShowSecondModal(true)} />
      <ModalComponent
        isVisible={showSecondModal}
        onBackdropPress={() => setShowSecondModal(false)}
        onBackButtonPress={() => setShowSecondModal(false)}
        hideModal={() => setShowSecondModal(false)}
        animationIn="pulse"
        animationOut="fadeOut"
        style={styles.smallModal}
      />

      <ButtonComponent onClick={() => setShowThirdModal(true)} />
      <ModalComponent
        isVisible={showThirdModal}
        onBackdropPress={() => setShowThirdModal(false)}
        onBackButtonPress={() => setShowThirdModal(false)}
        hideModal={() => setShowThirdModal(false)}
        animationIn="tada"
        animationOut="fadeOut"
        backdropOpacity={1}
      />

      <ButtonComponent onClick={() => setShowFourthModal(true)} />
      <ModalComponent
        isVisible={showFourthModal}
        onBackdropPress={() => setShowFourthModal(false)}
        onBackButtonPress={() => setShowFourthModal(false)}
        hideModal={() => setShowFourthModal(false)}
        animationIn="shake"
        animationInTiming={500}
        animationOut="fadeOut"
        style={styles.bottomModal}
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
