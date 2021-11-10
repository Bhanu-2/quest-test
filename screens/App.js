import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import FullView from "./components/FullView";
import Product from "./components/Product";
const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Product"
            component={Product}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FullView"
            component={FullView}
            options={{ headerShown: false }}
          />


        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

