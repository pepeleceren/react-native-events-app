import {StyleSheet, View, TextInput as Input, Keyboard} from 'react-native';
import React, {useEffect} from 'react';
import {screenNormalizer, theme} from '../utils/theme';
import {Closecircle, Search} from './icons';
import Button from './button';

const TextInput = (props: any) => {
  // const [text, setText] = React.useState('');
  const [isTextChanged, setTextChanged] = React.useState(false);
  const [isFocused, setFocus] = React.useState(false);

  const text = props.searchText;
  const setText = props.setSearchText;

  useEffect(() => {
    if (text === '') {
      setTextChanged(false);
      setFocus(false);
    } else {
      setTextChanged(true);
      setFocus(true);
    }
  }, [text]);

  function onChangeText(e: any) {
    setText(e);
  }

  function onCancel() {
    setText('');
    setTextChanged(false);
    setFocus(false);
    Keyboard.dismiss();
  }

  return (
    <View style={[styles.container, isFocused && styles.inputContainerActive]}>
      <View style={styles.searchContainer}>
        <Search
          width={screenNormalizer.widthPixel(21)}
          height={screenNormalizer.heightPixel(22)}
          fill={
            isFocused ? theme.colors.label.primary : theme.colors.label.tertiary
          }
        />
      </View>
      <Input
        style={[styles.input, isFocused && styles.inputActive]}
        onChangeText={onChangeText}
        value={text}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder="Search"
        placeholderTextColor={theme.colors.label.tertiary}
      />
      {isTextChanged && (
        <Button onPress={onCancel} style={styles.cancelContainer}>
          <Closecircle
            width={screenNormalizer.widthPixel(20)}
            height={screenNormalizer.heightPixel(20)}
            fill={
              isFocused
                ? theme.colors.label.primary
                : theme.colors.label.tertiary
            }
          />
        </Button>
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: screenNormalizer.heightPixel(36),
    width: screenNormalizer.heightPixel(221),
    borderWidth: screenNormalizer.sensHeightPixel(0.5),
    borderColor: theme.colors.seperetor,
    paddingHorizontal: screenNormalizer.pixelSizeHorizontal(8),
    borderRadius: screenNormalizer.widthPixel(10),
    marginHorizontal: screenNormalizer.pixelSizeHorizontal(8),
  },
  input: {
    flex: 8,
    marginLeft: screenNormalizer.pixelSizeHorizontal(12),
    color: theme.colors.label.tertiary,
  },
  searchContainer: {
    flex: 1,
  },
  inputContainerActive: {
    borderWidth: screenNormalizer.sensHeightPixel(2),
    borderColor: theme.colors.tint.tint,
    color: theme.colors.label.primary,
  },
  inputActive: {
    color: theme.colors.label.primary,
  },
  cancelContainer: {
    flex: 1,
  },
});
