import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  userPanel: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  userPanel__money: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 20,
  },
  userPanel__dryersText: {
    fontSize: 25,
  },
  userPanel__scrollview: {
    height: 200,
  },
  userPanel__text: {
    fontSize: 30,
    maxWidth: 150,
  },
  button: {
    marginTop: '10%',
    alignItems: 'center',
    backgroundColor: '#3f51b5',
    padding: 10,
    borderRadius: 10,
    width: 300,
  },
  button__text: {
    color: 'white',
  },
  button__headerText: {
    fontSize: 40,
    paddingTop: 40,
  },
});
