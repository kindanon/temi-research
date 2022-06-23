import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const google = "https://www.google.com/";
const local = "http://10.0.0.3:3000/";

function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : b ? b : a,
  };
}

export default function App() {
  return (
    <View style={StyleSheet.container}>
      <View
        style={{
          width: "100%",
          height: 65,
          backgroundColor: "rgb(32, 37, 41)",
        }}
      ></View>
      <View style={{ width: "100%", height: "92%" }}>
        <WebView source={{ uri: local }} onLoad={console.log("Loaded")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#224D19",
    alignItems: "center",
    justifyContent: "center",
  },
});
