import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Calc from './Calc';
import AgeCalc from './age';
import MetricCalc from './metric';
import TempCalc from './temp';

// importing icons 
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import color from './color';

const Tab = createMaterialBottomTabNavigator();

const  Bottomtabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Calc"
            shifting={true}
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#000', borderRadius:10,padding:0,height:65, }}
                    
        >
            <Tab.Screen
                name="Calc"
                component={Calc}
                options={{
                    tabBarLabel: 'Calculator',
                    tabBarIcon: () => (
                        <AntDesign name="calculator" size={20} color="#fff" />
                    ),
                }}
            />
            <Tab.Screen
                name="Age Calc"
                component={AgeCalc}
                options={{
                    tabBarLabel: 'Age Calc',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="user" size={20} color="#fff" />
                    ),
                }}
            />
            <Tab.Screen
                name="MetricCalc"
                component={MetricCalc}
                options={{
                    tabBarLabel: 'Metric calc',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="linear-scale" size={20} color="#fff" />
                    ),
                    // tabBarBadge: 3,
                }}
            />
          
            <Tab.Screen
                name="TempCalc"
                component={TempCalc}
                options={{
                    tabBarLabel: 'TempCalc',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="temperature-high" size={20} color="#fff" />                    ),
                }}
            />
        </Tab.Navigator>
    );
}


const Main = () => {
    return <Bottomtabs />
}

export default Main;