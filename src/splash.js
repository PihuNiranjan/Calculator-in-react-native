import React from "react";
import { View, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import Ionicons from '@expo/vector-icons/Ionicons';
import color from "./color";
import Bottomtabs from "./bottomnav";

export default function Splash({ navigation }) {
    const check = () => {
        navigation.navigate("main");
        console.log("success")      
    };
    return (
       
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: color.black  }}>
                <Animatable.Image
                    animation="zoomIn"
                    // onAnimationEnd={check}
                    duration={2000}
                    resizeMode={"contain"}
                    source={require("../assets/logo.jpg")}
                    style={{ height: 200, width: 200 ,marginBottom:10}}
                />
                <Animatable.Text
                    animation="zoomInUp"
                duration={3000}
                style={{ fontSize: 40, color: color.white}}
                >
                    Welcome 
                </Animatable.Text>
            <Animatable.Text
                animation="zoomInUp"
                duration={3000}
                onAnimationEnd={check}
                style={{ fontSize: 15, color: color.white }}
            >
                All in one Calc
            </Animatable.Text>
            </View>
 
    );
}
