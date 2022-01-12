import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import { 
    View,
    Keyboard, 
    TouchableOpacity, 
    TouchableWithoutFeedback
} from 'react-native';
import { 
    ContainerKeyboardAvoiding, 
    Container,
    ContainerLogo, 
    ContainerOptions,
    ContainerForm,
    ContainerMultipleTextLine,
    Logo, 
    TextButton, 
    TextTitleRed,
    TextButtonLink,
    TextTitleBlack,
    Label,
    LabelInput, 
    Button
} from "./styles"; 

import { useAuth } from "../../providers/auth";
import CheckBox from '@react-native-community/checkbox'; 
import Loading from '../../components/Loading';
import Input from "../../components/Input";


export default function SignIn() {

    const {authenticated, handlerSignIn} = useAuth();
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [lembrarSenha, setLembrarSenha] = useState(true);
    const [loading, setLoading] = useState(false);
    const [statusValidation, setStatusValidation] = useState({valid: null, message: ''});

    useEffect(() => {

        // Alterar navegação quando o usuário estiver autenticado
        if(authenticated) {
            navigation.navigate('Home');
        }
    }, [authenticated]);

    async function signIn() {

        if(await validation()) {
            setStatusValidation({valid: true, message: 'valid'});
            setLoading(true);                                       // Iniciar modal de carregamento
            await handlerSignIn({email, password});                 // Método de autenticação
            setLoading(false);
        } 
        
        // Autenticação ou validação falhou
        setStatusValidation({valid: false, message: 'Wrong input'});
    }

    async function validation() {

        let schema = yup.object({
            email: yup.string().email('Wrong input').required(),
            password: yup.string().required()
        });

        // Atualizar o estado da validação
        try {
            await schema.validate({email, password});
            return true;
        } catch(error) {
          return false;
        }  
    }
    
    return(
        <ContainerKeyboardAvoiding behavior='padding'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <Container>

                    <Loading visible={loading}/>

                    <ContainerLogo elevation={3}>
                        <Logo source={require('../../assets/images/logo.png')}/>
                    </ContainerLogo>

                    <ContainerMultipleTextLine>
                        <TextTitleBlack>Você está na </TextTitleBlack>
                        <TextTitleRed>AutoLaby</TextTitleRed>
                    </ContainerMultipleTextLine>

                    <Label>Faça o login para acessar sua conta.</Label>

                    <ContainerForm>
                        <LabelInput>Endereço de email</LabelInput>

                        <Input
                            placeholder='@mail.com' 
                            value={email} 
                            onValueChange={setEmail} 
                            status={statusValidation}
                            setStatus={setStatusValidation}
                            password={false}
                        />
                    
                        <LabelInput>Senha</LabelInput>
                        <Input 
                            placeholder='senha' 
                            value={password} 
                            onValueChange={setPassword} 
                            status={statusValidation}
                            setStatus={setStatusValidation}
                            password={true}
                        />

                        <ContainerOptions>

                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <CheckBox
                                    disabled={false}
                                    value={lembrarSenha}
                                    onValueChange={ (value) => setLembrarSenha(value)}
                                    tintColors={{ true: '#F54A48' }}
                                />
                                <TextButtonLink>Lembrar minha senha</TextButtonLink>
                            </View>

                            <TouchableOpacity>
                                <TextButtonLink>Esqueceu a senha?</TextButtonLink>
                            </TouchableOpacity>

                        </ContainerOptions>

                        <Button onPress={ () => {
                            Keyboard.dismiss();
                            signIn();
                        }}>                    
                            <TextButton>Entrar</TextButton>
                        </Button>
                    </ContainerForm>

                    <ContainerMultipleTextLine>
                        <Label>Ainda não possui conta? </Label>
                        <TouchableOpacity>
                            <TextButtonLink>Criar Conta</TextButtonLink>
                        </TouchableOpacity>
                    </ContainerMultipleTextLine>

                </Container>

            </TouchableWithoutFeedback>
        </ContainerKeyboardAvoiding>
    );
}