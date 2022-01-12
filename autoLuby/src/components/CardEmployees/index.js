import React from "react";
import { View } from "react-native";
import { 
    Container, 
    ContainerRow,
    ContainerText,
    Title,
    Label, 
    Text,
    Line,
    ContainerFooter,
    TextSalary
} from "./styles";

export default function CardEmployees( {data} ) {

    const salaryFormat = data.salary.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return(
        <Container>
            <Title>{data.name}</Title>
            
            <ContainerRow>
                <ContainerText>
                    <Label>email</Label>
                    <Text>{data.email}</Text>
                </ContainerText>
                <ContainerText>
                    <Label>cpf</Label>
                    <Text>{data.cpf}</Text>
                </ContainerText>
            </ContainerRow>
            <View style={{marginTop: 10}}>
                <Label>bio</Label>
                <Text>{data.bio}</Text>
            </View>

            <Line/>
    
            <ContainerFooter>
                <Label>Salário</Label>
                <TextSalary>{salaryFormat}</TextSalary>
            </ContainerFooter>
           
        </Container>
    );
    
   
}