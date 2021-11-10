import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux"
import RootReducer from "./screens/Services/Reducers/RootReducer"
import { createStore } from 'redux';
import App from "./screens/App";
const Intialstate = {}

const store = createStore(RootReducer, Intialstate)


class index extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

// if (Config.BUILD_MODE == "PROD" || Config.BUILD_MODE == "STAGE") {
//   CartApp = CodePush(codePushOptions)(CartApp);
// }
AppRegistry.registerComponent("CartApp", () => index);
