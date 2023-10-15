import React, {useContext} from 'react';
import {View} from 'react-native';
import PastEventsTopBar from '../sections/pastEventsTopBar';
import Carousel from '../components/carousel';
import {Context} from '../App';
import HorCard from '../components/horCard';
import ListLabel from '../components/listLabel';

function PastEventsScreen() {
  const context: any = useContext(Context);
  let data = context.pastEventsList;
  return (
    <View>
      <PastEventsTopBar />
      <ListLabel label="Results" />
      <Carousel
        data={data}
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
    </View>
  );
}

export default PastEventsScreen;
