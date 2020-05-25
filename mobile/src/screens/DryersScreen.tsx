import React from 'react';
import Dryers from '../components/Dryers/index';

export default function DryersScreen({ navigation }) {
  return (
    <Dryers
      dryers={navigation.state.params.dryers}
      services={navigation.state.params.services}
    />
  );
}
