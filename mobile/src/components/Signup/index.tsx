import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { CheckBox, ListItem } from 'native-base';
import { Text } from 'native-base';

import { navigate } from '../../navigationRef';
import { validateEmail } from '../../helpers/validators';
import { authentication, appURL } from '../../constants/constants';
import { styles } from './styles';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [admin, setAdmin] = useState(false);
  const [error, setError] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const signupUser = async () => {
    const res = await authentication.signupRequest(appURL + 'api/signup', {
      firstName,
      lastName,
      email: email.trim(),
      password: password.trim(),
      admin,
    });

    if (res.status !== 200) {
      setError(true);
    } else {
      navigate('Login', {});
    }
  };

  return (
    <View style={styles.signup}>
      <Text style={styles.signup__header}>Create new account</Text>
      <View style={styles.name}>
        <View>
          <Text style={styles.signup__name}>Your first name</Text>
          <TextInput
            style={styles.signup__inputName}
            onChangeText={(name: string) => {
              setFirstName(name);
            }}
            placeholder="Sam"
            value={firstName ? firstName : ''}
          />
        </View>
        <View>
          <Text style={styles.signup__name}>Your last name</Text>
          <TextInput
            style={styles.signup__inputName}
            onChangeText={(name: string) => {
              setLastName(name);
            }}
            placeholder="Bridges"
            value={lastName ? lastName : ''}
          />
        </View>
      </View>
      <Text style={styles.signup__email}>Your email</Text>
      <TextInput
        style={styles.signup__inputEmail}
        onChangeText={(email: string) => {
          setError(false);
          setEmail(email);
        }}
        onBlur={() => {
          if (!validateEmail(email.trim()) && email.length !== 0) {
            setInvalidEmail(true);
          } else {
            setInvalidEmail(false);
          }
        }}
        placeholder="user@email.com"
        value={email ? email : ''}
      />
      {invalidEmail && (
        <Text style={styles.signup__invalidCredentials}>Invalid email</Text>
      )}
      <Text style={styles.signup__password}>Your password</Text>
      <TextInput
        style={styles.signup__inputPassword}
        secureTextEntry={true}
        onChangeText={(password: string) => {
          setError(false);
          setPassword(password);
        }}
        onBlur={() => {
          if (password.length < 6) {
            setInvalidPassword(true);
          } else {
            setInvalidPassword(false);
          }
        }}
        placeholder="..."
        value={password ? password : ''}
      />
      {invalidPassword && (
        <Text style={styles.signup__invalidCredentials}>
          Minimum password length: 6
        </Text>
      )}
      <ListItem
        style={{ borderBottomWidth: 0 }}
        onPress={() => setAdmin(!admin)}
      >
        <CheckBox checked={admin} />
        <Text style={styles.signup__checkboxText}>Signup as admin?</Text>
      </ListItem>
      {error && (
        <Text style={styles.signup__invalidCredentials}>
          Something went wrong
        </Text>
      )}
      <View style={styles.signup__submit}>
        <TouchableOpacity
          style={styles.button}
          disabled={!invalidEmail && password.length === 0}
          onPress={async () => {
            await signupUser();
          }}
        >
          <Text style={styles.button__text}>Create account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
