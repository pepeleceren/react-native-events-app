import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import DetailTopBar from '../sections/detailTopBar';
import Carousel from '../components/carousel';
import ImageCard from '../components/imageCard';
import {detailEventData} from '../utils/api';
import {screenNormalizer, theme} from '../utils/theme';
import DetailDescriptionCard from '../components/detailDescription';

function DetailScreen({route, navigation}: any) {
  const [eventData, setEventData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    detailEventData(setEventData, setLoading, route.params.eventId);
  }, [route.params.eventId]);
  return (
    <View>
      <DetailTopBar
        navigation={navigation}
        onPressModal={() => console.log('clicked')}
      />
      {loading && (
        <View>
          <Carousel
            data={eventData.images}
            renderItem={({item, _index}: any) => {
              return (
                <ImageCard
                  imageUri={
                    item.length === 0
                      ? require('../images/notfound.jpg')
                      : {uri: item.upload}
                  }
                />
              );
            }}
          />
          <DetailDescriptionCard
            title={eventData.title}
            description={eventData.description}
          />
        </View>
      )}
      {loading === false && (
        <View style={{marginVertical: screenNormalizer.pixelSizeVertical(100)}}>
          <ActivityIndicator color={theme.colors.tint.tint} />
        </View>
      )}
    </View>
  );
}

export default DetailScreen;
