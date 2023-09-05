import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';
import {theme, screenNormalizer} from '../utils/theme';

const CardDateTag = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textNormal}>{props.day}</Text>
      <Text style={styles.textNormal}>{props.month}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: screenNormalizer.pixelSizeHorizontal(14),
    paddingVertical: screenNormalizer.pixelSizeVertical(8),
    backgroundColor: theme.colors.blue[6],
    borderRadius: screenNormalizer.widthPixel(8),
    marginHorizontal: screenNormalizer.pixelSizeHorizontal(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNormal: {
    ...(theme.textVariants.bodyBold as TextStyle),
    color: theme.colors.base.base2,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default CardDateTag;
