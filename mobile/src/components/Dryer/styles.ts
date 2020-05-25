import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dryer: {
    alignItems: 'center',
  },
  dryers__item: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dryers__description: {
    flexDirection: 'column',
  },
  dryer__text: { maxWidth: 300, fontSize: 22 },
  button: {
    alignItems: 'center',
    backgroundColor: '#3f51b5',
    padding: 10,
    marginTop: 20,
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
    marginHorizontal: 20,
  },
  services__header: {
    paddingTop: 20,
    fontSize: 20,
  },
  services: {
    width: 300,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  service__text: {
    maxWidth: 100,
  },
  error: {
    color: 'red',
  },
});
