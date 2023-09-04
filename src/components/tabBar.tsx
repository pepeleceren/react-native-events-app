import React from 'react';
import {View, StyleSheet} from 'react-native';

import Button from './button';

import {theme, screenNormalizer} from '../utils/theme';

import {Account, History, Home, Map} from './icons';

function TabBar({state, descriptors, navigation}: any) {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <Button key={label} style={styles.button} onPress={onPress}>
            {label === 'HomeStack' && (
              <Home
                height={screenNormalizer.heightPixel(20)}
                width={screenNormalizer.widthPixel(18)}
                fill={
                  isFocused
                    ? theme.colors.tint.tint
                    : theme.colors.label.primary
                }
              />
            )}
            {label === 'Map' && (
              <Map
                height={screenNormalizer.heightPixel(20)}
                width={screenNormalizer.widthPixel(17)}
                fill={
                  isFocused
                    ? theme.colors.tint.tint
                    : theme.colors.label.primary
                }
              />
            )}
            {label === 'PastEvents' && (
              <History
                height={screenNormalizer.heightPixel(20)}
                width={screenNormalizer.widthPixel(20)}
                fill={
                  isFocused
                    ? theme.colors.tint.tint
                    : theme.colors.label.primary
                }
              />
            )}
            {label === 'Account' && (
              <Account
                height={screenNormalizer.heightPixel(26)}
                width={screenNormalizer.widthPixel(22)}
                fill={
                  isFocused
                    ? theme.colors.tint.tint
                    : theme.colors.label.primary
                }
              />
            )}
            {isFocused && (
              <View
                style={[
                  styles.dot,
                  {
                    backgroundColor: isFocused
                      ? theme.colors.tint.tint
                      : theme.colors.label.primary,
                  },
                ]}
              />
            )}
          </Button>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    height: screenNormalizer.heightPixel(50),
  },
  dot: {
    width: 4,
    height: 4,
    marginTop: screenNormalizer.pixelSizeVertical(6),
    borderRadius: 4,
  },
});

export default TabBar;
