import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';
import {theme, screenNormalizer} from '../utils/theme';
import {Arrowleft, Share} from '../components/icons';
import Button from '../components/button';
import TextInput from '../components/textInput';

const DetailTopBar = (props: any) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => props.navigation.goBack()}
        style={styles.containerLeft}>
        <Arrowleft
          width={screenNormalizer.widthPixel(8)}
          height={screenNormalizer.heightPixel(20)}
          fill={theme.colors.tint.tint}
        />
        <Text style={styles.backText}>Back</Text>
      </Button>
      <View style={styles.containerCenter}>
        <Text style={styles.hiText}>Event Detail</Text>
      </View>
      <View style={styles.containerRight}>
        <Button style={styles.filterContainer} onPress={props.onPressModal}>
          <Share
            width={screenNormalizer.widthPixel(20)}
            height={screenNormalizer.heightPixel(20)}
            fill={theme.colors.tint.tint}
          />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenNormalizer.heightPixel(68),
    flexDirection: 'row',
    paddingVertical: screenNormalizer.pixelSizeVertical(16),
    paddingHorizontal: screenNormalizer.pixelSizeHorizontal(16),
    backgroundColor: theme.colors.background.primary,
    justifyContent: 'space-between',
  },
  containerLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  containerCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  hiText: {
    ...(theme.textVariants.bodyBold as TextStyle),
    color: theme.colors.label.primary,
  },
  footnoteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    ...(theme.textVariants.bodyDefault as TextStyle),
    color: theme.colors.tint.tint,
    marginLeft: screenNormalizer.pixelSizeHorizontal(8),
  },
  userLogoContainer: {},
  userLogo: {
    width: screenNormalizer.widthPixel(32),
    height: screenNormalizer.heightPixel(32),
    borderRadius: screenNormalizer.widthPixel(32),
  },
  filterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailTopBar;
