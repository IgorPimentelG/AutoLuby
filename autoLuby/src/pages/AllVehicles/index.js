import React, { useState, useEffect } from "react";
import { Alert, FlatList } from "react-native";
import { Container, ContainerText, Text } from "./styles";
import { useAuth } from "../../providers/auth";

import { api } from '../../services/api';
import HeaderList from '../../components/HeaderList';
import Loading from '../../components/Loading';
import CardVehicles from '../../components/CardVehicles';

export default function AllVehicles() {
    
    const { header } = useAuth();
    const [inputSearch, setInputSearch] = useState('');
    const [allVehicles, setAllVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadData() {
        
            await api.get('/vehicles?noPaginate', {headers: header})
            .then((res) => {
               filterVihicles(res.data.vehicles);
            })
            .catch(() => {
                Alert('Erro ao carregar os dados!');
            });

            setLoading(false);
        }

        if(inputSearch.length === 0) {
            loadData();
        }
       
    }, [inputSearch]);

    async function handlerSearch() {

        if(inputSearch.length > 0) {
            
           setLoading(true);

           const modelo = capitalizeInputSearch(inputSearch);

           await api.get(`/vehicles?noPaginate&model=${modelo}`, {headers: header})
           .then((res) => {
                filterVihicles(res.data.vehicles);
           })
           .catch((error) => {
               Alert('Erro ao carregar os dados!');
           });

           setLoading(false);
        }
    }

    // Converter a primeira letra do modelo para maiúscula, para quando o usuário digitar o modelo com 
    // texto minúsculo, já que a api só aceita a primeira letra maiúscula
    function capitalizeInputSearch(texto) {
        return texto[0].toUpperCase() + texto.slice(1);
    }

    function filterVihicles(vehicles) {

        const veiculosVendidos = vehicles.filter(
            (elemento) => {
                if(elemento.status === 'Vendido') {
                    return elemento;
                }
        });

        setAllVehicles(veiculosVendidos);
    }

    return(
        <Container>

            <Loading visible={loading} />

            <HeaderList 
                title='Listagem geral de veículos vendidos'
                inputSearch={ inputSearch }
                setValueInputSearch={ setInputSearch }
                handlerSearch={ handlerSearch }
            />

            { allVehicles.length === 0 ? 
                <ContainerText>
                     <Text>Nenhum veículo foi encontrado</Text>
                </ContainerText>
                :
                <FlatList
                data={allVehicles}
                renderItem={({item}) => <CardVehicles data={item}/>}
                />
            }

           
        </Container>
    );
}