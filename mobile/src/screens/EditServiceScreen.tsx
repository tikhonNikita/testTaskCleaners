import React from 'react';
import EditService from '../components/EditService/index';

export default function EditServiceScreen({ navigation }) {
  return <EditService service={navigation.state.params.service} />;
}
