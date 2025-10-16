import React from 'react'
import { useTheme } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function EmptyResults({message}: {message: string} ) {
  const theme = useTheme();
  return (
    <View style={{ flex:1, height:"100%", width:"100%", justifyContent:"center", alignItems:"center" }} >
      <LottieView
        source={require("../../../assets/lottie/lupaAnimation.json")}
        style={{ width: "100%", height: 200,  }}
        autoPlay
        loop
      />
      <Text style={[styles.text, { color: theme.colors.text }]}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginTop:30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
