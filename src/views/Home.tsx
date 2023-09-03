import React from 'react';
import {Button, View} from 'react-native';

// import {Context} from '../App';

function HomeScreen({navigation}: any) {
  //   const context: any = useContext(Context);
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

export default HomeScreen;
