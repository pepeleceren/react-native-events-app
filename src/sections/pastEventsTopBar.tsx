import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';
import {theme, screenNormalizer} from '../utils/theme';

const PastEventsTopBar = (_props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pastEventText}>Past Events</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenNormalizer.heightPixel(54),
    flexDirection: 'row',
    paddingVertical: screenNormalizer.pixelSizeVertical(16),
    paddingHorizontal: screenNormalizer.pixelSizeHorizontal(16),
    backgroundColor: theme.colors.background.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pastEventText: {
    ...(theme.textVariants.bodyBold as TextStyle),
    color: theme.colors.label.primary,
  },
});

export default PastEventsTopBar;
