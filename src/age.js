import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import color from "./color";


export default function AgeCalc() {
    const [d1, setdate] = useState();
    const [m1, setmonth] = useState();
    const [y1, setyear] = useState();
    const [show, setShow] = useState(false);
    const [res, setresult] = useState("")

    const [d, setd] = useState();
    const [m, setm] = useState();
    const [y, sety] = useState();

    const calculate = () => {
        var date = new Date();
        var d2 = date.getDate();
        var m2 = 1 + date.getMonth();
        var y2 = date.getFullYear();
        var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (d1 > d2) {
            d2 = d2 + month[m2 - 1];
            m2 = m2 - 1;
        }
        if (m1 > m2) {
            m2 = m2 + 12;
            y2 = y2 - 1;
        }
        setd(d2 - d1)
        setm(m2 - m1)
        sety(y2 - y1)
        setShow(true)
    }


    const Result = () => {
        if (d1 < 0 || d1 > 31 || m1 < 0 || m1 > 12 || y1 < 0) {
            return (
                <View style={{
                    padding: 30,
                    marginVertical: 40,
                    borderWidth: 2,
                    borderRadius: 10,
                    borderColor: color.white,
                    display: show ? "flex" : "none",
                }}>
                    <Text style={styles.resulttext}>Enter Valid Age</Text>
                </View>
            )
        }
        else {
            return (             
                <View style={{
                    padding: 30,
                    marginVertical: 40,
                    borderWidth: 2,
                    borderRadius: 10,
                    borderColor: color.white,
                    display: show ? "flex" : "none",
                }}>
                    <Text style={styles.resulttext}>Your age is {y} years {m} months {d} days </Text>
                </View>
            )
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.headtext}>Age Calculator</Text>
            </View>
            <View style={styles.heading}>
                <Text style={styles.headingText}>
                    Enter your Age
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text} > Date     </Text>
                <TextInput style={styles.input} keyboardType="numeric" onChangeText={(d) => setdate(d)} />
            </View>
            <View style={styles.row}>
                <Text style={styles.text} >Month   </Text>
                <TextInput style={styles.input} keyboardType="numeric" onChangeText={(m) => setmonth(m)} />
            </View>
            <View style={styles.row}>
                <Text style={styles.text} > Year    </Text>
                <TextInput style={styles.input} keyboardType="numeric" onChangeText={(y) => setyear(y)} />
            </View>

            <TouchableOpacity style={styles.button} onPress={calculate}><Text style={styles.buttontext}>Submit</Text></TouchableOpacity>
            <Result />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.black,
        alignItems: 'center',
        // paddingHorizontal: 15,

    },
    head: {
        width: "100%",
        alignItems: "center",
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomWidth: 2,
        borderColor: color.white,
        marginTop: 40
    },
    headtext: {
        fontSize: 30,
        fontWeight: "bold",
        color: color.yellow
    },
    heading: {
        width: "100%",
        height: 80,
        alignItems: "center",
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    headingText: {
        color: color.white,
        fontSize: 30,
        fontWeight: "bold",
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 8
    },

    text: {
        color: color.white,
        fontWeight: "bold",
        flex: 0.4,
        fontSize: 25
    },
    input: {
        backgroundColor: color.white,
        flex: 0.4,
        borderRadius: 10,
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    button: {
        marginTop: 30,
        backgroundColor: color.blue,
        paddingHorizontal: 10,
        paddingVertical: 2,
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