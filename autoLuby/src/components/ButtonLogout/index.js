import React from 'react';
import { TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useAuth } from '../../providers/auth';

export default function ButtonLogout() {

    const { handlerLogout } = useAuth();

    return(
        <View>
            <TouchableOpacity onPress={ handlerLogout }>
                <Icon 
                    name='log-out'
                    size={25}
                    color='#495057'
                />
            </TouchableOpacity>
        </View>  
    );
}
