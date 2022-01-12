import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../pages/Home';
import Employees from '../pages/Employees';
import Vehicles from '../pages/Vehicles';
import AllVehicles from '../pages/AllVehicles';

export default function AuthRoute() {

    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator >
            <Stack.Screen name='Home' component={Home} options={{
                title: 'HOME',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#F54A48',
                    fontWeight: 'bold'
                },
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

                        <TouchableOpacity>
                            <Icon 
                                name='log-out'
                                size={25}
                                color='#495057'
                            />
                        </TouchableOpacity>
                    </View>
                    
                   
                ), 
            }}/>
        </Stack.Navigator>
    );
}