import styled from "styled-components";

export const Button = styled.TouchableOpacity`
   
`;

export const ContainerMenuOption = styled.View`
    border-radius: 3px;
    border-color: #E6E6E6;
    border-width: 1px;
    margin-bottom: 20px;
    box-shadow: 6px 6px 8px rgba(139, 139, 139, 0.18);
`;

export const ContainerButton = styled.View`
    flex-direction: row;
    height: 100px;
    justify-content: space-between;
`;

export const ContainerText = styled.View`
    flex: 1;
    padding: 10px;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #495057;
`;

export const Subtitle = styled.Text`
    font-size: 10px;
    font-weight: bold;
    color: #858585;
`;

export const TextFooter = styled.Text`
    margin-top: 10px;
    color: #F54A48;
    font-weight: bold;
    font-size: 12px;
    text-align: right;
    text-transform: uppercase;
`;

export const Image = styled.Image`
    width: 115px;
    height: 100px;
    border-radius: 3px;
`;