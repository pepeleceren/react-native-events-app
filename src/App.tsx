import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import HomeScreen from './views/Home';
import MapScreen from './views/Map';
import PastEventsScreen from './views/PastEvents';
import AccountScreen from './views/Account';
import SearchScreen from './views/Search';
import DetailScreen from './views/Detail';

import TabBar from './components/tabBar';

import {theme, screenNormalizer} from './utils/theme';
import {lastEventsData, popularEventsData} from './utils/api';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Search" component={SearchScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}

function tabBarFunc(props: any) {
  return <TabBar {...props} />;
}

export const Context: any = React.createContext({});

function App(): JSX.Element {
  const [eventsList, setEventsList] = useState([]);
  const [popularEventsList, setpopularEventsList] = useState([]);
  const [loading, setLastLoading] = useState(false);

  useEffect(() => {
    lastEventsData(setEventsList, setLastLoading);
  }, [eventsList]);

  useEffect(() => {
    popularEventsData(setpopularEventsList);
  }, [popularEventsList]);

  return (
    <GestureHandlerRootView style={styles.handler}>
      <BottomSheetModalProvider>
        <Context.Provider
          value={{
            theme: theme,
            normalization: screenNormalizer,
            lastEventsList: eventsList,
            popularEventsList: popularEventsList,
            loadingLast: loading,
          }}>
          <SafeAreaView style={styles.safeArea}>
            <StatusBar
              barStyle="dark-content"
              backgroundColor={theme.colors.background.primary}
            />
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
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
  handler: {
    flex: 1,
  },
});

export default App;
