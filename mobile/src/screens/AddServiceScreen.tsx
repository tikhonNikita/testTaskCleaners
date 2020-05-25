import React from 'react';
import AddService from '../components/AddService/index';

export default function AddServiceScreen({ navigation }) {
  return <AddService dryerId={navigation.state.params.dryerId} />;
}
