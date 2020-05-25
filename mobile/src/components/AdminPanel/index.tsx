import React from 'react';
import { View, AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'native-base';

import { navigate } from '../../navigationRef';
import { getServices, getDryers } from '../../helpers/apiCalls';
import { admin, appURL } from '../../constants/constants';
import { styles } from './styles';

const AdminPanel = () => {
  const getUsers = async () => {
    const res = await admin.getUsers(appURL + 'api/getUsers');

    return res.status === 200 ? res.data : [];
  };

  const getOrders = async () => {
    const res = await admin.getOrders(appURL + 'api/orders');

    return res.status === 200 ? res.data : [];
  };

  return (
    <View style={styles.adminPanel}>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          await AsyncStorage.clear();
          navigate('Login', {});
        }}
      >
        <Text style={styles.button__text}>Logout</Text>
      </TouchableOpacity>
      <Text style={styles.button__headerText}>Welcome, Admin!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          const clients = await getUsers();
          navigate('Clients', { clients: clients });
        }}
      >
        <Text style={styles.button__text}>Show all clients</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          const orders = await getOrders();
          navigate('Orders', { orders: orders });
        }}
      >
        <Text style={styles.button__text}>Show all orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          const services = await getServices();
          navigate('Services', {
            services: services,
            getServices: getServices,
          });
        }}
      >
        <Text style={styles.button__text}>Show all services</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          const dryers = await getDryers();
          const services = await getServices();
          navigate('Dryers', { dryers: dryers, services: services });
        }}
      >
        <Text style={styles.button__text}>Show all dryers</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdminPanel;
