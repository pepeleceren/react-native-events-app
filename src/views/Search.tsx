import React, {useCallback, useRef} from 'react';
import {View, StyleSheet, TextStyle, Text} from 'react-native';

import {screenNormalizer, theme} from '../utils/theme';

import SearchTopBar from '../components/searchTopBar';
import ListLabel from '../components/listLabel';
import Carousel from '../components/carousel';
import HorCard from '../components/horCard';

import {BottomSheetModal} from '@gorhom/bottom-sheet';
import BottomSheet from '../components/bottomSheet';

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
  const [text, setText] = React.useState('');

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <View>
      <BottomSheet bottomSheetModalRef={bottomSheetModalRef}>
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
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

const styles = StyleSheet.create({
  emptyContainer: {
    marginVertical: screenNormalizer.pixelSizeVertical(16),

    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    ...(theme.textVariants.subheadDefault as TextStyle),
    color: theme.colors.label.primary,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default SearchScreen;
