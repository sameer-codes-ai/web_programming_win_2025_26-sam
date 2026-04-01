import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function App() {

  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearDisplay = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const addGST = () => {
    try {
      const value = eval(input);
      const gstValue = value + (value * 0.18);
      setInput(gstValue.toFixed(2).toString());
    } catch {
      setInput("Error");
    }
  };

  const percentage = () => {
    try {
      const value = eval(input);
      setInput((value / 100).toString());
    } catch {
      setInput("Error");
    }
  };

  const styles = {
    container: {
      flex: 1,
      backgroundColor: "#222",
      paddingTop: 100,
    },

    display: {
      width: "95%",
      height: 70,
      alignSelf: "center",
      backgroundColor: "#000",
      justifyContent: "center",
      alignItems: "flex-end",
      padding: 15,
      borderRadius: 10,
      marginBottom: 15
    },

    displayText: {
      color: "#0f0",
      fontSize: 30
    },

    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      paddingHorizontal: 10
    },

    button: {
      width: "22%",
      height: 60,
      marginVertical: 6,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10
    },

    lastRow: {
      flexDirection: "row",
      justifyContent: "flex-end", 
      width: "100%",
      paddingHorizontal: 5,
      gap: 15
    },

    numBtn: {
      backgroundColor: "#444"
    },

    opBtn: {
      backgroundColor: "orange"
    },

    equalBtn: {
      backgroundColor: "green"
    },

    clearBtn: {
      backgroundColor: "red"
    },

    btnText: {
      color: "white",
      fontSize: 18
    }
  };

  return (
    <View style={styles.container}>

      {/* Display */}
      <View style={styles.display}>
        <Text style={styles.displayText}>
          {input || "0"}
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.grid}>

        <TouchableOpacity style={[styles.button, styles.clearBtn]} onPress={clearDisplay}>
          <Text style={styles.btnText}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.opBtn]} onPress={percentage}>
          <Text style={styles.btnText}>%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.opBtn]} onPress={addGST}>
          <Text style={styles.btnText}>Tax +</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.opBtn]} onPress={() => handleClick("/")}>
          <Text style={styles.btnText}>/</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.opBtn]} onPress={() => handleClick("*")}>
          <Text style={styles.btnText}>*</Text>
        </TouchableOpacity>

        {/* Row 2 */}
        <TouchableOpacity style={[styles.button, styles.numBtn]} onPress={() => handleClick("7")}>
          <Text style={styles.btnText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.numBtn]} onPress={() => handleClick("8")}>
          <Text style={styles.btnText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.numBtn]} onPress={() => handleClick("9")}>
          <Text style={styles.btnText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.opBtn]} onPress={() => handleClick("-")}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>

        {/* Row 3 */}
        <TouchableOpacity style={[styles.button, styles.numBtn]} onPress={() => handleClick("4")}>
          <Text style={styles.btnText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.numBtn]} onPress={() => handleClick("5")}>
          <Text style={styles.btnText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.numBtn]} onPress={() => handleClick("6")}>
          <Text style={styles.btnText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.opBtn]} onPress={() => handleClick("+")}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>

        {/* Row 4 */}
        <TouchableOpacity style={[styles.button, styles.numBtn]} onPress={() => handleClick("1")}>
          <Text style={styles.btnText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.numBtn]} onPress={() => handleClick("2")}>
          <Text style={styles.btnText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.numBtn]} onPress={() => handleClick("3")}>
          <Text style={styles.btnText}>3</Text>
        </TouchableOpacity>

      </View>

      {/* LAST ROW (RIGHT ALIGNED) */}
      <View style={styles.lastRow}>

        <TouchableOpacity style={[styles.button, styles.numBtn]} onPress={() => handleClick("0")}>
          <Text style={styles.btnText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.numBtn]} onPress={() => handleClick(".")}>
          <Text style={styles.btnText}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.equalBtn]} onPress={calculate}>
          <Text style={styles.btnText}>=</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}