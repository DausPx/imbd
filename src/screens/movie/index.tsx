import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, Text, View} from 'react-native';
import StarRating from '../../components/StarRating';
import {RootStackParams} from '../../types/types';
import {formatNumber} from '../../util';

import styles from './styles';

type Props = NativeStackScreenProps<RootStackParams, 'Movie'>;

const MovieScreen = (props: Props) => {
  const {route} = props;
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <StarRating rating={formatNumber(item.imDbRating)} />
      <Text style={styles.text}>Release year: {item.year}</Text>
      <Text style={styles.text}>Actors: {item.crew}</Text>
    </View>
  );
};

export default MovieScreen;
