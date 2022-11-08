import React from 'react';
import {View, Text} from 'react-native';
import {useAppSelector} from '../app/hooks';

const Counter = () => {
  const counter = useAppSelector(state => state.counter.value);

  return (
    <View>
      <Text>{counter} </Text>
    </View>
  );
};

export default Counter;
