import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Movie, Show} from '../../types/types';
import {formatNumber} from '../../util';
import StarRating from '../StarRating';

import styles from './styles';

type Props = {
  item: Movie | Show;
  onPress: () => void;
};

const ListItem = (props: Props) => {
  const {item, onPress} = props;

  const numberRating = formatNumber(item.imDbRating);

  return (
    <TouchableOpacity onPress={onPress} style={styles.itemWraper}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.description}>
        <Text>{item.fullTitle}</Text>
        <StarRating rating={numberRating} />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
