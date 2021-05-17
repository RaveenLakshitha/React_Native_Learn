
import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {
    const [enteredText, setenteredText] = useState('');

    const textEnter = (text) => {
        setenteredText(text);
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputText}>
            <TextInput
                placeholder="Add Text"
                onChangeText={textEnter}
                value={enteredText}
                style={{
                    width: "60%",
                    borderColor: "black",
                    borderWidth: 3,
                    padding: 10,
                    marginBottom:10
                }}
            />
            <Button title="Enter" onPress={props.onAddGoal.bind(this, enteredText)} />
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputText: {
        flex:1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})

export default GoalInput;