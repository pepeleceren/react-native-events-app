import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {View} from 'react-native';

import SearchTopBar from '../sections/searchTopBar';
import ListLabel from '../components/listLabel';
import Carousel from '../components/carousel';
import HorCard from '../components/horCard';

import {BottomSheetModal} from '@gorhom/bottom-sheet';
import FilterBottomSheet from '../sections/filterBottomSheet';

import {searchEventsData} from '../utils/api';
import {Context} from '../App';

function SearchScreen({route, navigation}: any) {
  const context: any = useContext(Context);
  let dataSelect = context.catalogList;
  const categoryFilterId = dataSelect.find(
    (element: any) => element.name === route.params.categoryFilter,
  ).id;
  const nextDate = new Date();
  nextDate.setFullYear(nextDate.getFullYear() + 1);
  const previousDate = new Date();
  previousDate.setFullYear(previousDate.getFullYear() - 1);
  const [text, setText] = useState('');
  const [startDate, setStartDate] = useState(new Date(0));
  const [endDate, setEndDate] = useState(new Date(0));
  const [selected, setSelected] = useState([categoryFilterId]);
  const [searchData, setSearchData] = useState([]);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  useEffect(() => {
    searchEventsData(
      setSearchData,
      text,
      startDate.toISOString().split('T')[0],
      endDate.toISOString().split('T')[0],
      selected,
    );
  }, [text, startDate, endDate, selected]);
  return (
    <View>
      <FilterBottomSheet
        bottomSheetModRef={bottomSheetModalRef}
        start={startDate}
        end={endDate}
        setStart={setStartDate}
        setEnd={setEndDate}
        selectedCategory={selected}
        setSelectedCategory={setSelected}
        dataSelect={dataSelect}
      />
      <SearchTopBar
        onPressModal={handlePresentModalPress}
        searchText={text}
        setSearchText={setText}
        navigation={navigation}
      />

      <View>
        <ListLabel label="Popular Events" />
        <Carousel
          data={searchData}
          horizontal={false}
          renderItem={({item, _index}: any) => {
            return (
              <HorCard
                imageUri={
                  item.images.length === 0
                    ? require('../images/notfound.jpg')
                    : {uri: item.images[0].upload}
                }
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
      </View>
    </View>
  );
}

export default SearchScreen;
