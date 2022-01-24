import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemWraper: {
    maxWidth: '100%',
    height: 150,
    borderWidth: 1,
    borderColor: 'black',
    margin: 4,
    display: 'flex',
    flexDirection: 'row',
  },
  image: {height: 140, width: 100, margin: 4},
  description: {justifyContent: 'center', flex: 1},
});

export default styles;
