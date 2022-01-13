import styled from 'styled-components';

export const ContainerInputSearch = styled.View`
    flex-direction: row;
    margin-top: 20px;
    border-width: 1px;
    border-radius: 3px;
    background-color: #FFF;
    border-color: #E6E6E6;
    align-items: center;
    height: 40px;
`;

export const ContainerPagination = styled.View`
    margin-top: 15px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ContainerButtonPagination = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const InputSearch = styled.TextInput`
    flex: 1;
    margin-left: 10px;
    color: #A2A2A2;
`;

export const ButtonPagination = styled.TouchableOpacity`
    padding: 10px;
    height: 40px;
    border-width: 1px;
    border-radius: 3px;
    border-color: #E6E6E6;
    background-color: #FFF;
    align-items: center;
    justify-content: space-between;
    elevation: 2;
`;

export const Title = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: #495057;
`;

export const Label = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #495057;
`;

export const LabelNumberPage = styled(Label)`
    font-size: 12px;
    text-align: center;
    padding: 10px;
    margin-left: 5px;
    margin-right: 5px;
`;