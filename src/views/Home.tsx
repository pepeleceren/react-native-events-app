/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

import HomeTopBar from '../components/homeTopBar';
import VerCard from '../components/verCard';
import HorCard from '../components/horCard';
import Carousel from '../components/carousel';
import ListLabel from '../components/listLabel';
import {screenNormalizer} from '../utils/theme';

// import {Context} from '../App';
const data = [
  {
    id: 1,
    title: 'Konser',
    category: 'Concert',
    time: '17:00',
    city: 'Istanbul',
    day: '25',
    month: 'SEP',
    imageUri:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80',
  },
  {
    id: 2,
    title: 'Food Fest',
    category: 'Fest',
    time: '22:00',
    city: 'Bursa',
    day: '25',
    month: 'AUG',
    imageUri:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
  },
  {
    id: 3,
    title: 'Konser',
    category: 'Concert',
    time: '17:00',
    city: 'Istanbul',
    day: '25',
    month: 'SEP',
    imageUri:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80',
  },
];

function HomeScreen({navigation}: any) {
  //   const context: any = useContext(Context);
  return (
    <View>
      <HomeTopBar navigation={navigation} />
      <Carousel
        headerComponent={
          <View>
            <ListLabel label="Popular Events" />
            <Carousel
              data={data}
              renderItem={({item, _index}: any) => {
                return (
                  <VerCard
                    imageUri={item.imageUri}
                    title={item.title}
                    category={item.category}
                    time={item.time}
                    city={item.city}
                    day={item.day}
                    month={item.month}
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
              imageUri={item.imageUri}
              title={item.title}
              category={item.category}
              time={item.time}
              city={item.city}
              day={item.day}
              month={item.month}
            />
          );
        }}
      />
    </View>
  );
}

export default HomeScreen;

/* <StdButton
title="Go to Details"
onPress={() => navigation.navigate('Detail')}
/>
<StdButton title="Button" /> */
