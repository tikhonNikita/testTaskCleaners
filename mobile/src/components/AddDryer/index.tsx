import React, { useState } from 'react';
import { View, Image, SafeAreaView, ScrollView } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'native-base';
import * as ImagePicker from 'expo-image-picker';

import { navigate } from '../../navigationRef';
import { appURL, admin } from '../../constants/constants';
import { styles } from './styles';

const AddDryer = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [servicesDescription, setServicesDescription] = useState('');
  const [images, setImages] = useState([]);

  const handleChoosePhoto = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 1,
      });
      if (!result.cancelled) {
        setImages([...images, result]);
      }
    } catch (e) {
      return e;
    }
  };

  const addDryer = async () => {
    const body = formData();
    const res = await admin.createDryer(appURL + 'api/createDryer', body);

    if (res.status === 200) {
      navigate('AddService', { dryerId: res.data.id });
    }
  };

  const formData = () => {
    let formData = new FormData();
    let formattedImages = [];

    images.forEach((image) => {
      let localUri = image.uri;
      let filename = localUri.split('/').pop();
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      formattedImages.push({ uri: localUri, name: filename, type });
      formData.append('file', { uri: localUri, name: filename, type });
    });

    formData.append('name', name);
    formData.append('description', description);
    formData.append('servicesDescription', servicesDescription);

    return formData;
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.dryer}>
          <Text style={styles.dryer__name}>New dryer name</Text>
          <TextInput
            style={styles.dryer__inputName}
            onChangeText={(name) => setName(name)}
            placeholder="Super dryer"
            value={name ? name : ''}
          />
          <Text style={styles.dryer__description}>New dryer description</Text>
          <TextInput
            multiline={true}
            style={styles.dryer__inputDescription}
            onChangeText={(description) => {
              setDescription(description);
            }}
            placeholder="..."
            value={description ? description : ''}
          />
          <Text style={styles.dryer__description}>New dryer services</Text>
          <TextInput
            multiline={true}
            style={styles.dryer__inputDescription}
            onChangeText={(description) => {
              setServicesDescription(description);
            }}
            placeholder="..."
            value={servicesDescription ? servicesDescription : ''}
          />
          <ScrollView style={styles.scrollview} horizontal={true}>
            {images.map((photo) => {
              return (
                <Image
                  key={photo.uri}
                  source={{ uri: photo.uri }}
                  style={{ width: 100, height: 100, margin: 10 }}
                />
              );
            })}
          </ScrollView>
          <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
            <Text style={styles.button__text}>Choose images</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              await addDryer();
            }}
          >
            <Text style={styles.button__text}>Next step</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddDryer;
