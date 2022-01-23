/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-catch-shadow */
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import api, {api_key} from '../../api';
import {AppContext} from '../../components/Context';
import ListItem from '../../components/ListItem';
import {Movie, RootStackParams, TabsStackParams} from '../../types/types';

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabsStackParams, 'Movies'>,
  NativeStackScreenProps<RootStackParams>
>;

const MoviesScreen = (props: Props) => {
  const {navigation} = props;
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

  const renderItem = ({item}: {item: Movie}) => {
    return (
      <ListItem
        item={item}
        onPress={() => {
          navigation.navigate('Movie', {item});
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
      <Text>Top 250 Movies</Text>
      <View>
        <FlatList
          data={topMovies}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default MoviesScreen;
