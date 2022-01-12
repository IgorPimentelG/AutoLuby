import React from 'react';
import { View } from 'react-native';
import {
     Container, 
     TextModel, 
     TextPrice, 
     TextStatus,
     ContainerFooter,
     LabelFooter,
     ContainerTextFooter,
     TextValueFooter
} from './styles';

export default function CardVehicles( {data} ) {

    // Formatar o preço e o km do veículo
    const priceFormat = data.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const kmFormat = data.km.toLocaleString('pt-BR');

    // Define o estilo aplicado ao label do status
    function status() {
        switch(data.status) {
            case 'Vendido':
                return {
                    backgroundColor: 'rgba(245, 74, 72, 0.20)',
                    color: '#F54A48'
                };
            case 'Reservado':
                return {
                    backgroundColor: 'rgba(250, 193, 47, 0.20)',
                    color: '#FAC12F'
                };
            case 'Disponível':
                return {
                    backgroundColor: 'rgba(52, 195, 143, 0.20)',
                    color: '#34C38F'
                };
        }
    }
    
    return(
        <Container>

            <View style={{alignSelf: 'flex-start'}}>
                <TextStatus style={status()}>{data.status}</TextStatus>
            </View>
            
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextModel>{data.brand} {data.model}, {data.yer}</TextModel>
                <TextPrice>
                    {priceFormat}
                </TextPrice>
            </View>

            <ContainerFooter>
                <ContainerTextFooter>
                    <LabelFooter>cor</LabelFooter>
                    <TextValueFooter>{data.color}</TextValueFooter>
                </ContainerTextFooter>

                <ContainerTextFooter>
                    <LabelFooter>km</LabelFooter>
                    <TextValueFooter>{kmFormat}</TextValueFooter>
                </ContainerTextFooter>

                <ContainerTextFooter>
                    <LabelFooter>chassi</LabelFooter>
                    <TextValueFooter>{data.chassi.substring(0, 3)}</TextValueFooter>
                </ContainerTextFooter>
            </ContainerFooter>
            
        </Container>
    );
}