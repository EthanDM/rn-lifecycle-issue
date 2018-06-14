import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
        <Button
          title="Go to Component A"
          onPress={() => this.props.navigation.navigate('ComponentA')}
        />
        <Button
          title="Go to Component B"
          onPress={() => this.props.navigation.navigate('ComponentB')}
        />
      </View>
    );
  }
}

class ComponentA extends React.Component {
  componentDidMount() {
    console.log('COMPONENT A MOUNTED')
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Component A</Text>
      </View>
    );
  }
}

class ComponentB extends React.Component {
  componentDidMount() {
    console.log('COMPONENT B MOUNTED')
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Component B</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home,
    ComponentA,
    ComponentB
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}