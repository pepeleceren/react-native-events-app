import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './views/Home';
import MapScreen from './views/Map';
import PastEventsScreen from './views/PastEvents';
import AccountScreen from './views/Account';
import SearchScreen from './views/Search';
import DetailScreen from './views/Detail';
import {theme} from './theme/theme';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Seaarch" component={SearchScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}

export const Context: any = React.createContext({});

function App(): JSX.Element {
  return (
    <Context.Provider value={{theme: theme}}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="HomeStack" component={HomeStackScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="PastEvents" component={PastEventsScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}

export default App;
