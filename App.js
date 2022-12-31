import React, { useEffect } from 'react'
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import TabStackScreen from './navigation/TabNavigation';
import { persistStore } from 'redux-persist'
import { RootSiblingParent } from 'react-native-root-siblings';

import { DrawerContent } from './screen';
import store from './store';


const App = () => {

  const Drawer = createDrawerNavigator();
  const persistor = persistStore(store) // Connect redux persist to store

  // Use redux persist to save redux states when user login again 
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootSiblingParent>
          <NavigationContainer>
            <StatusBar hidden={true} />
            <Drawer.Navigator
              screenOptions={() => ({
                headerShown: false
              })}
              drawerContent={() => <DrawerContent />} // Render content of drawer
            >
              <Drawer.Screen name="TabStackScreen" component={TabStackScreen} />
            </Drawer.Navigator>
          </NavigationContainer>
        </RootSiblingParent>
      </PersistGate>
    </Provider>
  )
}

export default App