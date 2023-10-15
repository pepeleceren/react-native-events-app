import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';
import {screenNormalizer, theme} from '../utils/theme';

const DetailDescriptionCard = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.title}</Text>
      <Text style={styles.descriptionText}>{props.description}</Text>
    </View>
  );
};

export default DetailDescriptionCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background.primary,
    paddingVertical: screenNormalizer.pixelSizeVertical(16),
    paddingHorizontal: screenNormalizer.pixelSizeHorizontal(16),
    marginVertical: screenNormalizer.pixelSizeVertical(16),
    marginHorizontal: screenNormalizer.pixelSizeHorizontal(16),
    borderRadius: screenNormalizer.widthPixel(16),
  },
  titleText: {
    ...(theme.textVariants.bodyBold as TextStyle),
    color: theme.colors.label.primary,
  },
  descriptionText: {
    ...(theme.textVariants.footnoteDefault as TextStyle),
    color: theme.colors.label.primary,
  },
});
