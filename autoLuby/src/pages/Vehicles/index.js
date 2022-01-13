import React, { useState } from 'react';
import { FlatList, Keyboard } from 'react-native';
import { useAuth } from '../../providers/auth';
import HeaderList from '../../components/HeaderList';
import CardVehicles from '../../components/CardVehicles';
import Warning from '../../components/Warning';
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

            { user.user.vehicles.length === 0 ?
                <Warning message='Nenhum veículo foi encontrado'/>
                :
                <FlatList
                    data={user.user.vehicles}
                    renderItem={({item}) => <CardVehicles data={item}/>}
                />
            }

        </Container>
       
    );
}

