import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../types/types';

type Props = NativeStackScreenProps<RootStackParams, 'Movie'>;

const MovieScreen = (props: Props) => {
  const {route} = props;
  const {item} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{item.title}</Text>
    </View>
  );
};

export default MovieScreen;
