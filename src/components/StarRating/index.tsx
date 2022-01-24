import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

type Props = {
  rating: number;
};
const StarRating = (props: Props) => {
  const {rating} = props;

  return (
    <View style={styles.container}>
      {[...Array(10)].map((star, index) => {
        index += 1;
        return (
          <View key={index}>
            <Text style={index <= rating ? styles.on : styles.off}>
              &#9733;
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default StarRating;
