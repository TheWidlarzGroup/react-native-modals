import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle, Text} from 'react-native';
import {theme} from '../../theme/theme';

import Modal, {ModalProps} from 'react-native-modal';
import ButtonComponent from '../Button/ButtonComponent';

interface Props {
  hideModal: () => void;
  style?: StyleProp<ViewStyle>;
}

const ModalComponent = ({
  hideModal,
  style,
  children,
  ...props
}: Props & Partial<ModalProps>) => {
  return (
    <Modal {...props}>
      <View style={[styles.modal, style]}>
        <Text style={styles.text}>Place for your content</Text>
        <ButtonComponent
          title="Close"
          style={styles.closeButton}
          onClick={hideModal}
        />
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: theme.buttons.smallWidth,
    height: theme.buttons.smallHeight,
  },
  modal: {
    flex: 3 / 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 30,
  },
  text: {
    fontSize: theme.fontSizes.standard,
  },
});

export default ModalComponent;
