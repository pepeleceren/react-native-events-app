import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';

import {screenNormalizer, theme} from '../utils/theme';

const ListLabel = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.label}</Text>
    </View>
  );
};

export default ListLabel;

const styles = StyleSheet.create({
  container: {
    paddingTop: screenNormalizer.pixelSizeVertical(8),
    paddingHorizontal: screenNormalizer.pixelSizeHorizontal(16),
  },
  text: {
    ...(theme.textVariants.title3 as TextStyle),
    color: theme.colors.label.primary,
  },
});
