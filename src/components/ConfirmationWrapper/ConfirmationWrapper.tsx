import React, {ReactElement, JSXElementConstructor, useState} from 'react';
import {View, StyleSheet, StyleProp, ViewStyle, Text} from 'react-native';
import {theme} from '../../theme/theme';

import Modal, {ModalProps} from 'react-native-modal';
import ButtonComponent from '../Button/ButtonComponent';

interface Props {
  onConfirm: () => void;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  style?: StyleProp<ViewStyle>;
}

const ConfirmationWrapper = ({
  onConfirm,
  style,
  children,
}: Props & Partial<ModalProps>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setIsModalOpen(false);
  };

  return (
    <View>
      <Modal
        isVisible={isModalOpen}
        onBackdropPress={() => setIsModalOpen(false)}
        onBackButtonPress={() => setIsModalOpen(false)}
        swipeDirection="up"
        onSwipeComplete={() => setIsModalOpen(false)}
        animationIn="slideInDown"
        animationOut="slideOutUp">
        <View style={[styles.modal, style]}>
          <Text style={styles.text}>Are you sure?</Text>
          <View style={styles.buttonsContainer}>
            <ButtonComponent title="Confirm" onClick={handleConfirm} />
            <ButtonComponent
              title="Cancel"
              onClick={() => setIsModalOpen(false)}
            />
          </View>
        </View>
      </Modal>

      {React.cloneElement(children, {
        onClick: () => setIsModalOpen(true),
      })}
    </View>
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
    marginBottom: 30,
    fontSize: theme.fontSizes.standard,
  },
});

export default ConfirmationWrapper;
