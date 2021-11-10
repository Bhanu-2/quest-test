import React from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Categorycomponent from "./Categorycomponent"

export default class Home extends React.Component {
    constructor(props) {
        super(props);

       


    }


    render() {
        const pass = this.props.route.params.pass
        const { navigation } = this.props;
        let screenWidth = Dimensions.get("window").width;
        let screenHeight = Dimensions.get("window").height;
        return (
            <View style={styles.container}>
               
                <View style={{ flexDirection: "row", marginTop: 6 }}>
                    <Icon name="chevron-left" size={35} color={"black"} onPress={() => {
                        navigation.replace("Home");
                    }} />
                    <Text style={styles.txtTop}>Products</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <Image source={{ uri: pass.image }} style={{ ...styles.imageStyle, width: screenWidth }} />
                </View>
                <View style={styles.wrapper}>
                   
                    <Text style={styles.txt}>{pass.category} Item</Text>
                    <Text style={styles.text}>{pass.title}</Text>
                    <Text style={styles.txt}> Price: ₹{pass.price}</Text>

                    <Text style={styles.txt}> Product Detail:</Text>
                    <Text style={styles.text}>{pass.description}</Text>

                </View>
            </View>
        );


    }
}
const styles = StyleSheet.create({
    imageStyle: {
        borderColor: "black",
        borderWidth: 1,
        resizeMode: "cover",
        height: 400,
        resizeMode: "stretch",
        padding: 20,

    },
    container: {
        flex: 1,
        backgroundColor: "#97bde8",
    },
    text: {
        fontFamily: "Rubik-Regular",
        color: "black",
        fontSize: 16,
        margin: 10,
        textAlign: "justify"
    },
    wrapper: {
        padding: 15,

    },
    
    txt: {
        fontFamily: "Rubik-Bold",
        color: "black",
        fontSize: 18,
        margin: 8,
        textAlign: "justify"
    },
   
    txtTop: {
        fontSize: 24,
        color: "black",
        fontFamily: "Rubik-Bold", marginLeft: 20, marginTop: 5
    },
   

});
