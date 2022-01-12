import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Feather';

export default function ButtonBack() {

    const navigation = useNavigation();

    return(
        <View>
            <TouchableOpacity onPress={ () => navigation.goBack() }>
                <Icon 
                    name='chevron-left'
                    size={25}
                    color='#495057'
                />
            </TouchableOpacity>
        </View>
    );

}