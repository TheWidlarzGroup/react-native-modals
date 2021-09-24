import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import ButtonComponent from '../components/Button/ButtonComponent';
// uncomment for modal implementation
// import ModalComponent from '../components/Modal/ModalComponent';

const width = Dimensions.get('window').width;
const heigth = Dimensions.get('window').height;

const RotateScreen = () => {
  // uncomment needed state for modal implementation and import useState from React
  // const [showFirstModal, setShowFirstModal] = useState(false);
  // const [showSecondModal, setShowSecondModal] = useState(false);
  // const [showThirdModal, setShowThirdModal] = useState(false);

  return (
    <View style={styles.container}>
      <ButtonComponent
      // onClick={() => setShowFirstModal(true)}
      />
      <ButtonComponent
      // onClick={() => setShowSecondModal(true)}
      />
      <ButtonComponent
      // onClick={() => setShowThirdModal(true)}
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
