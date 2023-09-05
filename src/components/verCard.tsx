import {StyleSheet, Text, TextStyle, View, Image} from 'react-native';
import React from 'react';
import {theme, screenNormalizer} from '../utils/theme';
import {Map} from './icons';
import Button from './button';
import CardTag from './cardTag';
import CardDateTag from './cardDateTag';

const VerCard = (props: any) => {
  return (
    <Button center={true}>
      <View style={styles.container}>
        <Image
          style={styles.eventLogo}
          source={{
            uri: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80',
          }}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{props.title}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.tagContainer}>
            <CardTag label={props.category} />
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
    margin: 10,
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
    ...(theme.textVariants.bodyBold as TextStyle),
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
    ...(theme.textVariants.bodyDefault as TextStyle),
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
