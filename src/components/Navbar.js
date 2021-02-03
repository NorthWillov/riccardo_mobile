import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Image source={require("../images/logo.png")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 120,
    backgroundColor: "blue",
    justifyContent: "flex-end",
    backgroundColor: "#f7f8f9",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  logo: { width: 203, height: 51 },
});
