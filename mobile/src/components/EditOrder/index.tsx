import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {
  Text,
  ListItem,
  CheckBox,
  DatePicker,
  Radio,
  Textarea,
} from 'native-base';

import { navigate } from '../../navigationRef';
import { admin, appURL } from '../../constants/constants';
import { IService, EditOrderProps } from '../../types/types';
import { styles } from './styles';

const EditOrder = (props: EditOrderProps) => {
  const [price, setPrice] = useState(props.order.price);
  const [firstName, setFirstName] = useState(props.order.firstName);
  const [lastName, setLastName] = useState(props.order.lastName);
  const [services, setServices] = useState(props.services);
  const [date, setDate] = useState(new Date(props.order.date));
  const [status, setStatus] = useState('Ready');
  const [returnDescription, setReturnDescription] = useState('');

  const checkService = (service: IService) => {
    const newServices = services;

    newServices.forEach((item: IService) => {
      if (item.id === service.id && !item.checked) {
        item.checked = true;
      } else {
        item.checked = false;
      }
    });

    setServices([...newServices]);
  };

  const editDate = (newDate: Date) => {
    setDate(newDate);
  };

  const editOrder = async (id: string) => {
    const selectedService = services.find((service) => service.checked);
    const res = await admin.editOrder(appURL + 'api/editOrder', {
      id,
      firstName,
      lastName,
      serviceId: selectedService.id,
      price,
      date,
      status,
      returnDescription,
    });

    if (res.status === 200) {
      navigate('AdminMainMenu', {});
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.order}>
          <View style={styles.name}>
            <View>
              <Text style={styles.order__name}>Edit first name</Text>
              <TextInput
                style={styles.order__inputName}
                onChangeText={(firstName: string) => {
                  setFirstName(firstName);
                }}
                value={firstName}
              />
            </View>
            <View>
              <Text style={styles.order__name}>Edit last name</Text>
              <TextInput
                style={styles.order__inputName}
                onChangeText={(lastName: string) => {
                  setLastName(lastName);
                }}
                value={lastName}
              />
            </View>
          </View>

          <Text style={styles.order__date}>Edit date</Text>
          <View style={styles.order__datePicker}>
            <DatePicker
              defaultDate={new Date(props.order.date)}
              minimumDate={new Date()}
              maximumDate={new Date(2025, 12, 31)}
              locale={'ru'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'default'}
              placeHolderText="DD/MM/YYYY"
              onDateChange={editDate}
            />
          </View>
          <Text style={styles.order__status}>Edit status</Text>
          <ListItem
            style={styles.order__listItem}
            onPress={() => {
              setStatus('Ready');
            }}
          >
            <Text>Ready</Text>
            <Radio
              selected={status === 'Ready'}
              onPress={() => {
                setStatus('Ready');
              }}
            />
          </ListItem>
          <ListItem
            style={styles.order__listItem}
            onPress={() => {
              setStatus('Return');
            }}
          >
            <Text>Return</Text>
            <Radio
              selected={status === 'Return'}
              onPress={() => {
                setStatus('Return');
              }}
            />
          </ListItem>
          {status === 'Return' && (
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Issue description"
              underline
              style={styles.order__textarea}
              onChangeText={(text: string) => setReturnDescription(text)}
            />
          )}
          <Text style={styles.order__price}>Edit price</Text>
          <TextInput
            style={styles.order__inputPrice}
            keyboardType="phone-pad"
            onChangeText={(price: string) => {
              if (/^\d+$/.test(price) || price === '') {
                setPrice(parseFloat(price));
              }
            }}
            placeholder="..."
            value={price.toString()}
          />
          <Text style={styles.services__header}>Edit service</Text>
          {props.services.map((service: IService) => {
            return (
              <ListItem
                key={service.id}
                style={styles.services}
                onPress={() => {
                  checkService(service);
                }}
              >
                <CheckBox
                  checked={service.checked}
                  onPress={() => {
                    checkService(service);
                  }}
                />
                <Text style={styles.service__text}>{service.name}</Text>
              </ListItem>
            );
          })}
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              await editOrder(props.order.id);
              navigate('AdminMainMenu', {});
            }}
          >
            <Text style={styles.button__text}>Edit order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditOrder;
