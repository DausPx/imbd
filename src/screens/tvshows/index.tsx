import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import {TabsStackParams} from '../../types/types';

type Props = BottomTabScreenProps<TabsStackParams, 'TVShows'>;

const TVShowsScreen = (props: Props) => {
  const {} = props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tv Shows Screen</Text>
    </View>
  );
};

export default TVShowsScreen;
