import React from 'react';
import { FlatList } from 'react-native';
import { useAuth } from '../../providers/auth';
import HeaderList from '../../components/HeaderList';
import CardVehicles from '../../components/CardVehicles';
import { 
    Container,
} from './styles';


export default function Vehicles() {

    const { user } = useAuth();

    return(
        <Container>
            <HeaderList 
                title='Listagem de veículos reservados e vendidos'
            />

            <FlatList
                data={user.user.vehicles}
                renderItem={({item}) => <CardVehicles data={item}/>}
            />
        </Container>
    );
}

