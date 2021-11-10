import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text, Image, TouchableOpacity, FlatList, ScrollView, Modal
} from "react-native";
import axios from "axios";
import Product from "./components/Product";
import Icon from "react-native-vector-icons/MaterialIcons";
import Categorycomponent from "./components/Categorycomponent"
import { addToCart } from "./Services/Actions/Actions";
import { connect } from "react-redux";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleModal: false
    }
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   return nextProps.counter!=this.props.counter
  // }
  render() {
    let screenWidth = Dimensions.get("window").width;
    let screenHeight = Dimensions.get("window").height;
    const { navigation } = this.props

    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <View>

          <Modal
            visible={this.state.toggleModal}
            animationType={"slide"}
            transparent={true}>


            <ScrollView
              style={{
                backgroundColor: "#97bde8",
                flex: 1,
              }}>
              <TouchableOpacity
                onPress={() => this.setState({ toggleModal: !this.state.toggleModal })}
                style={{ height: 50, width: screenWidth, backgroundColor: "black" }}
              >
                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                  <Icon name="chevron-left" size={32} color={"white"} />
                  <Text style={{ ...styles.text2, color: "white" }}>Cart Details</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.main}>

                <View style={{ flex: 2 }}>
                  <Text style={styles.text2}>Deliver to Priya,122001, Plot No.6, IIFC Building, Sector 19, Delhi</Text>
                </View>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => { null }}>
                  <Text style={{ ...styles.text2, color: "red" }}>change</Text>
                </TouchableOpacity>
              </View>
              <View style={{ ...styles.main, height: 80, paddingHorizontal: 10 }}>
                <Icon name="ac-unit" size={35} color={"red"} />

                <Text style={styles.text2}> Know Your Available Offers</Text>

              </View>
              <View>
                <Categorycomponent />
              </View>


            </ScrollView>

          </Modal>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon name="shopping-cart" size={35} color="#d60618" style={{ margin: 8 }} />
          <Text style={styles.txt}> Welcome to CartApp</Text>

          <TouchableOpacity style={styles.btn} onPress={() =>
            this.setState({ toggleModal: true })
          }>
            <View style={styles.view}>
              <Text style={{ ...styles.btnTxt, color: "red", fontSize: 20, textAlign: "center" }}>{this.props.counter}</Text>
            </View>
            <Text style={styles.btnTxt}>View Cart</Text>
          </TouchableOpacity>
        </View>



        <Product navigation={this.props.navigation} />
      </View>
    );


  }
}
const styles = StyleSheet.create({

  txt: {
    fontFamily: "Rubik-Bold",
    fontSize: 20,
    marginHorizontal: 10,
    marginTop: 15,
    color: "black"
  },
  btn: {
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    width: 80, height: 30,
    paddingVertical: 6,
    alignSelf: "flex-end",
    elevation: 8,
    marginTop: 5
  },
  btnTxt: {
    fontFamily: "Rubik-Regular",
    fontSize: 13,
    color: "white",
    textAlign: "center"
  },
  main: {
    flexDirection: "row", margin: 10, backgroundColor: "white",
    height: 100, borderWidth: 1, borderColor: "black", paddingVertical: 10
  },
  text2: {
    fontFamily: "Rubik-Regular",
    color: "black",
    fontSize: 16,
    margin: 10,
    textAlign: "justify"
  },
  view: {
    zIndex: 1, position: "absolute", bottom: 20,
    left: 30, borderRadius: 50, backgroundColor: "green",
    borderWidth: 1, height: 26, width: 26
  }

});
const mapStateToProps = (state) => {
  // console.log("categorycomponent",state)
  return {
    cardData: state.cardItems.cardData,
    counter: state.cardItems.counter,
  }
}


const mapDispatchToProps = {
  addToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
