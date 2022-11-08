import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {useAppSelector} from '../app/hooks';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../features/counter/counterSlice';

const Counter = () => {
  const {counter} = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  // useAppSelector(state => state.counter.value);

  return (
    <View>
      <Text>el counter es {counter} </Text>

      <TouchableOpacity
        onPress={
          () =>
            // dispatch(increment()

            dispatch(increment())

          // )
        }>
        <Text>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>Decrement </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
