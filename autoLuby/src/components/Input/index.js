import React from 'react';
import { Text } from 'react-native';
import IconValidation from '../IconValidation';
import { Container, Input } from './styles';

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
        <Container style={setBorderColor()}>
            <Input
                placeholder={props.placeholder}
                placeholderTextColor='#A2A2A2'
                value={props.value}
                autoCapitalize='none'
                onChangeText={ (value) => props.onValueChange(value) }
                secureTextEntry={props.password}
            />
            {props.valid !== null ? <IconValidation valid={props.valid}/> : <Text></Text>}
        </Container>
    );
}