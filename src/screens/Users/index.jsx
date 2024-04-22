import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import Title from "../../components/Title";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  const apiURL = process.env.EXPO_PUBLIC_API_URL;

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Title title="Users" />
      {users ? (
        users.map((user) => (
          <View>
            <Title title={user.name} />
            <Title title={user.email} />
          </View>
        ))
      ) : (
        <Title title="Carrendo..." />
      )}
      <TouchableOpacity onPress={getUsers} style={styles.button}>
        <Text>Recarregar</Text>
      </TouchableOpacity>
    </View>
  );
}
