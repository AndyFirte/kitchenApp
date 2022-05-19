import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import myColors from "../constants/colors";

const StartScreen = ({ changeScreen }) => {
  return (
    <View style={styles.screen}>
      <Text>Esta es la página principal</Text>
      <View>
        <ul>
          <li>
            <Text>Galletas con chispas</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Ir"
                color={myColors.secondary}
                onPress={() => {
                  changeScreen(1);
                }}
              />
            </View>
          </li>
          <li>
            <Text>Pastel de vainilla</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Ir"
                color={myColors.secondary}
                onPress={() => {
                  changeScreen(3);
                }}
              />
            </View>
          </li>
        </ul>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    flexDirection: "column",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

export default StartScreen;
