import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { 
    ContainerMenuOption,
    ContainerButton,   
    ContainerText,
    Title,
    Subtitle,
    TextFooter,
    Image,
    ContainerFooter,
} from './styles';

// @Param data - contém os dados dos botões do menu
export default function MenuOption({ data }) {

    const navigation = useNavigation();

    return(
        <ContainerMenuOption>
            <TouchableOpacity onPress={ () => navigation.navigate(data.navigation) }>
                <ContainerButton>
                    <ContainerText>
                        <Title>{data.title}</Title>
                        <Subtitle>{data.subtitle}</Subtitle>

                        <ContainerFooter>
                            <TextFooter>{data.textFooter}</TextFooter>
                        </ContainerFooter>
                        
                    </ContainerText>

                    <Image source={data.image} resizeMode='cover'/>
                
                </ContainerButton>
            </TouchableOpacity>
    </ContainerMenuOption>
    );
}