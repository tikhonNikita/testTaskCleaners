import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  order: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3f51b5',
    padding: 10,
    margin: 20,
  },
  button__text: {
    color: 'white',
  },
  name: {
    flexDirection: 'row',
  },
  container: { flex: 1 },
  order__date: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  order__name: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    paddingTop: '3%',
  },
  order__inputName: {
    height: 60,
    margin: 10,
    width: 150,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
  },
  order__datePicker: {
    width: 200,
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
  },
  order__price: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    paddingTop: '3%',
  },
  order__inputPrice: {
    height: 60,
    margin: 10,
    width: 150,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
  },
  services__header: {
    paddingTop: 20,
    fontSize: 20,
  },
  services: {
    width: 250,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  service__text: {
    maxWidth: 100,
  },
  order__listItem: {
    width: 200,
    justifyContent: 'space-between',
  },
  order__status: {
    fontSize: 20,
    paddingTop: 20,
  },
  order__textarea: {
    width: 300,
  },
  error: {
    color: 'red',
  },
});
