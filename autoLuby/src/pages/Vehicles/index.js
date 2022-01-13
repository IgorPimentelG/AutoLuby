import React, { useState } from 'react';
import { FlatList, Keyboard } from 'react-native';
import { useAuth } from '../../providers/auth';
import HeaderList from '../../components/HeaderList';
import CardVehicles from '../../components/CardVehicles';
import { 
    Container,
} from './styles';


export default function Vehicles() {

    const { user } = useAuth();
    const [inputSearch, setInputSearch] = useState('');

    return(
        <Container>
            <HeaderList 
                title='Listagem de veículos reservados e vendidos'
                inputSearch={ inputSearch }
                setValueInputSearch={ setInputSearch }
                handlerSearch={ () => {Keyboard.dismiss()} }
            />

            <FlatList
                data={user.user.vehicles}
                renderItem={({item}) => <CardVehicles data={item}/>}
            />
        </Container>
    );
}

