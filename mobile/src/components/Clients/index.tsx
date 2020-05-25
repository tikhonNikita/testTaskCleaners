import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { Text, List, ListItem } from 'native-base';

import { navigate } from '../../navigationRef';
import { appURL, admin } from '../../constants/constants';
import { ClientsProps, IClient } from '../../types/types';
import { styles } from './styles';

const Clients = (props: ClientsProps) => {
  const deleteClient = async (id: string) => {
    const res = await admin.deleteClient(appURL + 'api/deleteUser/' + id, {});

    if (res.status === 200) {
      navigate('AdminMainMenu', {});
    }
  };

  const deleteClientVerification = (id: string) =>
    Alert.alert(
      'Deleting client',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            await deleteClient(id);
          },
        },
      ],
      { cancelable: false }
    );

  return (
    <View>
      <List>
        {props.clients.map((client: IClient) => {
          return (
            <ListItem key={client.email} style={styles.clients__item}>
              <Text>{client.email}</Text>
              <TouchableOpacity
                onPress={() => deleteClientVerification(client.id)}
                style={styles.button}
              >
                <Text style={styles.button__text}>Delete client</Text>
              </TouchableOpacity>
            </ListItem>
          );
        })}
      </List>
    </View>
  );
};

export default Clients;
