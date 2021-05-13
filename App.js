import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredText, setenteredText] = useState('');
  const [submitText, setsubmitText] = useState([]);

  const textEnter = (text) => {
    setenteredText(text);
  }

  const textShow = () => {
    setsubmitText(textToShow => [...textToShow, { id: Math.random().toString(), value: enteredText }]);
    /* setsubmitText(textToShow => [...textToShow, { key: Math.random().toString(), value: enteredText }]); */
  }

  return (
    <View style={styles.screen}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20
        }}
      >
        <TextInput
          placeholder="Add Text"
          onChangeText={textEnter}
          value={enteredText}
          style={{
            width: "60%",
            borderColor: "black",
            borderWidth: 3,
            padding: 10
          }}
        />
        <Button title="Enter" onPress={textShow} />
      </View>
      <FlatList keyExtractor={(item, index) => item.id} data={submitText} renderItem={(itemData) => (<View style={styles.listItem}><Text>{itemData.item.value}</Text></View>)}>
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
