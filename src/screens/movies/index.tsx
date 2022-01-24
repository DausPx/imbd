/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-catch-shadow */
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext, useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import api, {api_key} from '../../api';
import {AppContext} from '../../components/Context';
import ListItem from '../../components/ListItem';
import SearchInput from '../../components/SearchInput';
import {Movie, RootStackParams, TabsStackParams} from '../../types/types';

import styles from './styles';

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabsStackParams, 'Movies'>,
  NativeStackScreenProps<RootStackParams>
>;

const MoviesScreen = (props: Props) => {
  const {navigation} = props;
  const {topMovies, setTopMovies} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | undefined>(undefined);
  const [searchText, setSearchText] = useState('');

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

  const filteredMovies = useMemo(() => {
    return topMovies?.filter(movie => {
      try {
        return movie.title
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase());
      } catch {
        return false;
      }
    });
  }, [topMovies, searchText]);

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
        <ActivityIndicator />
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
    <View style={styles.container}>
      <Text style={styles.title}>Top 250 Movies</Text>
      <SearchInput
        searchText={searchText}
        placeholder="Filter Movies"
        setSearchText={setSearchText}
      />
      <View>
        <FlatList
          data={filteredMovies}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default MoviesScreen;
