import React from 'react';
import { TouchableOpacity } from 'react-native';
import { 
    ContainerMenuOption,
    ContainerButton,   
    ContainerText,
    Title,
    Subtitle,
    TextFooter,
    Image,
} from './styles';

export default function MenuOption({ data }) {
    return(
        <ContainerMenuOption elevation={1}>
            <TouchableOpacity>
                <ContainerButton>

                    <ContainerText>
                        <Title>{data.title}</Title>
                        <Subtitle>{data.subtitle}</Subtitle>
                        <TextFooter>{data.textFooter}</TextFooter>
                    </ContainerText>

                    <Image source={data.image} resizeMode='cover'/>
                
                </ContainerButton>
            </TouchableOpacity>
    </ContainerMenuOption>
    );
}