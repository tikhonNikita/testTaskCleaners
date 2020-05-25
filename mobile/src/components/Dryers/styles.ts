import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dryers__item: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dryers__description: {
    flexDirection: 'column',
  },
  dryer__text: { maxWidth: 200, paddingBottom: 10 },
  button: {
    alignItems: 'center',
    backgroundColor: '#3f51b5',
    padding: 10,
    marginTop: 1,
  },
  button__text: {
    color: 'white',
  },
  photo: {
    width: 150,
    height: 150,
  },
  scrollview: {
    width: 200,
    marginHorizontal: 10,
  },
});
