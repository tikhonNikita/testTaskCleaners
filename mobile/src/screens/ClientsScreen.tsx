import React from 'react';
import Clients from '../components/Clients/index';
import { IClient } from '../types/types';

export default function ClientsScreen({ navigation }) {
  const clients = navigation.state.params.clients.filter(
    (client: IClient) => !client.isAdmin
  );
  return <Clients clients={clients} />;
}
