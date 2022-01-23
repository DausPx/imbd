/* eslint-disable no-catch-shadow */
/* eslint-disable @typescript-eslint/no-shadow */
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import api, {api_key} from '../../api';
import {AppContext} from '../../components/Context';
import ListItem from '../../components/ListItem';
import {RootStackParams, Show, TabsStackParams} from '../../types/types';

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabsStackParams, 'TVShows'>,
  NativeStackScreenProps<RootStackParams>
>;

const TVShowsScreen = (props: Props) => {
  const {navigation} = props;
  const {topShows, setTopShows} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | undefined>(undefined);

  useEffect(() => {
    const getTopMovies = async () => {
      try {
        setLoading(true);
        const fetchedShows = await api.get(`Top250TVs/${api_key}`);

        if (fetchedShows.data) {
          setTopShows(fetchedShows.data.items);
        }

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (!topShows) {
      getTopMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({item}: {item: Show}) => {
    return (
      <ListItem
        item={item}
        onPress={() => {
          navigation.navigate('Show', {item});
        }}
      />
    );
  };

  if (loading) {
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Something went wrong!</Text>
        <Text>{error && error.message}</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <Text>Top 250 TV Shows</Text>
      <View>
        <FlatList
          data={topShows}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default TVShowsScreen;
