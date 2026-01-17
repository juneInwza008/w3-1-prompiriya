import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Kelvin() {
    const router = useRouter();
    const [celsius, setCelsius] = useState("");
    
    // คำนวณค่า Kelvin ตรงๆ ในตอนแสดงผล (ไม่ต้องใช้ state แยกอีกตัวให้งง)
    const numCelsius = parseFloat(celsius) || 0;
    const kelvinResult = numCelsius + 273.15;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.mainTitle}>คำนวณแคลวิน</Text>

                <View style={styles.resultContainer}>
                    {/* แสดงค่าที่กำลังพิมพ์ */}
                    <Text>{numCelsius} °C</Text> 
                    {/* แสดงผลลัพธ์ทันที (Real-time) */}
                    <Text style={styles.resultText}>เท่ากับ: {kelvinResult.toFixed(2)} K</Text>
                </View>
                
                <TextInput 
                    style={styles.textInput} 
                    placeholder="กรอกองศาเซลเซียส (°C)"
                    keyboardType="numeric"
                    value={celsius}
                    onChangeText={setCelsius} // ยุบฟังก์ชันให้สั้นลง
                />        

                <View style={styles.buttonGroup}>
                    {/* ลบปุ่มคำนวณออกเพราะเราคำนวณแบบ Real-time ให้แล้ว */}
                    <Button title="กลับหน้าแรก" color="gray" onPress={() => router.back()} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E0F2F1",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        backgroundColor: "white",
        width: "85%",
        padding: 25,
        borderRadius: 20,
        gap: 15,
        elevation: 4,
    },
    mainTitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    resultContainer: {
        alignItems: "center",
        padding: 15,
        backgroundColor: '#f9f9f9', // เพิ่มสีพื้นหลังให้อ่านง่ายขึ้น
        borderRadius: 10,
    },
    resultText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#2E7D32",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        padding: 12,
        textAlign: 'center', // พิมพ์ตัวเลขตรงกลางช่อง
        fontSize: 18,
    },
    buttonGroup: {
        marginTop: 10,
    }
});