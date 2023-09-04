import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './views/Home';
import MapScreen from './views/Map';
import PastEventsScreen from './views/PastEvents';
import AccountScreen from './views/Account';
import SearchScreen from './views/Search';
import DetailScreen from './views/Detail';

import TabBar from './components/tabBar';

import {theme, screenNormalizer} from './utils/theme';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Seaarch" component={SearchScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}

function tabBarFunc(props: any) {
  return <TabBar {...props} />;
}

export const Context: any = React.createContext({});

function App(): JSX.Element {
  return (
    <Context.Provider value={{theme: theme, normalization: screenNormalizer}}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <NavigationContainer>
          <Tab.Navigator
            tabBar={tabBarFunc}
            screenOptions={{headerShown: false}}>
            <Tab.Screen name="HomeStack" component={HomeStackScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="PastEvents" component={PastEventsScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
