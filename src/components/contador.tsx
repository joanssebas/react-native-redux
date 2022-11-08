import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export const Contador = () => {
  const {counter} = useSelector((state: any) => state.counter);
  return (
    <View>
      <Text>contador {counter}</Text>
    </View>
  );
};
