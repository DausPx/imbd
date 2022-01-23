/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-catch-shadow */
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import api, {api_key} from '../../api';
import {AppContext} from '../../components/Context';
import {TabsStackParams} from '../../types/types';

type Props = BottomTabScreenProps<TabsStackParams, 'Movies'>;

const MoviesScreen = (props: Props) => {
  const {} = props;
  const {topMovies, setTopMovies} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | undefined>(undefined);

  useEffect(() => {
    const getTopMovies = async () => {
      try {
        setLoading(true);
        const fetchedMovies = await api.get(`Top250Movies/${api_key}`);
        if (fetchedMovies.data) {
          setTopMovies(fetchedMovies.data.items);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    if (!topMovies) {
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
        {topMovies?.map(movie => {
          return <Text>{movie.title}</Text>;
        })}
      </ScrollView>
    </View>
  );
};

export default MoviesScreen;
