import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  signup: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    flexDirection: 'row',
  },
  signup__header: {
    fontSize: 30,
    color: 'black',
    paddingTop: 40,
  },
  signup__inputName: {
    height: 60,
    margin: 10,
    width: 150,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
  },
  signup__email: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    paddingTop: 20,
  },
  signup__name: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    paddingTop: '3%',
  },
  signup__inputEmail: {
    height: 60,
    width: '90%',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
  },
  signup__password: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    paddingTop: '5%',
  },
  signup__inputPassword: {
    height: 60,
    width: '90%',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  signup__submit: {
    paddingTop: '5%',
  },
  signup__checkboxText: {
    paddingLeft: '5%',
  },
  signup__invalidCredentials: {
    color: 'red',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3f51b5',
    padding: 10,
  },
  button__text: {
    color: 'white',
  },
});
