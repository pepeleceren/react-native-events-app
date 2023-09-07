import React, {useCallback, useRef, useState} from 'react';
import {View} from 'react-native';

import SearchTopBar from '../sections/searchTopBar';
import ListLabel from '../components/listLabel';
import Carousel from '../components/carousel';
import HorCard from '../components/horCard';

import {BottomSheetModal} from '@gorhom/bottom-sheet';
import FilterBottomSheet from '../sections/filterBottomSheet';

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

function SearchScreen({navigation}: any) {
  const [text, setText] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <View>
      <FilterBottomSheet
        bottomSheetModRef={bottomSheetModalRef}
        start={startDate}
        end={endDate}
        setStart={setStartDate}
        setEnd={setEndDate}
      />
      <SearchTopBar
        onPressModal={handlePresentModalPress}
        searchText={text}
        setSearchText={setText}
        navigation={navigation}
      />
      {text === '' && (
        <View>
          <ListLabel label="Popular Events" />
          <Carousel
            data={data}
            horizontal={false}
            renderItem={({item, _index}: any) => {
              return (
                <HorCard
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
      )}
    </View>
  );
}

export default SearchScreen;
