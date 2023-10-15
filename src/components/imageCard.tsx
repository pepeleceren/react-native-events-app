import {StyleSheet, TextStyle, ImageBackground} from 'react-native';
import React from 'react';
import {theme, screenNormalizer} from '../utils/theme';
import Button from './button';
import {useNavigation} from '@react-navigation/native';

const ImageCard = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <Button
      onPress={() => {
        /* 1. Navigate to the Details route with params */
        if (props.isClickable === true) {
          navigation.navigate('Detail', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }
      }}
      center={true}>
      <ImageBackground
        source={props.imageUri}
        resizeMode="contain"
        imageStyle={styles.eventLogo}
        style={styles.container}
      />
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenNormalizer.heightPixel(200),
    width: screenNormalizer.widthPixel(320),
    flexDirection: 'column',
    paddingVertical: screenNormalizer.pixelSizeVertical(16),
    paddingHorizontal: screenNormalizer.pixelSizeHorizontal(16),
    backgroundColor: theme.colors.background.primary,
    borderRadius: screenNormalizer.widthPixel(16),
    justifyContent: 'space-between',
    marginVertical: 10,
    marginLeft: 16,
  },
  eventLogo: {
    borderRadius: screenNormalizer.widthPixel(10),
    borderWidth: screenNormalizer.sensHeightPixel(0.33),
    borderColor: theme.colors.seperetor,
  },
  titleContainer: {
    justifyContent: 'center',
  },
  titleText: {
    ...(theme.textVariants.footnoteBold as TextStyle),
    color: theme.colors.label.primary,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tagContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  locationText: {
    ...(theme.textVariants.subheadDefault as TextStyle),
    color: theme.colors.label.primary,
    marginLeft: screenNormalizer.pixelSizeHorizontal(2),
  },
  cardContainer: {
    position: 'absolute',
    bottom: screenNormalizer.pixelSizeVertical(54),
    right: screenNormalizer.pixelSizeHorizontal(23.5),
  },
});

export default ImageCard;
