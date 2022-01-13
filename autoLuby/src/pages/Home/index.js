import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useAuth } from '../../providers/auth';
import { Container, Title } from './styles';

import MenuOption from '../../components/MenuOption';
import Statusbar from '../../components/Statusbar';

export default function Home() {

    const { user } = useAuth();
    const [menuOptions, setMenuOptions] = useState([]);

    useEffect(() => {
        setMenuOptions([
            {
                image: require('../../assets/images/menu-1.png'),
                title: 'Veículos reservados e vendidos',
                subtitle: 'Veículos reservados e vendidos por você',
                textFooter: `${user.totalVehiclesLoggedUser} veículos`,
                navigation: 'Vehicles'
            },
            {
                image: require('../../assets/images/menu-2.png'),
                title: 'Listagem geral de veículos',
                subtitle: 'Listagem de veículos vendidos de toda empresa',
                textFooter: `${user.totalVehicles} veículos`,
                navigation: 'AllVehicles'
            },
            {
                image: require('../../assets/images/menu-3.png'),
                title: 'Funcionários da Empresa',
                subtitle: 'Listagem de todos funcionários',
                textFooter: `${user.totalEmployees} funcionários`,
                navigation: 'Employees'
            }
        ]);
    }, []);


    return(
        <Container>

            <Statusbar />

            <Title>Bem-Vindo, {user.user.name}</Title>

            <FlatList
                data={menuOptions}
                renderItem={({item}) => <MenuOption data={item}/>}
            />
            
        </Container>
    );
}