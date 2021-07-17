import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, SafeAreaView, SafeAreaViewBase } from "react-native";
import { Container, Text } from "../styles/Container";
import {Botao, Conta, Patinha, Criar, Casa, Vet, Mensagem} from "../styles/Botao"
import {Header, Footer, Linha} from "../styles/ONG";

const ONG:React.FC=()=>{
    const navigation = useNavigation();
    function handleNavigation(params: string){
        if (params === 'Conta'){
          navigation.navigate('Conta');
        } else if (params === 'Criar'){
            navigation.navigate('Criar');
        } else if (params === 'Casa'){
            navigation.navigate('Casa'); 
        } else if (params === 'TimeLine'){
            navigation.navigate('TimeLine'); 
        } else if (params === 'ONG'){
            navigation.navigate('ONG'); 
        } else {
          navigation.navigate('Mensagem');
        }
    }
    return(
        <Container>
            <Header>
                <Botao onPress={() => {handleNavigation('Conta')}}>
                    <Conta
                        source={
                            require("../../assets/conta.png")      
                        }
                    />
                </Botao>
                <Botao>
                    <Patinha
                        source={
                            require("../../assets/patinha.png")      
                        }
                    />
                </Botao>
                <Botao onPress={() => {handleNavigation('Criar')}}>
                    <Criar
                        source={
                            require("../../assets/criar.png")      
                        }
                    />
                </Botao>
                <Linha
                    source={
                        require("../../assets/linha.png")      
                    }
                />
            </Header>
            <Text>ONG</Text>
            <Footer>
                <Botao onPress={() => {handleNavigation('TimeLine')}}>
                    <Casa
                        source={
                            require("../../assets/casa.png")      
                        }
                    />
                </Botao>
                <Botao onPress={() => {handleNavigation('ONG')}}>
                    <Vet
                        source={
                            require("../../assets/vet.png")      
                        }
                    />
                </Botao>
                <Botao onPress={() => {handleNavigation('Mensagem')}}>
                    <Mensagem
                        source={
                            require("../../assets/mensagem.png")      
                        }
                    />
                </Botao>
            </Footer>
        </Container>
        
    );
}

export default ONG;