import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import ButtonComponent from '../components/Button/ButtonComponent';
import ModalComponent from '../components/Modal/ModalComponent';

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
      />

      <ButtonComponent onClick={() => setShowSecondModal(true)} />
      <ModalComponent
        isVisible={showSecondModal}
        onBackdropPress={() => setShowSecondModal(false)}
        onBackButtonPress={() => setShowSecondModal(false)}
        hideModal={() => setShowSecondModal(false)}
      />

      <ButtonComponent onClick={() => setShowThirdModal(true)} />
      <ModalComponent
        isVisible={showThirdModal}
        onBackdropPress={() => setShowThirdModal(false)}
        onBackButtonPress={() => setShowThirdModal(false)}
        hideModal={() => setShowThirdModal(false)}
      />

      <ButtonComponent onClick={() => setShowFourthModal(true)} />
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
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default FadeScreen;
