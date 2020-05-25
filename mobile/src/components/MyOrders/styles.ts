import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  myOrders: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  myOrders__empty: {
    paddingTop: 40,
    fontSize: 40,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3f51b5',
    padding: 10,
    borderRadius: 10,
    width: 300,
  },
  button__text: {
    color: 'white',
  },
  myOrders__order: {
    flexDirection: 'column',
  },
});
