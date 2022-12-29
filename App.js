import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";

export default function App() {
  const [cat, setcat] = useState([]);
  const API_URL = "https://catfact.ninja/fact";

  const getcats = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setcat(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getcats();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/cat.jpg")}
      >
        <View style={styles.textContainer}>
          <Text style={styles.header}>Randon Cat fact</Text>
          <Text style={styles.fact}>{cat.fact}</Text>
          <Text style={styles.length}>Length:{cat.length}</Text>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#6E654A",
  },
  fact: {
    fontSize: 19,
  },
  length: {},
  image: {
    width: "98%",
    height: "98%",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
