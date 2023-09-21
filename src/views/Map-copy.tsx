import React, {useState, useEffect, useRef, useMemo, useContext} from 'react';
import {StyleSheet, View, Animated, Dimensions} from 'react-native';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import MapView, {Marker, Region} from 'react-native-maps'; // Import Marker and Region from react-native-maps
import VerCard from '../components/verCard';
import {screenNormalizer, theme} from '../utils/theme';

import {Context} from '../App';

const {width, height} = Dimensions.get('window');
const ACTUAL_CARD_HEIGHT = screenNormalizer.heightPixel(249);
const ACTUAL_CARD_WIDTH = screenNormalizer.widthPixel(294);
const CARD_HEIGHT = height / 4.5;
const CARD_WIDTH = CARD_HEIGHT - 20;

function MapScreen() {
  const [animationIndex, setAnimationIndex] = useState<number>(0);
  const [_scrolledX, _setScrolledX] = useState<number>(0);

  const context: any = useContext(Context);
  let markers = context.popularEventsList;

  const [region, _setRegion] = useState<Region>({
    // 39.0876459,35.1293295 Turkiye
    latitude: 39.0876459,
    longitude: 35.1293295,
    latitudeDelta: 18.04864195044303443,
    longitudeDelta: 18.040142817690068,
  });

  const animation = useMemo(() => new Animated.Value(0), []);

  const carouselRef = useRef<ICarouselInstance>(null);
  const mapRef = useRef<MapView>(null);
  const regionTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    animation.addListener(({value}: any) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index >= markers.length) {
        index = markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }
      if (regionTimeout.current) {
        clearTimeout(regionTimeout.current);
      }
      regionTimeout.current = setTimeout(() => {
        if (animationIndex !== index) {
          setAnimationIndex(index);
          const coordinate = {
            latitude: parseFloat(markers[index].latitude),
            longitude: parseFloat(markers[index].longitude),
          };

          mapRef.current?.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: 0.04864195044303443,
              longitudeDelta: 0.040142817690068,
            },
            350,
          );
        }
      }, 10);
    });

    return () => {
      animation.removeAllListeners();
      if (regionTimeout.current) {
        clearTimeout(regionTimeout.current);
      }
    };
  }, [markers, region, animation, animationIndex]);

  const _renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <View style={styles.card} key={index}>
        <VerCard
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
      </View>
    );
  };

  const interpolations = markers.map((marker: any, index: any) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];
    const scale = animation.interpolate({
      inputRange,
      outputRange: [1, 2.5, 1],
      extrapolate: 'clamp',
    });
    const opacity = animation.interpolate({
      inputRange,
      outputRange: [0.35, 1, 0.35],
      extrapolate: 'clamp',
    });
    return {scale, opacity};
  });

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        mapPadding={{
          top: 0,
          left: 0,
          right: 0,
          bottom: ACTUAL_CARD_HEIGHT * 1.12,
        }}
        initialRegion={region}
        style={styles.container}>
        {markers.map((marker: any, index: any) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          const opacityStyle = {
            opacity: interpolations[index].opacity,
          };
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: parseFloat(marker.latitude),
                longitude: parseFloat(marker.longitude),
              }}>
              <Animated.View style={[styles.markerWrap, opacityStyle]}>
                <Animated.View style={[styles.ring, scaleStyle]}>
                  <View style={styles.marker} />
                </Animated.View>
              </Animated.View>
            </Marker>
          );
        })}
      </MapView>
      <Animated.View style={styles.scrollView}>
        <Carousel
          style={styles.carouselStyle}
          loop
          ref={carouselRef}
          width={width * 0.85}
          height={width / 1.45}
          data={markers}
          onProgressChange={offsetProgress => {
            animation.setValue(Math.abs(offsetProgress / 2));
          }}
          renderItem={_renderItem}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    paddingVertical: 5,
  },
  carouselStyle: {
    width: '100%',
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    height: ACTUAL_CARD_HEIGHT,
    width: ACTUAL_CARD_WIDTH,
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.tint.tint,
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.tint.tintPassive,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: theme.colors.tint.tint,
  },
});

export default MapScreen;
