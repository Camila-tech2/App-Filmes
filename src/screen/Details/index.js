import React from 'react'
import {View, Text, Image} from 'react-native'
import {useRoute} from '@react-navigation/native' 
import styles from './style';
import Stars from 'react-native-stars';

export default function Details(){

  const routes = useRoute();
    return(
            <View style={styles.container}>
         <Image style={styles.images} source = {require(`../../Img/${routes.params.imagem}`)} /> 
            <Text style={styles.titulo} > {routes.params.titulo} </Text>
            <Text style={styles.titulo} > {routes.params.sinopse} </Text>
            <Text >{routes.params.sinopse}</Text>

            </View>
    
        )


}