import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ViewStyle,
  Text,
  StyleProp,
} from 'react-native';
import {theme} from '../../theme/theme';

interface Props {
  title: string;
  style?: StyleProp<ViewStyle>;
  onClick?: () => void;
}

const ButtonComponent = ({title, style, onClick}: Props) => {
  return (
    <TouchableOpacity onPress={onClick} style={[styles.button, style]}>
      <View>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: theme.buttons.standardWidth,
    height: theme.buttons.standardHeight,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: theme.fontSizes.standard,
  },
});

export default ButtonComponent;
