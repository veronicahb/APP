import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, SafeAreaView, SafeAreaViewBase } from "react-native";
import { Container, Text } from "../styles/Container";
import {Header, Nav, Footer} from "../styles/Mensagem";
import {Ct, Cancela, Selecione, Leia, O, V, A, PE, PP, Bot, At, Aqui} from "../styles/Criar";

const Criar:React.FC=()=>{
    const navigation = useNavigation();
    function handleNavigation(params: string){
        if (params === 'Cancela'){
          navigation.navigate('Cancela');
        } else if (params === 'PetP'){
            navigation.navigate('PetP');
        } else {
          navigation.navigate('PetP');
        }
    }
    return(
        <Container>
            <Header>
                <Cancela onPress={() => {handleNavigation('Cancela')}}>
                    <Ct>Cancelar</Ct>
                </Cancela>
            </Header>
            <Selecione>
                Selecione uma das opções:
            </Selecione>
            <Nav>
                <Bot>
                    <O
                        source={
                            require("../../assets/O.png")      
                        }
                    />        
                </Bot>
                <Bot>
                    <V
                        source={
                            require("../../assets/V.png")      
                        }
                    />       
                </Bot>
                <Bot>
                    <A
                        source={
                            require("../../assets/A.png")      
                        }
                    />
                </Bot>
                <Bot>
                    <PE
                        source={
                            require("../../assets/PE.png")      
                        }
                    />  
                </Bot>
                <Bot>
                    <PP
                        source={
                            require("../../assets/PP.png")      
                        }
                    />
                </Bot>
                <Leia>
                    Leia mais sobre
                </Leia>
                <Aqui>
                    <At>
                        aqui!
                    </At>
                </Aqui>
            </Nav>
        </Container>    
    );
}

export default Criar;