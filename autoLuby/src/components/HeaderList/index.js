import React, { useState } from "react";
import { FlatList, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { 
    Title,
    ContainerInputSearch,
    InputSearch,
    ContainerPagination,
    ButtonPagination,
    Label,
    ContainerButtonPagination,
    LabelNumberPage
} from './styles';

export default function HeaderList( { title, inputSearch, setValueInputSearch, handlerSearch } ) {

    const [page, setPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([
        {number: 1, isActive: true},
        {number: 2, isActive: false},
        {number: 3, isActive: false}
    ]);

    // Handler do botão de avançar página
    function nextPage() {

        let next = 1;
        
        if(page === 3) {
            setPage(next);
        } else {
            next = page + 1
            setPage(next);
        }

        // Buscar pela a próxima página ativa
        let newState = pageNumbers.map(item => {
            if(item.number === next) {
                return {...item, isActive: true};
            }

            return {...item, isActive: false};
        });

        setPageNumbers(newState);
    }

    // Handler do botão voltar página
    function previous() {

        let previus = 3;
        
        if(page === 1) {
            setPage(previus);
        } else {
            previus = page - 1
            setPage(previus);
        }

        // Buscar pela a próxima página ativa
        let newState = pageNumbers.map(item => {
            if(item.number === previus) {
                return {...item, isActive: true};
            }

            return {...item, isActive: false};
        });

        setPageNumbers(newState);
    }

    return(

        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
            <View style={{marginBottom: 10}}>
                <Title>{title}</Title>

                <ContainerInputSearch elevation={2}>
                
                    <InputSearch
                        value={inputSearch}
                        onChangeText={(value) => setValueInputSearch(value)}
                    />

                    <TouchableOpacity onPress={ handlerSearch }>
                        <Icon 
                            name='search'
                            size={25}
                            color='#495057'
                            style={{marginRight: 10}}
                        />
                    </TouchableOpacity>

                </ContainerInputSearch>

                <ContainerPagination>

                    <ButtonPagination onPress={ previous }>
                        <ContainerButtonPagination>
                                <Icon 
                                    name='arrow-left'
                                    size={20}
                                    color='#495057'
                                    style={{marginRight: 5}}
                                />
                                <Label>Anterior</Label>
                        </ContainerButtonPagination>
                    </ButtonPagination>
                
                    <FlatList
                        data={pageNumbers}
                        renderItem={({item}) => <Page data={item}/>}
                        horizontal={true}
                        contentContainerStyle={{justifyContent: 'space-around', flexGrow: 1}}
                    />

                    <ButtonPagination onPress={ nextPage }>
                        <ContainerButtonPagination>
                                <Label>Próxima</Label>
                                <Icon 
                                    name='arrow-right'
                                    size={20}
                                    color='#495057'
                                    style={{marginLeft: 5}}
                                />
                        </ContainerButtonPagination>
                    </ButtonPagination>
                    
                </ContainerPagination>
            </View>
        </TouchableWithoutFeedback>

    );
}

function Page({ data }) {

    function activePage() {
        if(data.isActive) {
            return {
                backgroundColor: '#F54A48',
                borderRadius: 3,
                color: '#FFF'
            }
        }

        return {};
    }

    return(
        <LabelNumberPage style={activePage()}>
            { data.number }
        </LabelNumberPage>       
    );
}