/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// adb connect 127.0.0.1:21503
// npx react-native run-android
import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Hr from 'react-native-hr-component';
import { Appbar } from 'react-native-paper';


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
    textAlign: "center"
  },
})

const App = () => {
  const [value, setValue] = useState('')
  const [oldValue, setOldValue] = useState('')
  const [result, setResult] = useState('')

  const _setValue = (valueSet) => {
    valueSetup = value
    valueSetup += valueSet
    setValue(valueSetup)
  }

  const _setStateValue = () => {
    valueResult = eval(value)
    setOldValue(value)
    setValue(valueResult)
    setResult(valueResult)
  }

  const _clear = () => {
    setOldValue('')
    setResult('')
    setValue('')
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor="#1524cb"
      />
      <Appbar.Header>
        <Appbar.Content title="Calculator" titleStyle={{ textAlign: "center" }} />
      </Appbar.Header>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.8, backgroundColor: "#eee" }}>

          <View style={{ flex: 1, backgroundColor: "#eee" }}>

          </View>
          <Text style={{ fontSize: 40, textAlign: "right", padding: 5 }}>{oldValue}</Text>

        </View>
        <View style={{ flex: 0.2, backgroundColor: "#ddd" }}>
          <Hr text="" lineColor="#20272F" fontSize={1} />
          <Text style={{ fontSize: 40, textAlign: "right", padding: 5 }}>{(value) ? value : result}</Text>
        </View>
      </View>


      <View style={{ flex: 1, backgroundColor: "#20272F" }}>
        <View style={{ flex: 0.5, flexDirection: "row" }}>
          <View style={{ flex: 1, backgroundColor: "green" }}>
            <Text
              onPress={() => _clear()}
              style={[styles.textStyle]}>C</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "yellow" }}>
            <Text
              onPress={() => setValue(value.slice(0, -1))}
              style={{ fontSize: 50, marginLeft: 18, padding: 3 }}>DEL</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "green" }}>
            <Text
              onPress={() => _setValue("/")}
              style={{ fontSize: 50, marginLeft: 55 }}>/</Text>
          </View>
        </View>


        <View style={{ flex: 0.5, flexDirection: "row" }}>
          <View style={{ flex: 1, backgroundColor: "red" }}>
            <Text
              onPress={() => _setValue("7")}
              style={[styles.textStyle]}>7</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "orange" }}>
            <Text
              onPress={() => _setValue("8")}
              style={[styles.textStyle]}>8</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "red" }}>
            <Text
              onPress={() => _setValue("9")}
              style={[styles.textStyle]}>9</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "orange" }}>
            <Text
              onPress={() => _setValue("*")}
              style={[styles.textStyle]}>*</Text>
          </View>
        </View>


        <View style={{ flex: 0.5, flexDirection: "row" }}>
          <View style={{ flex: 1, backgroundColor: "green" }}>
            <Text
              onPress={() => _setValue("4")}
              style={[styles.textStyle]}>4</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "yellow" }}>
            <Text
              onPress={() => _setValue("5")}
              style={[styles.textStyle]}>5</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "green" }}>
            <Text
              onPress={() => _setValue("6")}
              style={[styles.textStyle]}>6</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "yellow" }}>
            <Text
              onPress={() => _setValue("-")}
              style={[styles.textStyle]}>-</Text>
          </View>
        </View>


        <View style={{ flex: 0.5, flexDirection: "row" }}>
          <View style={{ flex: 1, backgroundColor: "red" }}>
            <Text
              onPress={() => _setValue("1")}
              style={[styles.textStyle]}>1</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "orange" }}>
            <Text
              onPress={() => _setValue("2")}
              style={[styles.textStyle]}>2</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "red" }}>
            <Text
              onPress={() => _setValue("3")}
              style={[styles.textStyle]}>3</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "orange" }}>
            <Text
              onPress={() => _setValue("+")}
              style={[styles.textStyle]}>+</Text>
          </View>
        </View>


        <View style={{ flex: 0.5, flexDirection: "row" }}>
          <View style={{ flex: 1, backgroundColor: "green" }}>
            <Text
              onPress={() => _setValue("0")}
              style={[styles.textStyle]}>0</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "yellow" }}>
            <Text
              onPress={() => _setValue("00")}
              style={[styles.textStyle]}>00</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "green" }}>
            <Text
              onPress={() => _setValue(".")}
              style={[styles.textStyle]}>.</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "yellow" }}>
            <Text
              onPress={() => _setStateValue()}
              style={[styles.textStyle]}>=</Text>
          </View>
        </View>


      </View>
    </View>
  );
}
export default App;