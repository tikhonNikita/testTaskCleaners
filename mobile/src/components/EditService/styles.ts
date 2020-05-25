import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  service: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '40%',
  },
  service__item: {
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3f51b5',
    padding: 5,
  },
  button__text: {
    color: 'white',
  },
  service__name: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    paddingTop: '5%',
  },
  service__price: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    paddingTop: '5%',
  },
  service__inputName: {
    height: 60,
    width: '90%',
    fontSize: 30,
    textAlign: 'center',
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  service__inputPrice: {
    height: 60,
    width: '90%',
    fontSize: 30,
    textAlign: 'center',
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});
