import {StyleSheet, View} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {BottomSheetModal, BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {theme} from '../utils/theme';

const BottomSheet = (props: any) => {
  // ref
  const bottomSheetModalRef = props.bottomSheetModalRef;

  // variables
  const snapPoints = useMemo(() => ['25%', '60%'], []);

  const handleSheetChanges = useCallback((_index: number) => {}, []);

  // renders
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        opacity={0.3}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        style={[props.style, styles.backDrop]}
      />
    ),
    [],
  );

  return (
    <View>
      <BottomSheetModal
        backgroundStyle={styles.backgroundStyle}
        handleIndicatorStyle={styles.handleIndicator}
        backdropComponent={renderBackdrop}
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        {props.children}
      </BottomSheetModal>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  backDrop: {
    backgroundColor: theme.colors.label.primary,
  },
  handleIndicator: {
    backgroundColor: theme.colors.seperetor,
  },
  backgroundStyle: {
    backgroundColor: theme.colors.background.secondary,
  },
});
