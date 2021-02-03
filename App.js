import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Navbar } from "./src/components/Navbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
