import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';

const Carousel = (props: any) => {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={props.headerComponent}
        ListFooterComponent={props.footerComponent}
        data={props.data}
        scrollEnabled={props.scrollEnabled === false ? false : true}
        renderItem={props.renderItem}
        horizontal={props.horizontal === false ? false : true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Carousel;
