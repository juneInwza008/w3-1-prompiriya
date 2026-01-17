import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router"; // 1. นำเข้า useRouter

export default function Square() {
    const router = useRouter() // 2. สร้างตัวแปร router
    
    const [width, setWidth] = useState("")
    const [length, setLength] = useState("")
    const [area, setArea] = useState(0)

    // ฟังก์ชันคำนวณ
    function calSquare() {
        const result = Number(width) * Number(length)
        setArea(result);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>คำนวณพื้นที่สี่เหลี่ยม</Text>

            {/* กล่องแสดงผลลัพธ์ */}
            <View style={styles.resultBox}>
                <Text style={styles.resultText}>พื้นที่คือ: {area} ตร.ซม.</Text>
            </View>
            
            {/* ช่องกรอกข้อมูล */}
            <TextInput 
                style={styles.input} 
                placeholder="กรอกความกว้าง (ซม.)"
                keyboardType="numeric"
                value={width}
                onChangeText={setWidth}
            />         

            <TextInput 
                style={styles.input} 
                placeholder="กรอกความยาว (ซม.)"
                keyboardType="numeric"
                value={length}
                onChangeText={setLength}
            />

            {/* กลุ่มปุ่มกด */}
            <View style={styles.buttonGroup}>
                <Button title="คำนวณพื้นที่" onPress={calSquare} color="#2ecc71" />
                
                {/* 3. ปุ่มกลับหน้าหลัก */}
                <Button title="กลับหน้าหลัก" onPress={() => router.back()} color="#95a5a6" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        gap: 15 
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
    resultBox: {
        backgroundColor: "#f0fdf4",
        padding: 20,
        borderRadius: 12,
        width: "80%",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#dcfce7"
    },
    resultText: {
        fontSize: 20,
        color: "#166534",
        fontWeight: "bold"
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        width: "80%",
        padding: 15,
        fontSize: 16,
        backgroundColor: "#fafafa"
    },
    buttonGroup: {
        width: "80%",
        gap: 10, // เว้นระยะห่างระหว่างปุ่ม
        marginTop: 10
    }
})