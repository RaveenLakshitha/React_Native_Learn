
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {
    const [enteredText, setenteredText] = useState('');

    const textEnter = (text) => {
        setenteredText(text);
    }

    return (
        <View style={styles.inputText}>
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
            <Button title="Enter" onPress={props.onAddGoal.bind(this, enteredText)} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputText: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20
    }
})

export default GoalInput;