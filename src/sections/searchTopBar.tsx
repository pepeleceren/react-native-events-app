import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';
import {theme, screenNormalizer} from '../utils/theme';
import {Arrowleft, Filter} from '../components/icons';
import Button from '../components/button';
import TextInput from '../components/textInput';

const SearchTopBar = (props: any) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => props.navigation.goBack()}
        style={styles.containerLeft}>
        <Arrowleft
          width={screenNormalizer.widthPixel(8)}
          height={screenNormalizer.heightPixel(20)}
          fill={theme.colors.tint.tint}
        />
        <Text style={styles.backText}>Back</Text>
      </Button>
      <View style={styles.containerCenter}>
        <TextInput text={props.searchText} setText={props.setSearchText} />
      </View>
      <View style={styles.containerRight}>
        <Button style={styles.filterContainer} onPress={props.onPressModal}>
          <Filter
            width={screenNormalizer.widthPixel(20)}
            height={screenNormalizer.heightPixel(20)}
            fill={theme.colors.tint.tint}
          />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenNormalizer.heightPixel(68),
    flexDirection: 'row',
    paddingVertical: screenNormalizer.pixelSizeVertical(16),
    paddingHorizontal: screenNormalizer.pixelSizeHorizontal(16),
    backgroundColor: theme.colors.background.primary,
    justifyContent: 'space-between',
  },
  containerLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRight: {
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
  backText: {
    ...(theme.textVariants.bodyDefault as TextStyle),
    color: theme.colors.tint.tint,
    marginLeft: screenNormalizer.pixelSizeHorizontal(8),
  },
  userLogoContainer: {},
  userLogo: {
    width: screenNormalizer.widthPixel(32),
    height: screenNormalizer.heightPixel(32),
    borderRadius: screenNormalizer.widthPixel(32),
  },
  filterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchTopBar;
