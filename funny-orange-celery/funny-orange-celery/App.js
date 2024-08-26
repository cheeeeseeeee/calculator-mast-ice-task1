import { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAdd = () => {
    const res = Number(num1) + Number(num2);
    setResult(res)
  };

  const handleSub = () => {
    const res = Number(num1) - Number(num2);
    setResult(res)
  };

  const handleMultiply = () => {
    const res = Number(num1) * Number(num2);
    setResult(res)
  };

  const handleDivide = () => {
    let res = 0;
    if (Number(num2) !== 0) {
      res = Number(num1) / Number(num2);
    } else {
      res = 'Error';
    }
    setResult(res)
  };

  const handleExponent = () => {
    const res = Number(num1) ** Number(num2);
    setResult(res)
  };

  const handleSqrt = () => {
    const res = Math.sqrt(Number(num1));
   setResult(res)
  };

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CALCULATOR</Text>

      <TextInput
        style={styles.input}
        placeholder="First number"
        value={num1}
        onChangeText={setNum1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Second number"
        value={num2}
        onChangeText={setNum2}
        keyboardType="numeric"
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSub}>
          <Text style={styles.buttonText}> - </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleMultiply}>
          <Text style={styles.buttonText}> * </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDivide}>
          <Text style={styles.buttonText}> / </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handleExponent}>
          <Text style={styles.buttonText}> ** </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSqrt}>
          <Text style={styles.buttonText}> sqrt </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.resultText}> Answer: {result} </Text>

      <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
        <Text style={styles.buttonText}> AC </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    paddingHorizontal: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  resultText: {
    fontSize: 20,
    marginTop: 20,
  },
  clearButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default App;

