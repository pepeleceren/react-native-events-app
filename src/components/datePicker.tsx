import {StyleSheet, Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import {screenNormalizer, theme} from '../utils/theme';
import {Date as DateIcon} from './icons';
import DatePicker from 'react-native-date-picker';

const DatePick = (props: any) => {
  const [isFocused, setFocus] = React.useState(false);
  const [open, setOpen] = useState(false);

  const date = props.date;
  const setDate = props.setDate;

  function onFocus() {
    setFocus(true);
    setOpen(true);
  }

  return (
    <Pressable
      style={[
        styles.container,
        props.style,
        isFocused && styles.inputContainerActive,
      ]}
      onPress={onFocus}>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={e => {
          setOpen(false);
          setFocus(false);
          setDate(e);
        }}
        onCancel={() => {
          setOpen(false);
          setFocus(false);
        }}
      />
      <Text style={[styles.input, isFocused && styles.inputActive]}>
        {date.toISOString().split('T')[0]}
      </Text>
      <DateIcon
        width={screenNormalizer.widthPixel(20)}
        height={screenNormalizer.heightPixel(20)}
        fill={isFocused ? theme.colors.tint.tint : theme.colors.label.tertiary}
      />
    </Pressable>
  );
};

export default DatePick;

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
