import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';

import { setNavigator } from './src/navigationRef';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import AdminMainMenuScreen from './src/screens/AdminMainMenuScreen';
import UserMainMenuScreen from './src/screens/UserMainMenuScreen';
import DryersScreen from './src/screens/DryersScreen';
import ClientsScreen from './src/screens/ClientsScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import AddServiceScreen from './src/screens/AddServiceScreen';
import EditServiceScreen from './src/screens/EditServiceScreen';
import AddDryerScreen from './src/screens/AddDryerScreen';
import DryerScreen from './src/screens/DryerScreen';
import MyOrdersScreen from './src/screens/MyOrdersScreen';
import EditOrderScreen from './src/screens/EditOrderScreen';

const ResetPasswordStack = createStackNavigator({
  ResetPassword: ResetPasswordScreen,
});

const AdminStack = createStackNavigator({
  AdminMainMenu: AdminMainMenuScreen,
  Clients: {
    screen: ClientsScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  Orders: {
    screen: OrdersScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  Dryers: {
    screen: DryersScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  Services: {
    screen: ServicesScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  AddService: {
    screen: AddServiceScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  EditService: {
    screen: EditServiceScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  AddDryer: {
    screen: AddDryerScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  EditOrder: {
    screen: EditOrderScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
});

const UserStack = createStackNavigator({
  UserMainMenu: UserMainMenuScreen,
  Dryer: {
    screen: DryerScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  MyOrders: {
    screen: MyOrdersScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
});

const AuthorizationBottomTabs = createBottomTabNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      tabBarIcon: ({}) => {
        return <Icon name="sign-in-alt" size={20} color={'#e3923b'} />;
      },
    },
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      tabBarIcon: ({}) => {
        return <Icon name="user-plus" size={20} color={'#e3923b'} />;
      },
    },
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen,
    navigationOptions: {
      tabBarIcon: ({}) => {
        return <Icon name="question" size={20} color={'#e3923b'} />;
      },
    },
  },
});

const Switch = createSwitchNavigator({
  Authorization: AuthorizationBottomTabs,
  ResetPasswordStack: ResetPasswordStack,
  AdminStack: AdminStack,
  UserStack: UserStack,
});

const AppContainer = createAppContainer(Switch);

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async setupFonts() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.setupFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return <AppContainer ref={(navigator) => setNavigator(navigator)} />;
    } else {
      return <AppLoading />;
    }
  }
}
