import React from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    Image,
    ScrollView,TouchableOpacity
} from "react-native";
import { addToCart,counter } from "../Services/Actions/Actions";
import { connect } from "react-redux";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

var count=0;
class Categorycomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            item:{}
        }
    }
    add(item){
        count++;
        this.setState({item:item})
        this.props.addToCart({item:item})
        this.props.counter(count)

    }
    componentDidMount() {
        const pass = this.props.cardData
        var _data = []
        for (var i in pass) {
            _data.push(pass[i])
        }
        this.setState({ data: _data })
    }
    render() {
        console.log("categorycomponent", this.props.cardData)
        const { navigation } = this.props;
        let screenWidth = Dimensions.get("window").width;
        let screenHeight = Dimensions.get("window").height;
        return (
            <ScrollView style={{}}>
                <Text style={styles.txt}>You have Amazing Items in Your Cart 😃 </Text>
                {this.props.cardData ?
                    this.state.data.map(pass => (
                        <View key={pass.id}>
                            <Image source={{ uri: pass.image }} style={{ ...styles.imageStyle, width: screenWidth }} />
                            <View style={styles.wrapper}>

                                <Text style={styles.text}>{pass.title}</Text>
                                <Text style={styles.txt}> Price: ₹{pass.price}</Text>
                                <Text style={styles.text}>{pass.description}</Text>
                                <Text style={{ ...styles.text, fontSize: 25, color: "red" }}>In cart</Text>

                                <View flexDirection="row">
                                    <TouchableOpacity onPress={() => this.add(pass)} style={{ height: 35, width: 50, backgroundColor: "white" }}>
                                        <Text style={{ ...styles.text, fontSize: 25, color: "red",margin:0 }}>+</Text>
                                    </TouchableOpacity>
                                    <Text style={{ ...styles.text, fontSize: 25, color: "red" }}>{pass.count}</Text>
                                    <TouchableOpacity onPress={() => {this.props.addToCart({item:pass})}} style={{ height: 35, width: 50, backgroundColor: "white" }}>
                                        <Text style={{ ...styles.text, fontSize: 25, color: "red",margin:0}}>-</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))
                    : null}

            </ScrollView>
        );


    }
}
const styles = StyleSheet.create({
    imageStyle: {
        borderColor: "black",
        borderWidth: 1,
        margin: 10,
        resizeMode: "contain",
        height: 300

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
});
const mapStateToProps = (state) => {
    // console.log("categorycomponent",state)
    return {
        cardData: state.cardItems.cardData
    }
}


const mapDispatchToProps = {
    addToCart,counter
}
export default connect(mapStateToProps, mapDispatchToProps)(Categorycomponent);
