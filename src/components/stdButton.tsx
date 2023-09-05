import {StyleSheet, Pressable, Text, TextStyle} from 'react-native';
import React from 'react';
import {screenNormalizer, theme} from '../utils/theme';

export default function StdButton(props: any) {
  return (
    <Pressable
      {...props}
      style={({pressed}) => [
        styles.pressable,
        props.style,
        {
          backgroundColor: pressed
            ? theme.colors.tint.tintTapState
            : theme.colors.tint.tint,
        },
      ]}>
      {props.children}
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
}

const styles: any = StyleSheet.create({
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: theme.spacing.s,
    marginHorizontal: theme.spacing.s,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.s,
    borderRadius: theme.spacing.s,
    minHeight: screenNormalizer.heightPixel(44),
  },
  text: {
    ...(theme.textVariants.bodyBold as TextStyle),
    color: theme.colors.base.base2,
  },
});
