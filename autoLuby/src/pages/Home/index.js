import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useAuth } from '../../providers/auth';
import { Container, Title } from './styles';
import MenuOption from '../../components/MenuOption';

export default function Home() {

    const { user } = useAuth();
    const [menuOptions, setMenuOptions] = useState([]);

    useEffect(() => {
        setMenuOptions([
            {
                image: require('../../assets/images/menu-1.png'),
                title: 'Veículos reservados e vendidos',
                subtitle: 'Veículos reservados e vendidos por você',
                textFooter: `${user.totalVehiclesLoggedUser} veículos`
            },
            {
                image: require('../../assets/images/menu-2.png'),
                title: 'Listagem geral de veículos',
                subtitle: 'Listagem de veículos de toda empresa',
                textFooter: `${user.totalVehicles} veículos`
            },
            {
                image: require('../../assets/images/menu-3.png'),
                title: 'Funcionários da Empresa',
                subtitle: 'Listagem de todos funcionários',
                textFooter: `${user.totalEmployees} funcionários`
            }
        ]);
    }, []);


    return(
        <Container>
            <Title>Bem-Vindo, {user.user.name}</Title>

            <FlatList
                data={menuOptions}
                renderItem={({item}) => <MenuOption data={item}/>}
            />
            
        </Container>
    );
}