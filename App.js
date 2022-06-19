import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/screens/Home';
import Map from './components/screens/Map';
import { store } from './components/reduxConfig.js/Store';
import { Provider } from 'react-redux';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const App = () => {
  return (
   <Provider store={store}>
    <MyStack/>
   </Provider>
  );
};

export default App;