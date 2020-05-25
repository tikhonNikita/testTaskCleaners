import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  forgot: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgot__header: {
    fontSize: 30,
    color: 'black',
    paddingTop: '50%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3f51b5',
    padding: 10,
    marginTop: 10,
  },
  button__text: {
    color: 'white',
  },
  forgot__inputEmail: {
    marginTop: '5%',
    height: 60,
    width: '90%',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  forgot__submit: {
    paddingTop: '5%',
  },
  forgot__footer: {
    paddingTop: '10%',
  },
});
