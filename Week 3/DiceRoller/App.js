import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Modal, TextInput } from 'react-native';

const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

export default function App() {
  const [enteredQuestion, setEnteredQuestion] = useState('');
  const [magicResponse, setMagicResponse] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function questionInputHandler(text) {
    setEnteredQuestion(text);
  }

  function handleButtonPress() {
    if (enteredQuestion === '') {
      return;
    }
    const randomIndex = Math.floor(Math.random() * responses.length);
    setMagicResponse(responses[randomIndex]);
    setModalVisible(true);
  }

  function closeModalHandler() {
    setModalVisible(false);
    setEnteredQuestion('');
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.root}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>Magic Eight Ball</Text>
        </View>

        <View style={styles.inputContainerStyle}>
          <TextInput 
            style={styles.textInput}
            placeholder="Ask a question..."
            placeholderTextColor="#ddd"
            onChangeText={questionInputHandler}
            value={enteredQuestion}
          />
        </View>

        <View style={styles.rollButtonContainer}>
          <Pressable
            android_ripple={{ color: "#210644" }}
            onPress={handleButtonPress}
            style={({ pressed }) => [pressed && styles.pressedButton]}
          >  
            <View style={styles.rollButton}>
              <Text style={styles.rollButtonText}>Ask the Ball</Text>
            </View>
          </Pressable>
        </View>
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Your Question:</Text>
            <Text style={styles.modalText}>{enteredQuestion}</Text>

            <Text style={styles.modalTitle}>Magic Eight Ball Says:</Text>
            <Text style={styles.modalResponse}>{magicResponse}</Text>

            <Pressable
              onPress={closeModalHandler}
              style={({ pressed }) => [styles.closeButton, pressed && styles.pressedButton]}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </Modal>
      </View>    
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#a70a6b',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  titlecontainer: {
    flex: 0.8,
    backgroundColor: '#0f0a0d',
    width: '85%',
    justifyContent: 'center',
    margin: 10,
    borderColor: '#fff',
    borderWidth: 3,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  inputContainerStyle: {
    width: '85%',
    margin: 10,
  },
  textInput: {
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#0f0a0d',
    width: '100%',
    padding: 12,
    borderRadius: 20,
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  rollButtonContainer: {
    flex: 0.8,
    backgroundColor: '#a70a6b',
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor: '#fff',
    borderWidth: 3,
    borderRadius: 20,
  },
  rollButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  rollButtonText: {
    fontSize: 22,
    padding: 4,
    color: '#110303',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pressedButton: {
    opacity: 0.75,
  },
  placeholderContainer: {
    margin: 10,
  },
  placeholderText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#a70a6b',
  },
  modalTitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 15,
    textTransform: 'uppercase',
  },
  modalText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  modalResponse: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 40,
    backgroundColor: '#0f0a0d',
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#fff',
    width: '100%',
  },
  closeButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  closeButtonText: {
    fontSize: 20,
    color: '#110303',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});