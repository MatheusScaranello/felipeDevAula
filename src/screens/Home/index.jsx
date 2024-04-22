import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import styles from "./styles";
import Title from "../../components/Title";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Title title="Home" />
    </View>
  );
}
