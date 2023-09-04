import React from 'react';
import {View} from 'react-native';
import StdButton from '../components/stdButton';

// import {Context} from '../App';

function HomeScreen({navigation}: any) {
  //   const context: any = useContext(Context);
  return (
    <View>
      <StdButton title="Deneme" onPress={() => navigation.navigate('Detail')} />
      <StdButton title="Deneme22" />
    </View>
  );
}

export default HomeScreen;
