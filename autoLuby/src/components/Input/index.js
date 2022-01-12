import React from 'react';
import { Text } from 'react-native';
import IconValidation from '../IconValidation';
import { Container, Input } from './styles';

export default function({status, value, placeholder, password, onValueChange, setStatus}) {

    function setBorderColor() {
        
        let style = {borderColor: '', borderWidth: 2};
        switch(status.valid) {
            case null:
                style.borderColor = '#E6E6E6';
                style.borderWidth = 1;
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

    function resetStatusValidation() {
        if(status.valid === false) {
            setStatus({valid: null, message: ''});          // Reiniciar validação
        }
    }

    return(
        <Container style={setBorderColor()}>
            <Input
                style={status.valid === false ? {color: '#FA982F'} : {color: '#A2A2A2'}}
                placeholder={placeholder}
                placeholderTextColor='#A2A2A2'
                value={  status.valid === false ? status.message : value  }
                autoCapitalize='none'
                onChangeText={ (value) => {
                    onValueChange(value); 
                }}
                secureTextEntry={status.valid === false ? false : password}
                onPressIn={ resetStatusValidation }
            />
            {status.valid !== null ? <IconValidation valid={status.valid}/> : <Text></Text>}

        </Container>
    );
}