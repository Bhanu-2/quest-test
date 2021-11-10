import React from "react";
import {
    View,
    StyleSheet,
    Dimensions, Modal,
    Text, Image, TouchableOpacity, FlatList, ActivityIndicator, SafeAreaView
} from "react-native";
import axios from "axios";
import Icon from "react-native-vector-icons/MaterialIcons";
import Categorycomponent from "./Categorycomponent"
import { connect } from "react-redux";
import { addToCart } from "../Services/Actions/Actions"

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            progress: false,
            toggleModal: false,
            cart:{}
        };
    }



    componentDidMount() {
        this.setState({ progress: true })
        axios
            .get(
                `https://fakestoreapi.com/products/category/jewelery`
            )
            .then((res) => {
                if (res.data) {
                    console.log(res.data)
                    let results = [];
                    for (var data in res.data) {
                        results.push(res.data[data]);
                    }
                    this.setState({ data: results, progress: false })
                }
                // console.log("bhanu:", this.state.data)

            }).catch((e) => { "error" })

    }
    render() {
        let screenWidth = Dimensions.get("window").width;
        let screenHeight = Dimensions.get("window").height;
        const { navigation } = this.props

        return (
            <SafeAreaView style={styles.container}>
                {this.state.progress ? (
                    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>

                        <Text style={{ fontSize: 20, fontFamily: "Rubik-Regular", color: "black" }}>Loading...</Text>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>

                ) : (

                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item) => item.id}
                        renderItem={(item) => {
                            return (
                                <TouchableOpacity onPress={() => { navigation.navigate("FullView", { pass: item.item }) }} style={{ ...styles.imageCover, width: screenWidth }}>

                                    <Image source={{ uri: item.item.image }} style={{ ...styles.imageStyle }} />
                                    <Text style={styles.text}>{item.item.title}</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ flex: 0.9, marginTop: 6 }}>
                                            <Text style={styles.text}>Price: ₹ {item.item.price}</Text>
                                        </View>
                                        <TouchableOpacity style={styles.btn} onPress={() => this.props.addToCart({item:item.item,count:1})

                                        }>
                                            <Text style={styles.btnTxt}>Add To Cart</Text>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                        }

                    />
                )}
            </SafeAreaView>


        );


    }
}
const styles = StyleSheet.create({
    imageStyle: {
        margin: 10,
        height: 200,
        padding: 8,
        resizeMode: "stretch",

    },
    wrap: {
        flexDirection: "row",
        elevation: 10


    },
    imageCover: {
        width: 200,
        height: 320,
        backgroundColor: "#d66d80",
        borderColor: "black",
        borderWidth: 2,
        padding: 10,
        marginVertical: 10



    },
    container: {
        flex: 1,
    },
    txt: {
        fontFamily: "Rubik-Bold",
        fontSize: 30
    },
    text: {
        fontFamily: "Rubik-Regular",
        fontSize: 15,
        color: "black"
    },
    btn: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        width: 95, height: 35,
        paddingVertical: 6,
        alignSelf: "flex-end",
        elevation: 8
    },
    btnTxt: {
        fontFamily: "Rubik-Regular",
        fontSize: 15,
        color: "black",
        textAlign: "center"
    },

});
const mapStateToProps = (state) => {
    // console.log("product",state)
    return {
        cardData: state.cardItems.cardData
    }
}


const mapDispatchToProps = {
    addToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);