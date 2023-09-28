import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141a29",
    alignItems: "flex-start",
  },
  titulo: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 8,
    marginLeft: 10,
  },
  images: {
    width: "100%",
    height: 350,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  text: {
    color: "#fff",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "rgba(20, 26, 41, 0.7)",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 20,
    borderRadius: 50,
    position: "absolute",
  },
});

export default styles;
