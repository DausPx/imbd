import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './styles';

type Props = {
  searchText: string;
  placeholder: string;
  setSearchText: (value: string) => void;
};

const SearchInput = (props: Props) => {
  const {searchText, placeholder, setSearchText} = props;
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        value={searchText}
        placeholder={placeholder}
        onChangeText={text => setSearchText(text)}
        style={styles.input}
        autoCapitalize="none"
      />
    </View>
  );
};
export default SearchInput;
