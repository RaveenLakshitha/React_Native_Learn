import React, { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./Components/GoalInput";
import GoalItem from "./Components/GoalItem";

export default function App() {

  const [submitText, setsubmitText] = useState([]);
  const [isAddMode, setisAddMode] = useState(false);

  const textShow = (enteredText) => {
    setsubmitText(textToShow => [...textToShow, { id: Math.random().toString(), value: enteredText }]);
    /* setsubmitText(textToShow => [...textToShow, { key: Math.random().toString(), value: enteredText }]); */
    setisAddMode(false)

  }

  const removeText = (textId) =>{
    setsubmitText(textShow =>{ 
      return textShow.filter(goal => goal.id !== textId)})
  }

  return (
    <View style={styles.screen}>
      <Button title="Add a Goal" onPress={() => setisAddMode(true)}/>
      <GoalInput onAddGoal={textShow} visible={isAddMode}/>
      <FlatList keyExtractor={(item, index) => item.id} data={submitText} renderItem={itemData => (<GoalItem  id={itemData.item.id} onDelete={removeText} title={itemData.item.value} />)}>
      </FlatList>

      {/* <View style={styles.inputContainer}>
        <View style={{ justifyContent: 'center', flex: 3, alignItems: 'center', backgroundColor: 'red' }}>
          <Text>1</Text>
        </View>
        <View style={{ justifyContent: 'center', flex: 2, alignItems: 'center', backgroundColor: 'blue' }}>
          <Text>2</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
          <Text>3</Text>
        </View>
      </View> */}
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