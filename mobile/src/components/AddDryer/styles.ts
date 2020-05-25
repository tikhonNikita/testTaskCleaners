import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dryer: {
    alignItems: 'center',
  },
  services: {
    width: 300,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3f51b5',
    padding: 10,
    marginTop: 20,
  },
  button__text: {
    color: 'white',
  },
  dryer__name: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    paddingTop: '1%',
  },
  service__name: {
    paddingLeft: 5,
  },
  dryer__description: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    paddingTop: '1%',
  },
  dryer__inputName: {
    height: 60,
    width: '90%',
    fontSize: 30,
    textAlign: 'center',
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
  },
  dryer__inputDescription: {
    height: 100,
    width: '90%',
    fontSize: 20,
    paddingLeft: 10,
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
  },
  scrollview: {
    marginTop: 10,
    height: 120,
    width: 300,
  },
  scrollview__checkboxes: {
    width: 500,
  },
});
