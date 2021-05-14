import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import GoalInput from "./Components/GoalInput";
import GoalItem from "./Components/GoalItem";

export default function App() {

  const [submitText, setsubmitText] = useState([]);

  const textShow = (enteredText) => {
    setsubmitText(textToShow => [...textToShow, { id: Math.random().toString(), value: enteredText }]);
    /* setsubmitText(textToShow => [...textToShow, { key: Math.random().toString(), value: enteredText }]); */
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={textShow} />
      <FlatList keyExtractor={(item, index) => item.id} data={submitText} renderItem={itemData => (<GoalItem title={itemData.item.value} />)}>
      </FlatList>

      <View style={styles.inputContainer}>
        <View style={{ justifyContent: 'center', flex: 3, alignItems: 'center', backgroundColor: 'red' }}>
          <Text>1</Text>
        </View>
        <View style={{ justifyContent: 'center', flex: 2, alignItems: 'center', backgroundColor: 'blue' }}>
          <Text>2</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: { flexDirection: 'row', padding: 20, width: '80%', height: 300, justifyContent: 'space-between', alignItems: 'stretch' },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 1
  }
});