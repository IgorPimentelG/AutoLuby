import React from 'react';
import { ContainerText, Text} from './styles';

export default function Warning({ message }) {
    return(
        <ContainerText>
            <Text>{message}</Text>
        </ContainerText>
    );
}