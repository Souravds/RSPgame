import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PlayScreen from "./src/PlayScreen";

export default function App() {
  const [count, setcount] = useState(3);
  const [play, setplay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count === 0) return;
      setcount(count - 1);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  const signs = ["✊", "🖐", "🤞"];
  const bgColor = ["#f6e58d", "#eb4d4b", "#e056fd"];

  const randomNmbr = () => {
    const rndm = Math.floor(Math.random() * 3);
    return rndm;
  };

  const firstplay = () => {
    setplay(true);
    setcount(3);
  };
  return (
    <View style={styles.container}>
      {play ? (
        count > 0 ? (
          <PlayScreen
            count={count}
            style={StyleSheet.compose(styles.container, {
              backgroundColor: bgColor[randomNmbr()],
              width: "100vw",
            })}
          />
        ) : (
          <>
            <Text style={{ fontSize: "200px", marginBottom: "50px" }}>
              {signs[randomNmbr()]}
            </Text>
            <Button
              style={styles.button}
              title="Play again"
              onPress={() => setcount(3)}
            />
            <br />
            <Button title="End" onPress={() => setplay(false)} />
          </>
        )
      ) : (
        <>
          <Text style={styles.header}>Rock Paper Scissors</Text>
          <Text style={{ fontSize: "50px", marginBottom: "40px" }}>✊🖐🤞</Text>
          <Button title="Play" onPress={() => firstplay()} />
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
  },
  button: {
    width: 300,
    marginTop: 50,
  },
});
