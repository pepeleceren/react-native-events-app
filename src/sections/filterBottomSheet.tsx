import {ScrollView, StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';
import {MultiSelect} from 'react-native-element-dropdown';

import BottomSheet from '../components/bottomSheet';
import DatePick from '../components/datePicker';
import {screenNormalizer, theme} from '../utils/theme';

const FilterBottomSheet = (props: any) => {
  const data = props.dataSelect;
  const selected = props.selectedCategory;
  const setSelected = props.setSelectedCategory;
  const startDate = props.start;
  const endDate = props.end;
  const setStartDate = props.setStart;
  const setEndDate = props.setEnd;
  return (
    <View>
      <BottomSheet bottomSheetModalRef={props.bottomSheetModRef}>
        <ScrollView>
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
            <Text style={styles.filterLabel}>Category</Text>
            <View style={styles.dateFilterContainer}>
              <MultiSelect
                style={stylesfor.dropdown}
                placeholderStyle={stylesfor.placeholderStyle}
                selectedTextStyle={stylesfor.selectedTextStyle}
                inputSearchStyle={stylesfor.inputSearchStyle}
                iconStyle={stylesfor.iconStyle}
                selectedStyle={stylesfor.selectedStyle}
                itemTextStyle={stylesfor.itemText}
                data={data}
                labelField="name"
                valueField="id"
                placeholder="Select Category"
                value={selected}
                search
                activeColor={theme.colors.grey[3]}
                searchPlaceholder="Search..."
                onChange={item => {
                  setSelected(item);
                }}
              />
            </View>
          </View>
          <View style={styles.bottomSpace} />
        </ScrollView>
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
  multiSelect: {
    width: screenNormalizer.widthPixel(327),
    marginVertical: screenNormalizer.pixelSizeVertical(16),
    borderColor: theme.colors.seperetor,
  },
  colorSeperator: {
    borderColor: theme.colors.seperetor,
    color: theme.colors.tint.tint,
  },
  badge: {
    borderColor: theme.colors.seperetor,
    color: theme.colors.tint.tint,
    backgroundColor: theme.colors.tint.tint,
  },
  badgeText: {
    color: theme.colors.base.base2,
    backgroundColor: 'transparent',
  },
  checkBoxSt: {
    borderColor: theme.colors.tint.tint,
    color: theme.colors.tint.tint,
  },
  bottomSpace: {
    marginVertical: screenNormalizer.pixelSizeVertical(100),
  },
});

const stylesfor = StyleSheet.create({
  dropdown: {
    width: screenNormalizer.widthPixel(327),
    height: screenNormalizer.heightPixel(50),
    backgroundColor: theme.colors.background.primary,
    borderRadius: 12,
    borderWidth: screenNormalizer.sensHeightPixel(0.5),
    borderColor: theme.colors.seperetor,
    paddingHorizontal: screenNormalizer.pixelSizeHorizontal(12),
    paddingVertical: screenNormalizer.pixelSizeVertical(12),
  },
  placeholderStyle: {
    ...(theme.textVariants.footnoteDefault as TextStyle),
    color: theme.colors.label.secondary,
  },
  selectedTextStyle: {
    ...(theme.textVariants.footnoteDefault as TextStyle),
    color: theme.colors.base.base2,
  },
  iconStyle: {
    width: screenNormalizer.widthPixel(20),
    height: screenNormalizer.heightPixel(20),
  },
  inputSearchStyle: {
    height: screenNormalizer.heightPixel(40),
    ...(theme.textVariants.footnoteBold as TextStyle),
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: theme.colors.seperetor,
    backgroundColor: theme.colors.blue[6],
  },
  itemText: {
    ...(theme.textVariants.footnoteBold as TextStyle),
    color: theme.colors.label.primary,
  },
});
