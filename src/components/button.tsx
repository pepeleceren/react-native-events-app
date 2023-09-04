import {StyleSheet, Pressable, Animated} from 'react-native';
import React from 'react';

export default function Button(props: any) {
  const animated = new Animated.Value(1);
  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      {...props}
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      style={[styles.pressable, props.style]}>
      <Animated.View
        style={[{opacity: animated}, styles.pressable, props.style]}>
        {props.children}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
