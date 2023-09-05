import React from 'react';
import {View} from 'react-native';
import HomeTopBar from '../components/homeTopBar';
import VerCard from '../components/verCard';
import HorCard from '../components/horCard';

// import {Context} from '../App';

function HomeScreen({navigation}: any) {
  //   const context: any = useContext(Context);
  return (
    <View>
      <HomeTopBar navigation={navigation} />
      <VerCard
        title="Konser"
        category="Concert"
        time="17:00"
        city="Istanbul"
        day="25"
        month="SEP"
      />
      <HorCard
        title="Konser"
        category="Concert"
        time="17:00"
        city="Istanbul"
        day="25"
        month="SEP"
      />
    </View>
  );
}

export default HomeScreen;

/* <StdButton
title="Go to Details"
onPress={() => navigation.navigate('Detail')}
/>
<StdButton title="Button" /> */
