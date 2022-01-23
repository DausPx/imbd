/* eslint-disable no-catch-shadow */
/* eslint-disable @typescript-eslint/no-shadow */
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import api, {api_key} from '../../api';
import {AppContext} from '../../components/Context';
import {TabsStackParams} from '../../types/types';

type Props = BottomTabScreenProps<TabsStackParams, 'TVShows'>;

const TVShowsScreen = (props: Props) => {
  const {} = props;
  const {topShows, setTopShows} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | undefined>(undefined);

  useEffect(() => {
    const getTopMovies = async () => {
      try {
        setLoading(true);
        const fetchedMovies = await api.get(`Top250TVs/${api_key}`);
        if (fetchedMovies.data) {
          setTopShows(fetchedMovies.data.items);
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
      <Text>Movies Screen</Text>
      <ScrollView>
        {topShows?.map(show => {
          return <Text>{show.title}</Text>;
        })}
      </ScrollView>
    </View>
  );
};

export default TVShowsScreen;
