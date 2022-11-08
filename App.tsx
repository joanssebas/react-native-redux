/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';
import {useAppSelector} from './src/app/hooks';
import Counter from './src/components/Counter';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import ButtonRedux from './src/components/ButtonRedux';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text>hola </Text>
        <Counter />
        <ButtonRedux />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
