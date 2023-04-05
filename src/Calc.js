// import React from "react";
// import { View,Text } from "react-native";
// import color from "./color";

// export default function Calc (){
//     return(
//         <View style={{flex:1,alignItems:"center", justifyContent:"center" ,backgroundColor:color.white}}>
//             <Text >
//                 this is Calculator
//             </Text>
//         </View>
//     )
// }

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import color from './color';

const Calc = () => {
    const [result, setResult] = useState('0');
    const [input, setInput] = useState('');

    const handleButtonPress = (value) => {
        setInput(input + value.toString());
    };

    const handleEqualPress = () => {
        try{

            setResult(eval(input).toString());
        }
        catch{
            setResult("Enter valid expression or value");
        }
    };

    const handleClearPress = () => {
        setInput('');
        setResult('0');
    };

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.headtext}>Calculator</Text>
            </View>
            <View style={styles.result}>
                <Text style={styles.resultText}>{result}</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.inputText}>{input}</Text>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(7)}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(8)}>
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(9)}>
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('/')}>
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(4)}>
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(5)}>
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(6)}>
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('*')}>
                    <Text style={styles.buttonText}>*</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(1)}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(2)}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(3)}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('-')}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(0)}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress("00")}>
                    <Text style={styles.buttonText}>00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('.')}>
                    <Text style={styles.buttonText}>.</Text>
                </TouchableOpacity>
               
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('+')}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.clearButton} onPress={handleClearPress}>
                    <Text style={styles.clearButtonText}>Clear</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.clearButton} onPress={handleEqualPress}>
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
            </View>
            {/* <TouchableOpacity style={styles.clearButton} onPress={handleClearPress}>
                <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity> */}
        </View>
    )

}

export default Calc;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.black,
        alignItems: 'center',
        paddingTop: 40
        // justifyContent: 'center',
        // paddingHorizontal:15
    },
    head:{
        width:"100%",
        alignItems:"center",
        paddingBottom:10,
        marginBottom:20,
        borderBottomWidth:2,
        borderColor:color.white    
      
    },
    headtext:{
        fontSize:30,
        fontWeight:"bold",
        color:color.yellow
    },
    result:{       
        width:"100%",        
        height:80,
        alignItems:"flex-end",
        paddingHorizontal: 15
   

    },
    resultText:{
        color:color.white,
        fontSize: 40,
        fontWeight:"bold",
    },

    input: {
        width: "100%",
        height: 50,
        alignItems: "flex-end",
        paddingHorizontal: 10,

    },
    inputText: {
        color: color.white,
        fontSize: 25
    },

    buttonRow:{
        flexDirection:"row",
        paddingHorizontal: 15
        // width:"100%"
    },

     button:{
        height:75,
        width:75,
        borderWidth:1,
        borderColor:color.black,
        // backgroundColor:color.white,
         backgroundColor: "rgb(216 255 255)",
        margin:5,
        borderRadius:20,
        elevation:1,
        justifyContent:"center",
        alignItems:"center",
     },
     buttonText: {
        color:color.black,
        fontSize:25,
        fontWeight:"bold"
     },
     clearButton:{
         height: 75,
         width: "48%",
         borderWidth: 1,
         borderColor: color.black,
         backgroundColor: "rgb(216 255 255)",
         margin: 5,
         borderRadius: 10,
         justifyContent: "center",
         alignItems: "center",
     },
     clearButtonText:{
         color: color.black,
         fontSize: 25,
         fontWeight: "bold"
     }
    })
