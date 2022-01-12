import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { Container } from "./styles";

import { useAuth } from '../../providers/auth';
import { api } from '../../services/api';
import HeaderList from '../../components/HeaderList';
import CardEmployees from '../../components/CardEmployees';
import Loading from '../../components/Loading';

export default function Employees() {

    const { header } = useAuth();
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {

        async function loadData() {
            await api.get('/employees?noPaginate', {headers: header})
            .then((res) => {
                setEmployees(res.data.employees);
            })
            .catch(() => {
                Alert('Não foi possível carregar os dados!');
            });

            setLoading(false);
        }

        loadData();
       
    }, []);

    return(
        <Container>

            <Loading visible={loading}/>

            <HeaderList 
                title='Listagem de funcionários da empresa'
            />
            
            <FlatList
                data={employees}
                renderItem={({item}) => <CardEmployees data={item}/>}
            />

        </Container>
    );
}