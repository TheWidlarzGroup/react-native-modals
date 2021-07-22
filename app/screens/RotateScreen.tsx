import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import ButtonComponent from '../components/Button/ButtonComponent';
import ModalComponent from '../components/Modal/ModalComponent';

const width = Dimensions.get('window').width;
const heigth = Dimensions.get('window').height;

const RotateScreen = () => {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);

  return (
    <View style={styles.container}>
      <ButtonComponent onClick={() => setShowFirstModal(true)} />
      <ModalComponent
        isVisible={showFirstModal}
        onBackdropPress={() => setShowFirstModal(false)}
        onBackButtonPress={() => setShowFirstModal(false)}
        hideModal={() => setShowFirstModal(false)}
        animationIn="rotate"
        animationInTiming={500}
        animationOut="slideOutRight"
        backdropOpacity={0.8}
        backdropTransitionOutTiming={500}
      />

      <ButtonComponent onClick={() => setShowSecondModal(true)} />
      <ModalComponent
        isVisible={showSecondModal}
        hideCloseButton
        onBackdropPress={() => setShowSecondModal(false)}
        onBackButtonPress={() => setShowSecondModal(false)}
        hideModal={() => setShowSecondModal(false)}
        animationIn="rotate"
        animationInTiming={600}
        animationOut="slideOutDown"
        backdropTransitionInTiming={600}
        backdropOpacity={0.7}
        style={styles.circleBottomRightModal}
      />

      <ButtonComponent onClick={() => setShowThirdModal(true)} />
      <ModalComponent
        isVisible={showThirdModal}
        hideCloseButton
        onBackdropPress={() => setShowThirdModal(false)}
        onBackButtonPress={() => setShowThirdModal(false)}
        hideModal={() => setShowThirdModal(false)}
        animationIn="rotate"
        animationInTiming={500}
        animationOut="rotate"
        animationOutTiming={500}
        style={styles.circleCenteredModal}
        backdropOpacity={1}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
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
  circleCenteredModal: {
    position: 'absolute',
    top: heigth / 2 - 169,
    left: width / 2 - 169,
    width: 300,
    height: 300,
    borderRadius: 200,
  },
  circleBottomRightModal: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 200,
    height: 200,
    borderRadius: 200,
  },
});

export default RotateScreen;
