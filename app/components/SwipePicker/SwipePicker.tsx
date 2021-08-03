import React, {useState} from 'react';
import {View, StyleSheet, StyleProp, ViewStyle, Text} from 'react-native';
import {theme} from '../../theme/theme';

import Modal, {ModalProps} from 'react-native-modal';

interface Props {
  isVisible: boolean;
  hideModal: () => void;
  swipeLeftAction: () => void;
  swipeRightAction: () => void;
  style?: StyleProp<ViewStyle>;
}

type SwipeDirection = 'left' | 'right';

const SwipePicker = ({
  isVisible,
  hideModal,
  swipeLeftAction,
  swipeRightAction,
  style,
}: Props & Partial<ModalProps>) => {
  const [swipeDirection, setSwipeDirection] = useState<SwipeDirection>('left');

  const handleSwipe = () => {
    hideModal();
    if (swipeDirection === 'left') {
      swipeLeftAction();
    } else {
      swipeRightAction();
    }
  };

  const handleSwipeDirectionSet = (positionX: number) => {
    if (positionX > 20 && swipeDirection === 'left') {
      setSwipeDirection('right');
    }
    if (positionX < 20 && swipeDirection === 'right') {
      setSwipeDirection('left');
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={hideModal}
      onBackButtonPress={hideModal}
      swipeDirection={['left', 'right']}
      onSwipeComplete={handleSwipe}
      animationIn="slideInDown"
      animationOut="slideOutUp"
      onLayout={event => {
        const positionX = event.nativeEvent.layout.x;
        handleSwipeDirectionSet(positionX);
      }}>
      <View style={[styles.modal, style]}>
        <Text style={styles.text}>Swipe left or right</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  modal: {
    flex: 1 / 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 30,
  },
  text: {
    fontSize: theme.fontSizes.standard,
  },
});

export default SwipePicker;
