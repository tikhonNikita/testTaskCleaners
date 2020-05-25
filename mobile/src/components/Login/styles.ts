import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  login: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  login__header: {
    fontSize: 30,
    color: 'black',
    paddingTop: '15%',
  },
  login__email: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    paddingTop: '10%',
  },
  login__inputEmail: {
    height: 60,
    width: '90%',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  login__password: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    paddingTop: '5%',
  },
  login__inputPassword: {
    height: 60,
    width: '90%',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  login__submit: {
    paddingTop: '5%',
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
  error: {
    color: 'red',
  },
});
