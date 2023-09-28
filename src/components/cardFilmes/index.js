import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function CardMovies({ titulo, notas, imagem, sinopse }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("details", {
          titulo: titulo,
          nota: notas,
          imagem: imagem,
          sinopse: sinopse,
        })
      }
      style={styles.containerJogos}
    >
      <Image style={styles.images} source={require(`../../Img/${imagem}`)} />
      <Text style={styles.titulo}>{titulo}</Text>

      <Text style={styles.textNota}>
        <MaterialIcons name="star" color="#e6bb23" />
        {"  "}
        {notas}
      </Text>
    </TouchableOpacity>
  );
}
