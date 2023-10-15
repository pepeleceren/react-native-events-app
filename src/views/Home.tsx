/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';

import HomeTopBar from '../sections/homeTopBar';
import VerCard from '../components/verCard';
import HorCard from '../components/horCard';
import Carousel from '../components/carousel';
import ListLabel from '../components/listLabel';
import {screenNormalizer, theme} from '../utils/theme';
import {Context} from '../App';

function HomeScreen({navigation}: any) {
  const context: any = useContext(Context);
  let data = context.lastEventsList;
  let isLoaded = context.loadingLast;
  return (
    <View>
      <HomeTopBar navigation={navigation} />
      {isLoaded && (
        <Carousel
          headerComponent={
            <View>
              <ListLabel label="Popular Events" />
              <Carousel
                data={data}
                renderItem={({item, _index}: any) => {
                  return (
                    <VerCard
                      imageUri={
                        item.images.length === 0
                          ? require('../images/notfound.jpg')
                          : {uri: item.images[0].upload}
                      }
                      isClickable={true}
                      id={item.id}
                      title={item.title}
                      category={item.category_name}
                      time={item.time}
                      city={item.city}
                      day={item.eventDay}
                      month={item.eventMonth}
                    />
                  );
                }}
              />
              <ListLabel label="Last Events" />
            </View>
          }
          footerComponent={
            <View style={{height: screenNormalizer.heightPixel(200)}} />
          }
          data={data}
          horizontal={false}
          renderItem={({item, _index}: any) => {
            return (
              <HorCard
                scrollEnabled={false}
                imageUri={
                  item.images.length === 0
                    ? require('../images/notfound.jpg')
                    : {uri: item.images[0].upload}
                }
                title={item.title}
                id={item.id}
                category={item.category_name}
                time={item.time}
                city={item.city}
                day={item.eventDay}
                month={item.eventMonth}
              />
            );
          }}
        />
      )}
      {isLoaded === false && (
        <View style={{marginVertical: screenNormalizer.pixelSizeVertical(100)}}>
          <ActivityIndicator color={theme.colors.tint.tint} />
        </View>
      )}
    </View>
  );
}

export default HomeScreen;

/* <StdButton
title="Go to Details"
onPress={() => navigation.navigate('Detail')}
/>
<StdButton title="Button" /> */
