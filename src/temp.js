import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { Picker } from "@react-native-picker/picker";
import color from "./color";

export default function TempCalc() {
    const [from, setfrom] = useState('c');
    const [to, setto] = useState('');
    const [input, setinput] = useState(0)
    const [show, setShow] = useState(false);
    const [output, setoutput] = useState(0);

    const calculate = ()=>{

        if (from === 'c' && to === 'f') {
            setoutput((input * 9 / 5) + 32);
        } else if (from === 'c' && to === 'k') {
            setoutput(Number(input) + Number(273.15));
        } else if (from === 'f' && to === 'c') {
            setoutput((input - 32) * 5 / 9);
        } else if (from === 'f' && to === 'k') {
            setoutput((input + 459.67) * 5 / 9);
        } else if (from === 'k' && to === 'c') {
            setoutput(input - 273.15);
        } else if (from === 'k' && to === 'f') {
            setoutput((input * 9 / 5) - 459.67);
        } else {
            setoutput(input);
        }
        setShow(true)
    }

    const Result = () => {
        return (
            <View style={{
                padding: 40,
                marginVertical: 40,
                borderWidth: 2,
                borderRadius: 10,
                borderColor: color.white,
                display: show ? "flex" : "none",
            }}>
                <Text style={styles.resulttext}>{input}  {from}  =  {output}  {to} </Text>
            </View>

        )
    }
    // console.log(input)
    // console.log(from + " " + to)
    // console.log(output)
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.headtext}>Temperature Converter</Text>
            </View>
            <View style={styles.value}>
                <Text style={styles.valuetext}>Enter Value</Text>
                <TextInput style={styles.input} keyboardType="numeric" onChangeText={(x) => setinput(x)} />
            </View>
            <View style={styles.from}>
                <Text style={styles.fromtext}>From </Text>
                <Picker
                    selectedValue={from}
                    onValueChange={(value, index) => setfrom(value)}
                    mode="dropdown" // Android only
                    style={styles.picker}
                    itemStyle={{ height: 20 }}
                >
                    <Picker.Item color="blue" label="Celcius (°C)" value="c" />
                    <Picker.Item color="blue" label="fahrenheit (f)" value="f" />
                    <Picker.Item color="blue" label="kelvin (K)" value="k" />
                </Picker>
            </View>
            <View style={styles.from}>
                <Text style={styles.fromtext}>To  </Text>
                <Picker
                    selectedValue={to}
                    onValueChange={(value, index) => setto(value)}
                    mode="dropdown" // Android only
                    style={styles.picker}
                    itemStyle={{ height: 44 }}

                >
                    <Picker.Item color="blue" label="Celcius (°C)" value="c" />
                    <Picker.Item color="blue" label="fahrenheit (f)" value="f" />
                    <Picker.Item color="blue" label="kelvin (K)" value="k" />
                </Picker>
            </View>
            <TouchableOpacity style={styles.button} onPress={calculate}><Text style={styles.buttontext}>Submit</Text></TouchableOpacity>
            <Result/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.black,
        alignItems: 'center',
        paddingTop: 40
        // justifyContent: 'center',
    }, head: {
        width: "100%",
        alignItems: "center",
        paddingBottom: 10,
        marginBottom: 20,
        borderBottomWidth: 2,
        borderColor: color.white

    },
    headtext: {
        fontSize: 30,
        fontWeight: "bold",
        color: color.yellow
    },
    value: {
        color: color.white,
        display: "flex",
        flexDirection: "row",
        marginVertical: 30,
    },
    valuetext: {
        fontSize: 25,
        fontWeight: "bold",
        color: color.white,
        flex: 0.5
    },
    input: {
        backgroundColor: color.white,
        flex: 0.3,
        borderRadius: 10,
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    from: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 20,
    },
    fromtext: {
        fontSize: 20,
        fontWeight: "bold",
        flex: 0.3,
        color: color.white,
        justifyContent: "center",
        padding: 10
    },
    picker: {
        backgroundColor: color.white,
        flex: 0.5,

    },
    button: {
        marginTop: 30,
        backgroundColor: color.blue,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 2,
        borderRadius: 10,
        width: "50%",
        alignItems: "center"
    },
    buttontext: {
        fontSize: 20,
        fontWeight: "bold",
        color: color.white
    },
    resulttext: {
        color: color.yellow,
        fontSize: 20,
        fontWeight: "bold",
    }
})