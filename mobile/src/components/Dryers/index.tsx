import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Text, List, ListItem } from 'native-base';

import { navigate } from '../../navigationRef';
import { admin, appURL } from '../../constants/constants';
import { IDryer, DryersProps } from '../../types/types';
import { styles } from './styles';

const Dryers = (props: DryersProps) => {
  const [dryers, setDryers] = useState(props.dryers);

  const deleteDryer = async (dryerId: string) => {
    const res = await admin.deleteDryer(appURL + 'api/deleteDryer', {
      id: dryerId,
    });

    if (res.status === 200) {
      const newDryers = dryers.filter((dryer: IDryer) => dryer.id !== dryerId);
      setDryers([...newDryers]);
    }
  };

  const deleteDryerVerification = (id: string) =>
    Alert.alert(
      'Deleting dryer',
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
            await deleteDryer(id);
          },
        },
      ],
      { cancelable: false }
    );

  const formattedDryerData = (dryer: IDryer) => {
    return (
      'Dryer name:\n' +
      dryer.name +
      '\n\nDryer description:\n' +
      dryer.description
    );
  };

  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate('AddDryer', {})}
          >
            <Text style={styles.button__text}>Add dryer</Text>
          </TouchableOpacity>
          <List>
            {dryers.map((dryer: IDryer) => {
              return (
                <ListItem key={dryer.id} style={styles.dryers__item}>
                  <View style={styles.dryers__description}>
                    <Text style={styles.dryer__text}>
                      {formattedDryerData(dryer)}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        navigate('AddService', { dryerId: dryer.id });
                      }}
                      style={styles.button}
                    >
                      <Text style={styles.button__text}>Add services</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => deleteDryerVerification(dryer.id)}
                      style={styles.button}
                    >
                      <Text style={styles.button__text}>Delete dryer</Text>
                    </TouchableOpacity>
                  </View>

                  <ScrollView style={styles.scrollview}>
                    <List
                      horizontal={true}
                      dataArray={dryer.images}
                      renderRow={(image: string) => (
                        <ListItem key={image}>
                          <Image
                            style={styles.photo}
                            source={{ uri: appURL + image }}
                          />
                        </ListItem>
                      )}
                    ></List>
                  </ScrollView>
                </ListItem>
              );
            })}
          </List>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Dryers;
