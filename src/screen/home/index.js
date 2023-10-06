import { StyleSheet, Text, View, FlatList } from "react-native";
import BannerMovies from "../../components/bannerMovies";
import CardMovies from "../../components/cardFilmes";
import Header from "../../components/header";
import SearchBar from "../../components/searchbar";
import React,{useState,useEffect} from 'react';
import Filmes from "../../data/filmes";

export default function App() {

const [movies,setMovies] = useState([]);

useEffect(()=>{
  async function buscarFilmes(){
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=853de9e5cc41e54c12036de70ba4e5cb&language=pt-br');
    const data = await response.json();
    console.log(data.results);
    setMovies(data.results);
  }

  buscarFilmes();
},[])

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
              imagem2={item.imagem}
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
