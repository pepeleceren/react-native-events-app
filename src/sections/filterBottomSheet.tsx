import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';

import BottomSheet from '../components/bottomSheet';
import DatePick from '../components/datePicker';
import {screenNormalizer, theme} from '../utils/theme';

const FilterBottomSheet = (props: any) => {
  const startDate = props.start;
  const endDate = props.end;
  const setStartDate = props.setStart;
  const setEndDate = props.setEnd;
  return (
    <View>
      <BottomSheet bottomSheetModalRef={props.bottomSheetModRef}>
        <View style={styles.contentContainer}>
          <Text style={styles.filterHeadText}>Filters</Text>
          <Text style={styles.filterLabel}>Date</Text>
          <View style={styles.dateFilterContainer}>
            <Text style={styles.filterInnerLabel}>Start Date</Text>
            <DatePick
              style={styles.datePicker}
              date={startDate}
              setDate={setStartDate}
            />
            <Text style={styles.filterInnerLabel}>End Date</Text>
            <DatePick
              style={styles.datePicker}
              date={endDate}
              setDate={setEndDate}
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default FilterBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: screenNormalizer.pixelSizeHorizontal(16),
  },
  filterLabel: {
    ...(theme.textVariants.subheadBold as TextStyle),
    color: theme.colors.label.secondary,
    alignSelf: 'flex-start',
    paddingTop: screenNormalizer.pixelSizeVertical(16),
    paddingBottom: screenNormalizer.pixelSizeVertical(8),
  },
  dateFilterContainer: {
    flexDirection: 'column',
    backgroundColor: theme.colors.background.primary,
    paddingVertical: screenNormalizer.pixelSizeVertical(8),
    paddingHorizontal: screenNormalizer.pixelSizeHorizontal(8),
    borderRadius: screenNormalizer.widthPixel(10),
  },
  datePicker: {
    width: screenNormalizer.widthPixel(311),
    marginVertical: screenNormalizer.pixelSizeVertical(16),
  },
  filterHeadText: {
    ...(theme.textVariants.bodyBold as TextStyle),
    color: theme.colors.label.primary,
    alignSelf: 'flex-start',
  },
  filterInnerLabel: {
    ...(theme.textVariants.subheadBold as TextStyle),
    color: theme.colors.label.primary,
    alignSelf: 'flex-start',
  },
});
