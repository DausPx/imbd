import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import {TabsStackParams} from '../../types/types';

type Props = BottomTabScreenProps<TabsStackParams, 'Movies'>;

const MoviesScreen = (props: Props) => {
  const {} = props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Movies Screen</Text>
    </View>
  );
};

export default MoviesScreen;
