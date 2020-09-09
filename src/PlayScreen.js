import React from "react";
import { View, Text } from "react-native";

const PlayScreen = ({ count, style }) => {
  return (
    <View style={style}>
      <Text style={{ fontSize: 60 }}>{count}</Text>
    </View>
  );
};

export default PlayScreen;
