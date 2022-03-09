import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import React from 'react';
import RootApp from './src/appStack';
function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootApp />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
