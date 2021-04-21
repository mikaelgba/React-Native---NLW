import React, { useState } from 'react';
import { Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import { Button } from '../components/button';

export function Welcome(){

    // depois tirar o onpress do button
    const [visible, setVisible] = useState(false);

    function handleVisibility(){
        setVisible(true)
    }

    return (

      <SafeAreaView style = {styles.container}>
          
        <Text style = {styles.title}>
          Gerencia {'\n'}
          suas plantas {'\n'}
          de forma facil
        </Text>
        
        {
            //visible &&
            <Image source = {wateringImg} style = {styles.image}/>
        }

        <Text style = {styles.subtitle}>
            Não esqueça mais de regar suas plantas. 
            Nós cuidamos  de lembrar você sempre que precisar.
        </Text>
        <Button title = "Imagem" onPress={handleVisibility}/>
      </SafeAreaView>
    ) 
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title:{
        marginTop: 40,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading
    },
    image: {
        justifyContent: 'center',
        width: 292,
        height: 284
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    }
});