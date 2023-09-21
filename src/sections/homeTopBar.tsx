import {StyleSheet, Text, TextStyle, View, Image} from 'react-native';
import React from 'react';
import {theme, screenNormalizer} from '../utils/theme';
import {Map, Search} from '../components/icons';
import Button from '../components/button';

const HomeTopBar = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <Text style={styles.hiText}>Hi, Ceren 🤩</Text>
        <View style={styles.footnoteContainer}>
          <Map
            width={screenNormalizer.widthPixel(17)}
            height={screenNormalizer.heightPixel(22)}
            fill={theme.colors.label.tertiary}
          />
          <Text style={styles.footnote}>Gaziantep, Türkiye</Text>
        </View>
      </View>
      <View style={styles.containerRight}>
        <Button
          style={styles.searchContainer}
          onPress={() => props.navigation.navigate('Search')}>
          <Search
            width={screenNormalizer.widthPixel(17)}
            height={screenNormalizer.heightPixel(22)}
            fill={theme.colors.tint.tint}
          />
        </Button>
        <Button
          style={styles.userLogoContainer}
          onPress={() => props.navigation.navigate('Account')}>
          <Image
            style={styles.userLogo}
            source={{
              uri: 'https://images.unsplash.com/photo-1642303760632-dd6eea57d26f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3464&q=80',
            }}
          />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenNormalizer.heightPixel(79),
    flexDirection: 'row',
    paddingVertical: screenNormalizer.pixelSizeVertical(16),
    paddingHorizontal: screenNormalizer.pixelSizeHorizontal(16),
    backgroundColor: theme.colors.background.primary,
  },
  containerLeft: {
    flex: 4,
    justifyContent: 'center',
  },
  containerRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  hiText: {
    ...(theme.textVariants.bodyBold as TextStyle),
    color: theme.colors.label.primary,
  },
  footnoteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footnote: {
    ...(theme.textVariants.footnoteBold as TextStyle),
    color: theme.colors.label.tertiary,
    marginLeft: screenNormalizer.pixelSizeHorizontal(5),
  },
  userLogoContainer: {},
  userLogo: {
    width: screenNormalizer.widthPixel(32),
    height: screenNormalizer.heightPixel(32),
    borderRadius: screenNormalizer.widthPixel(32),
  },
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: screenNormalizer.pixelSizeHorizontal(10),
  },
});

export default HomeTopBar;
