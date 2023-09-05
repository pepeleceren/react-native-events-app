import {StyleSheet, Text, TextStyle} from 'react-native';
import React from 'react';
import {theme, screenNormalizer} from '../utils/theme';
import Button from './button';

const CardTag = (props: any) => {
  return (
    <Button style={styles.container}>
      <Text style={styles.textNormal}>{props.label}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenNormalizer.heightPixel(24),
    flexDirection: 'row',
    paddingHorizontal: screenNormalizer.pixelSizeHorizontal(6),
    backgroundColor: theme.colors.blue[6],
    borderRadius: screenNormalizer.widthPixel(16),
    marginHorizontal: screenNormalizer.pixelSizeHorizontal(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNormal: {
    ...(theme.textVariants.footnoteDefault as TextStyle),
    color: theme.colors.base.base2,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  textSmall: {
    ...(theme.textVariants.footnoteDefault as TextStyle),
    color: theme.colors.base.base2,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default CardTag;
