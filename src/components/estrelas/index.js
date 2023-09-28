import { Text, View } from "react-native";
import { Rating } from "react-native-ratings";
import styles from "./style";

export default function Estrelas({ nota }) {
  const STAR_IMAGEM = require("../../../assets/star.png");

  return (
    <View style={styles.container}>
      <Rating
        ratingCount={10}
        readonly
        startingValue={nota}
        imageSize={30}
        type="custom"
        ratingImage={STAR_IMAGEM}
      />
      <Text style={styles.txtNota}>{nota}/10</Text>
    </View>
  );
}
