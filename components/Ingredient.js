/*
Este componente recibe 4 props
ingredientMetric: la medida actual del ingrediente
measure: un arreglo con distintas unidades de medida
ingredientIndex: el índice que indica qué unidad de medida de measure se está usando
changeIngredientMetric: una función que convierte ingredientMetric en su equivalente en otra unidad de medida

description: descripción del ingrediente

si se deja ingredientMetric vacío solo se mostrará la descripción, de lo contrario se mostrará el botón
 */

import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import NumberFormat from "react-number-format";
import myColors from "../constants/colors";

const Ingredient = ({
  ingredientMetric,
  ingredientIndex,
  changeIngredientMetric,
  measure,
  description,
}) => {
  let confirmedButton;
  let confirmedMutableIngredient;

  if (ingredientMetric) {
    confirmedButton = (
      <View style={styles.buttonContainer}>
        <Button
        title="unidad"
        color={myColors.secondary}
        onPress={changeIngredientMetric}
      />
      </View>
      
    );
    confirmedMutableIngredient = (
      <Text>
        <NumberFormat
          displayType="text"
          value={ingredientMetric}
          type="text"
          decimalScale={2}
        />{" "}
        {measure[ingredientIndex]}
      </Text>
    );
  }

  let item = (
    <View style={styles.ingredientLine}>
      {confirmedMutableIngredient}
      <Text>{description}</Text>
    </View>
  );

  return (
    <View style={styles.ingredient}>
      <input type="checkbox" />
      <View style={styles.ingredientLine}>{confirmedButton}</View>
      {item}
      
    </View>
  );
};

const styles = StyleSheet.create({
  ingredient: {
    //display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",

  },
  ingredientLine: {},
  buttonContainer: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Ingredient;
