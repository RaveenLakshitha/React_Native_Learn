import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [changedText, setChangedText] = useState('');
  const [textList, setTextList] = useState([]);

  const textChanger = (text) => {
    setChangedText(text);
  }

  const textDisplay = () => {
    setTextList(textToShow => [...textToShow, changedText]);
  }

  return (
    <ScrollView style={styles.screen}>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20
        }}
      >
        <TextInput
          placeholder="Add a Title"
          onChangeText={textChanger}
          value={changedText}
          style={{
            width: "60%",
            borderColor: "black",
            borderWidth: 3,
            padding: 10
          }}
        />
        <Button title="Enter" onPress={textDisplay} />
      </View>

      <View >
        {textList.map(goal => (<View style={styles.listItem} key={goal}><Text >{goal}</Text></View>))}
      </View>

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
    </ScrollView>
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
