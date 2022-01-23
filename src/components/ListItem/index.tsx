import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Movie, Show} from '../../types/types';
type Props = {
  item: Movie | Show;
  onPress: () => void;
};

const ListItem = (props: Props) => {
  const {item, onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '100%',
        height: 300,
        borderWidth: 1,
        borderColor: 'black',
      }}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;
