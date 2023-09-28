import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import Stars from "react-native-stars";

export default function Details() {
  const routes = useRoute();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.images}
        source={require(`../../Img/${routes.params.imagem}`)}
      />
      <Stars />
      <Text style={styles.titulo}> Sinopse </Text>
      <Text style={styles.text}>{routes.params.sinopse}</Text>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={25} color="white"></Ionicons>
      </TouchableOpacity>
    </View>
  );
}
