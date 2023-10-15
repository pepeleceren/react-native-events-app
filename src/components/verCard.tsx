import {StyleSheet, Text, TextStyle, View, Image} from 'react-native';
import React from 'react';
import {theme, screenNormalizer} from '../utils/theme';
import {Map} from './icons';
import Button from './button';
import CardTag from './cardTag';
import CardDateTag from './cardDateTag';
import {useNavigation} from '@react-navigation/native';

const VerCard = (props: any) => {
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
      <View style={styles.container}>
        <Image style={styles.eventLogo} source={props.imageUri} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{props.title}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.tagContainer}>
            <CardTag isCategory={true} label={props.category} />
            <CardTag label={props.time} />
          </View>
          <View style={styles.locationContainer}>
            <Map
              width={screenNormalizer.widthPixel(15)}
              height={screenNormalizer.heightPixel(15)}
              fill={theme.colors.label.primary}
            />
            <Text style={styles.locationText}>{props.city}</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <CardDateTag day={props.day} month={props.month} />
        </View>
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenNormalizer.heightPixel(249),
    width: screenNormalizer.widthPixel(294),
    flexDirection: 'column',
    paddingVertical: screenNormalizer.pixelSizeVertical(16),
    paddingHorizontal: screenNormalizer.pixelSizeHorizontal(16),
    backgroundColor: theme.colors.background.primary,
    borderRadius: screenNormalizer.widthPixel(16),
    borderWidth: screenNormalizer.sensHeightPixel(0.33),
    borderColor: theme.colors.seperetor,
    justifyContent: 'space-between',
    marginVertical: 10,
    marginLeft: 16,
  },
  eventLogo: {
    width: screenNormalizer.widthPixel(262),
    height: screenNormalizer.heightPixel(149),
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

export default VerCard;
