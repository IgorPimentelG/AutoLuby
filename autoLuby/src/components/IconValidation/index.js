import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function({ valid }) {

    if(valid) {
        return(
            <Icon
                name='check-circle'
                size={20}
                color='#34C38F'
                style={styles.icone}
             />
        );
    } else {
        return(
            <Icon
                name='cancel'
                size={20}
                color='#FA982F'
                style={styles.icone}
            />
        );
    }

}

const styles = StyleSheet.create({
    icone: {
        marginRight: 10
    }
});