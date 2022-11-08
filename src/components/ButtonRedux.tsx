import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {useAppDispatch} from '../app/hooks';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../features/counter/counterSlice';

const ButtonRedux = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>Decrement</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dispatch(incrementByAmount(10))}>
        <Text>increment by 10</Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonRedux;
