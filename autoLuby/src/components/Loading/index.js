import React from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import { Container } from './styles';

export default function Loading({ visible }) {
    return(
        <Modal animationType='slide' visible={ visible } transparent={true}>
            <Container>
                <ActivityIndicator size='large' color='#F54A48'/>
            </Container>
        </Modal>
    );
}