import React from 'react';
import EditOrder from '../components/EditOrder/index';

export default function EditOrderScreen({ navigation }) {
  const order = navigation.state.params.order;
  const services = navigation.state.params.services.map((service) => {
    if (service.id === order.serviceId) service.checked = true;
    return service;
  });
  return <EditOrder order={order} services={services} />;
}
