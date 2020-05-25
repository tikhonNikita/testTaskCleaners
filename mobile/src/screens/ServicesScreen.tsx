import React from 'react';
import Services from '../components/Services/index';

export default function ServicesScreen({ navigation }) {
  return (
    <Services
      services={navigation.state.params.services}
      getServices={navigation.state.params.getServices}
    />
  );
}
