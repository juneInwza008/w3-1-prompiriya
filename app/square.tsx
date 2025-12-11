import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

export default function Square(){
    // พท.พื้นที่สี่เหลี่ยม = กว้าง * ยาว
    // output = input * input
    const [width, setWidth] = useState(0)
    const [lenght, seyLenge] = useState(0)
    const [area, setArea] = useState(0)
    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>คำนวณพื้นที่สี่เหลี่ยม</Text>
            {/*<Button title="กลับหน้าแรก"/>*/}
            
            <TextInput style={styles.textInput} 
            placeholder="กรอกความกว้าง"
            value = {width.toString()}
            onChangeText={(w) => setWidth(Number(w))}
            />         
            <TextInput style={styles.textInput} placeholder="กรอกความยาว"/>

            <Button title="คำนวณ"/>         
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"white",
        justifyContent: "center",
        alignItems: "center" ,
        gap: 20
      },
      mainTitle:{
        fontSize:20,
        fontWeight: "700"
      },
      textInput:{
        borderWidth: 1,
        width: "80%",
        borderColor:"green"
    }
    })