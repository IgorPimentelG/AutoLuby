import styled from "styled-components";

export const Container = styled.View`
    background-color: #FFF;
    border-radius: 3px;
    border-width: 1px;
    border-color: #E6E6E6;
    padding: 10px;
    margin-bottom: 10px;
`;

export const ContainerRow = styled.View`
    flex-direction: row;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: #495057;
`;

export const Label = styled.Text`
    font-size: 10px;
    color: #858585;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 3px;
`;

export const Text = styled.Text`
    font-size: 14px;
    color: #495057;
`;

export const ContainerText = styled.View`
    width: 50%;
    margin-top: 10px;
`;

export const Line = styled.View`
    border-width: 1px;
    border-color: #E9E9E9;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const ContainerFooter = styled(ContainerRow)`
    justify-content: space-between;
    align-items: center;
`;

export const TextSalary = styled.Text`
    color: #F54A48;
    font-size: 16px;
    font-weight: bold;
`;