import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../types/types';

type Props = NativeStackScreenProps<RootStackParams, 'Movie'>;

const MovieScreen = (props: Props) => {
  const {} = props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Movie Screen</Text>
    </View>
  );
};

export default MovieScreen;
