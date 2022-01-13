import styled from "styled-components";

export const Container = styled.View`
    background-color: #FFF;
    border-radius: 5px;
    border-width: 1px;
    border-color: #E6E6E6;
    margin-top: 10px;
    padding: 15px;
`;

export const ContainerFooter = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-radius: 3px;
    border-width: 1px;
    border-color: #E6E6E6;
    margin-top: 10px;
    padding: 5px;
`;

export const ContainerTextFooter = styled.View`
    flex-direction: row;
    align-items: flex-end;
`;

export const TextStatus = styled.Text`
    font-size: 14px;
    font-weight: bold;
    padding: 4px;
    border-radius: 3px;
`;

export const TextModel = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #495057;
    margin-top: 10px;
`;

export const TextPrice = styled(TextModel)`
    color: #F54A48;
`;

export const LabelFooter = styled.Text`
    color: #858585;
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 5px;
`;

export const TextValueFooter = styled.Text`
    color: #858585;
    font-size: 14px;
`;
