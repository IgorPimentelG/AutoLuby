import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import IconValidation from '../IconValidation';

export default function(props) {

    function setBorderColor() {
        
        let style = {borderColor: '', borderWidth: 2};
        switch(props.valid) {
            case null:
                style.borderColor = '#E6E6E6';
                style.borderWith = 1;
                break;
            case true:
                style.borderColor = '#34C38F';
                break;
            case false:
                style.borderColor = '#FA982F';
                break;
        }

        return style;
    }

    return(
        <View style={[styles.containerInput, setBorderColor()]}>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                placeholderTextColor='#A2A2A2'
                value={props.value}
                autoCapitalize='none'
                onChangeText={ (value) => props.onValueChange(value) }
                secureTextEntry={props.password}
            />
            {props.valid !== null ? <IconValidation valid={props.valid}/> : <Text></Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    containerInput: {
        flexDirection: 'row',
        height: 45,
        width: '100%',
        alignItems: 'center',
        marginBottom: 25,
        backgroundColor: '#F9F9F9',
        borderRadius: 3,
        borderColor: '#E6E6E6'
    },

    input: {
        marginLeft: 10,
        color: '#A2A2A2',
        flex: 1
    }
});