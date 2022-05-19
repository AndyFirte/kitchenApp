import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import ProcedureGalletas from "./screens/ProcedureGalletas";
import GalletasConChispas from "./screens/GalletasConChispas";
import StartScreen from "./screens/StartScreen";
import PastelVainilla from "./screens/PastelVainilla";
import ProcedurePastel from "./screens/ProcedurePastel";

const volume = ["mL", "tsp", "tbsp", "tazas", "L"];
const mass = ["g", "oz", "lb", "Kg"];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const changeIngredientVolume = (
    ingredientIndex,
    ingredientVolume,
    ingredientVolumeInMl
  ) => {
    var newIngredientVolume;
    switch (ingredientIndex) {
      case 0:
        newIngredientVolume = ingredientVolumeInMl;
        break;
      case 1:
        //1ml a tbsp. 4.92892159 ml = 1 tsp
        newIngredientVolume = ingredientVolume / 4.92892159;
        break;
      case 2:
        //tsp a tbsp. 3tsp = 1tbsp
        newIngredientVolume = ingredientVolume / 3;
        break;
      case 3:
        //tbsp a taza. 16 tbsp = 1 taza
        newIngredientVolume = ingredientVolume / 16;
        break;
      case 4:
        //1 taza a Litro. 1000 mL = 1 L
        newIngredientVolume = ingredientVolumeInMl / 1000;
        break;
    }
    return newIngredientVolume;
  };
  const changeIngredientMass = (
    ingredientIndex,
    ingredientMass,
    ingredientMassInG
  ) => {
    var newIngredientMass;
    switch (ingredientIndex) {
      case 0:
        newIngredientMass = ingredientMassInG;
        break;
      case 1:
        //1g a oz. 28.3495231 g = 1 oz
        newIngredientMass = ingredientMass / 28.3495231;
        break;
      case 2:
        //oz a lb. 16 oz = 1 lb
        newIngredientMass = ingredientMass / 16;
        break;
      case 3:
        //lb a kg. 1000 g = 1 kg
        newIngredientMass = ingredientMassInG / 1000;
        break;
    }
    return newIngredientMass;
  };

  const changeScreen = (screenNumber) => {
    setCurrentScreen(screenNumber);
  };

  let content;
  let titleHeader;

  switch (currentScreen) {
    case 0:
      titleHeader = "Kitchen App";
      content = <StartScreen changeScreen={changeScreen} />;
      break;
    case 1:
      console.log("Se entró a caso 1");
      titleHeader = "Galletas con chispas: Ingredientes";
      content = (
        <GalletasConChispas
          volume={volume}
          changeIngredientVolume={changeIngredientVolume}
          mass={mass}
          changeIngredientMass={changeIngredientMass}
          changeScreen={changeScreen}
        />
      );
      break;
    case 2:
      console.log("Se entró a 2");
      titleHeader = "Galletas con chispas: Procedimiento";
      content = <ProcedureGalletas changeScreen={changeScreen} />;
      break;
    case 3:
      titleHeader = "Pastel de vainilla: Ingredientes";
      content = (
        <PastelVainilla
          volume={volume}
          changeIngredientVolume={changeIngredientVolume}
          mass={mass}
          changeIngredientMass={changeIngredientMass}
          changeScreen={changeScreen}
        />
      );
      break;
    case 4:
      titleHeader = "Pastel de vainilla: Procedimiento";
      content = <ProcedurePastel changeScreen={changeScreen} />;
      break;
    default:
      console.log("Se entra en el default");
  }

  return (
    <View style={styles.screen}>
      <Header style={styles.screen} title={titleHeader} />
      {content}
    </View>
  );
}

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
