import React, { useState, useEffect } from "react";
import { Alert, FlatList } from "react-native";
import { Container } from "./styles";
import { useAuth } from "../../providers/auth";

import { api } from '../../services/api';
import HeaderList from '../../components/HeaderList';
import Loading from '../../components/Loading';
import CardVehicles from '../../components/CardVehicles';

export default function AllVehicles() {
    
    const { header } = useAuth();
    const [allVehicles, setAllVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadData() {
        
            await api.get('/vehicles?noPaginate', {headers: header})
            .then((res) => {
                setAllVehicles(res.data.vehicles);
            })
            .catch(() => {
                Alert('Erro ao carregar os dados!');
            });

            setLoading(false);
        }

        loadData();

    }, []);

    return(
        <Container>

            <Loading visible={loading} />

            <HeaderList 
                title='Listagem geral de veículos'
            />

            <FlatList
                data={allVehicles}
                renderItem={({item}) => <CardVehicles data={item}/>}
            />
        </Container>
    );
}