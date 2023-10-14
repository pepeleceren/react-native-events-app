import {StyleSheet, Text, TextStyle, View, Image} from 'react-native';
import React from 'react';
import {theme, screenNormalizer} from '../utils/theme';
import {Map} from './icons';
import Button from './button';
import CardTag from './cardTag';
import CardDateTag from './cardDateTag';
import {useNavigation} from '@react-navigation/native';

const HorCard = (props: any) => {
  const navigation: any = useNavigation();
  var title;
  if (props.title.length >= 20) {
    title = props.title.slice(0, 19).concat('...');
  } else {
    title = props.title;
  }
  return (
    <Button
      onPress={() => {
        navigation.navigate('Detail', {
          itemId: 86,
          otherParam: 'anything you want here',
        });
      }}
      center={true}>
      <View style={styles.container}>
        <Image style={styles.eventLogo} source={props.imageUri} />
        <View style={styles.sideContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.tagContainer}>
              <CardTag isCategory={true} label={props.category} />
              <CardTag label={props.time} />
            </View>
            <View style={styles.locationContainer}>
              <Map
                width={screenNormalizer.widthPixel(14)}
                height={screenNormalizer.heightPixel(14)}
                fill={theme.colors.label.primary}
              />
              <Text style={styles.locationText}>{props.city}</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <CardDateTag day={props.day} month={props.month} />
          </View>
        </View>
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenNormalizer.heightPixel(87),
    width: screenNormalizer.widthPixel(343),
    flexDirection: 'row',
    paddingVertical: screenNormalizer.pixelSizeVertical(16),
    paddingHorizontal: screenNormalizer.pixelSizeHorizontal(16),
    backgroundColor: theme.colors.background.primary,
    borderRadius: screenNormalizer.widthPixel(16),
    borderWidth: screenNormalizer.sensHeightPixel(0.33),
    borderColor: theme.colors.seperetor,
    marginTop: screenNormalizer.pixelSizeVertical(22),
  },
  eventLogo: {
    width: screenNormalizer.widthPixel(62),
    height: screenNormalizer.heightPixel(55),
    borderRadius: screenNormalizer.widthPixel(10),
    borderWidth: screenNormalizer.sensHeightPixel(0.33),
    borderColor: theme.colors.seperetor,
  },
  sideContainer: {
    justifyContent: 'space-between',
    marginLeft: screenNormalizer.pixelSizeHorizontal(20),
    width: screenNormalizer.widthPixel(220),
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
    bottom: screenNormalizer.pixelSizeVertical(24),
    right: screenNormalizer.pixelSizeHorizontal(0),
  },
});

export default HorCard;
