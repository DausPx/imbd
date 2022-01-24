/* eslint-disable no-catch-shadow */
/* eslint-disable @typescript-eslint/no-shadow */
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext, useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import api, {api_key} from '../../api';
import {AppContext} from '../../components/Context';
import ListItem from '../../components/ListItem';
import SearchInput from '../../components/SearchInput';
import {RootStackParams, Show, TabsStackParams} from '../../types/types';

import styles from './styles';

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabsStackParams, 'TVShows'>,
  NativeStackScreenProps<RootStackParams>
>;

const TVShowsScreen = (props: Props) => {
  const {navigation} = props;
  const {topShows, setTopShows} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | undefined>(undefined);
  const [searchText, setSearchText] = useState('');

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

  const filteredShows = useMemo(() => {
    return topShows?.filter(show => {
      try {
        return show.title
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase());
      } catch {
        return false;
      }
    });
  }, [topShows, searchText]);

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
      <Text style={styles.title}>Top 250 TV Shows</Text>
      <SearchInput
        searchText={searchText}
        placeholder="Filter Movies"
        setSearchText={setSearchText}
      />
      <View>
        <FlatList
          data={filteredShows}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default TVShowsScreen;
