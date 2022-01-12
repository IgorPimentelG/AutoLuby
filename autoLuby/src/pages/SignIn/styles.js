import styled from "styled-components";

export const ContainerKeyboardAvoiding = styled.KeyboardAvoidingView`
    flex: 1;
    padding: 20px;
    background-color: #FFF;
`;

// Container do conteúdo da página
export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const ContainerLogo = styled.View`
    width: 100px;
    height: 100px;
    padding: 25px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 0px 8px rgba(139, 139, 139, 0.35);
    margin: 30px;
`;

export const ContainerForm = styled.View`
    width: 100%;
`;

export const ContainerMultipleTextLine = styled.View`
    flex-direction: row;
`;

export const ContainerOptions = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
`;

export const Logo = styled.Image`
    width: 65px;
    height: 70px;
`;

export const LabelInput = styled.Text`
    color: #7C7C7C;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Label = styled.Text`
    color: #A2A2A2;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 40px;
`;


export const Button = styled.TouchableOpacity`
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    background-color: #F54A48;
    margin-bottom: 40px;
`;


export const DefaultTextTitle = styled.Text`
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const TextTitleRed = styled(DefaultTextTitle)`
    color: #F54A48;
`;

export const TextTitleBlack = styled(DefaultTextTitle)`
    color: #000;
`;

export const TextButton = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: #FFF;
`;

export const TextButtonLink = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #F54A48;
`;

