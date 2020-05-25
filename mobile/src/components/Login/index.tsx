import React, { useState } from 'react';
import { View, AsyncStorage, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text } from 'native-base';

import { navigate } from '../../navigationRef';
import { authentication, appURL } from '../../constants/constants';
import { styles } from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const loginUser = async () => {
    const res = await authentication.loginRequest(appURL + 'api/login', {
      email: email.trim(),
      password: password.trim(),
    });

    if (res.status !== 200) {
      setError(true);
    } else {
      await AsyncStorage.setItem('token', res.data.token);
      if (res.data.admin) {
        navigate('AdminMainMenu', {});
      } else {
        navigate('UserMainMenu', {
          userId: res.data.id,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
        });
      }
    }
  };

  return (
    <View style={styles.login}>
      <Text style={styles.login__header}>Welcome!</Text>
      <Text style={styles.login__header}>Log into your account</Text>
      <Text style={styles.login__email}>Your email</Text>
      <TextInput
        style={styles.login__inputEmail}
        onChangeText={(email: string) => {
          setError(false);
          setEmail(email);
        }}
        placeholder="user@email.com"
        value={email ? email : ''}
      />
      <Text style={styles.login__password}>Your password</Text>
      <TextInput
        style={styles.login__inputPassword}
        secureTextEntry={true}
        onChangeText={(password: string) => {
          setError(false);
          setPassword(password);
        }}
        placeholder="..."
        value={password ? password : ''}
      />
      {error && <Text style={styles.error}>Invalid credentials!</Text>}
      <View style={styles.login__submit}>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            await loginUser();
          }}
        >
          <Text style={styles.button__text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
