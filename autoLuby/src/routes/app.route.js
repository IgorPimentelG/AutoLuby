import React from "react";
import { TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/Feather';

import ButtonLogout from '../components/ButtonLogout';
import ButtonBack from "../components/ButtonBack";

// Screens
import Home from '../pages/Home';
import Employees from '../pages/Employees';
import Vehicles from '../pages/Vehicles';
import AllVehicles from '../pages/AllVehicles';


export default function AuthRoute() {

    const Stack = createNativeStackNavigator();

    const headerTitleStyle = {
        color: '#F54A48',
        fontWeight: 'bold'
    }

    return(
        <Stack.Navigator >
            <Stack.Screen name='Home' component={Home} options={{
                title: 'HOME',
                headerTitleAlign: 'center',
                headerTitleStyle: headerTitleStyle,
                headerLeft: () => (
                    <TouchableOpacity>
                        <Icon 
                            name='menu'
                            size={25}
                            color='#495057'
                        />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <View style={{flexDirection: 'row'}}>

                        <TouchableOpacity style={{marginRight: 20}}>
                            <Icon 
                                name='search'
                                size={25}
                                color='#495057'
                            />
                        </TouchableOpacity>

                       <ButtonLogout/>

                    </View>
                ), 
            }}/>
            <Stack.Screen name='Vehicles' component={Vehicles} options={{
                title: 'SEUS VEÍCULOS',
                headerTitleAlign: 'center',
                headerTitleStyle: headerTitleStyle,
                headerLeft: () => (
                    <ButtonBack />
                ),
                headerRight: () => (
                    <ButtonLogout />
                )
            }}/>
            <Stack.Screen name='AllVehicles' component={AllVehicles} options={{
                 title: 'TODOS VEÍCULOS',
                 headerTitleAlign: 'center',
                 headerTitleStyle: headerTitleStyle,
                 headerLeft: () => (
                     <ButtonBack />
                 ),
                 headerRight: () => (
                     <ButtonLogout />
                 )
            }}/>
            <Stack.Screen name='Employees' component={Employees} options={{
                 title: 'FUNCIONÁRIOS',
                 headerTitleAlign: 'center',
                 headerTitleStyle: headerTitleStyle,
                 headerLeft: () => (
                     <ButtonBack />
                 ),
                 headerRight: () => (
                     <ButtonLogout />
                 )
            }}/>

        </Stack.Navigator>
    );
}