import { StyleSheet, Text, View, FlatList } from "react-native";
import BannerMovies from "../../components/bannerMovies";
import CardMovies from "../../components/cardFilmes";
import Header from "../../components/header";
import SearchBar from "../../components/searchbar";
import Filmes from "../../data/filmes";

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>

      <SearchBar></SearchBar>

      <BannerMovies></BannerMovies>

      <View style={{ width: "90%" }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Filmes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardMovies
              titulo={item.nome}
              imagem={item.imagem}
              notas={item.notas}
              sinopse={item.sinopse}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141a29",
    alignItems: "center",
  },
});
