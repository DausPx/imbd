import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Context from './src/components/Context';

import Navigation from './src/navigation';

const App = () => {
  return (
    <Context>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Context>
  );
};

export default App;
