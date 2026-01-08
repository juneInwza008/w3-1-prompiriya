import { View, Text, Button, StyleSheet, TextInput } from "react-native"; // นำเข้า Component พื้นฐานจาก React Native
import { useState } from "react"; // นำเข้า useState เพื่อใช้จัดการตัวแปรที่เปลี่ยนแปลงค่าได้
import { useRouter } from "expo-router"; // นำเข้า useRouter เพื่อใช้ในการเปลี่ยนหน้าแอป

export default function Kelvin() {
    const router = useRouter(); // สร้างตัวแปร router เพื่อใช้เรียกฟังก์ชันนำทาง
    const [celsius, setCelsius] = useState(""); // สร้าง state ชื่อ celsius เพื่อเก็บค่าที่พิมพ์ (เริ่มเป็นค่าว่าง)
    const [kelvin, setKelvin] = useState(0); // สร้าง state ชื่อ kelvin เพื่อเก็บผลลัพธ์ (เริ่มเป็น 0)
    const formula = 273.15; // กำหนดค่าคงที่สำหรับใช้บวกเพื่อแปลงหน่วย

    function calKelvin() {
        const num = parseFloat(celsius); // แปลงข้อความจากช่องพิมพ์ให้เป็นตัวเลขทศนิยม
        if (!isNaN(num)) { // ตรวจสอบว่าค่าที่กรอกมาเป็นตัวเลขจริงๆ หรือไม่
            let result = num + formula; // คำนวณตามสูตร: Celsius + 273.15
            setKelvin(result); // อัปเดตค่าผลลัพธ์ลงในตัวแปร kelvin เพื่อให้หน้าจอแสดงผล
        } else {
            alert("กรุณากรอกตัวเลข"); // แจ้งเตือนถ้าผู้ใช้ไม่ได้กรอกตัวเลข
        }
    }

    return (
        <View style={styles.container}> {/* ส่วนพื้นที่หลักของหน้าจอ */}
            
            <View style={styles.card}> {/* ส่วนกล่องการ์ดสีขาวที่รวมเนื้อหา */}
                <Text style={styles.mainTitle}>คำนวณแคลวิน</Text> {/* หัวข้อหลัก */}

                <View style={styles.resultContainer}> {/* ส่วนแสดงผลลัพธ์ */}
                    <Text>องศาเซลเซียส: {celsius || 0} °C</Text> 
                    <Text style={styles.resultText}>เท่ากับ: {kelvin.toFixed(2)} K</Text> {/* แสดงผลเคลวิน ทศนิยม 2 ตำแหน่ง */}
                </View>
                
                <TextInput 
                    style={styles.textInput} 
                    placeholder="กรอกองศาเซลเซียส (°C)" // ข้อความจางๆ ในช่องพิมพ์
                    keyboardType="numeric" // กำหนดให้คีย์บอร์ดที่เด้งขึ้นมาเป็นตัวเลข
                    value={celsius} // ผูกค่าในช่องพิมพ์กับตัวแปร celsius
                    onChangeText={(c) => setCelsius(c)} // เมื่อพิมพ์ ให้เอาค่าไปเก็บในตัวแปร celsius ทันที
                />        

                <View style={styles.buttonGroup}> {/* กลุ่มปุ่มกด */}
                    <Button title="คำนวณ" onPress={calKelvin} /> {/* เมื่อกดจะเรียกใช้ฟังก์ชัน calKelvin */}
                    <Button title="กลับหน้าแรก" color="gray" onPress={() => router.back()} /> {/* กดเพื่อย้อนกลับ */}
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // ให้พื้นที่ครอบคลุมทั้งหน้าจอ
        backgroundColor: "#E0F2F1", // สีพื้นหลัง (เขียว-ฟ้าอ่อน)
        justifyContent: "center", // จัดให้อยู่ตรงกลางแนวตั้ง
        alignItems: "center", // จัดให้อยู่ตรงกลางแนวนอน
    },
    card: {
        backgroundColor: "white", // สีพื้นหลังของกล่อง
        width: "85%", // ความกว้าง 85% ของหน้าจอ
        padding: 20, // เว้นระยะห่างด้านใน
        borderRadius: 15, // ทำมุมโค้งมน
        gap: 15, // เว้นระยะห่างระหว่างวัตถุข้างในแต่ละตัว
        elevation: 5, // สร้างเงา (สำหรับ Android)
    },
    mainTitle: {
        fontSize: 22, // ขนาดตัวอักษรหัวข้อ
        fontWeight: "700", // ความหนาของตัวอักษร
        textAlign: "center", // จัดตัวอักษรไว้ตรงกลาง
    },
    resultContainer: {
        alignItems: "center", // จัดข้อความผลลัพธ์ไว้ตรงกลาง
        marginVertical: 10, // เว้นระยะห่างบนล่าง
    },
    resultText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#2E7D32", // สีเขียวเข้ม
    },
    textInput: {
        borderWidth: 1, // เส้นขอบ
        borderColor: "#ccc", // สีเส้นขอบ
        borderRadius: 8, // ความมนของช่องพิมพ์
        padding: 10, // เว้นระยะห่างข้างในช่องพิมพ์
        fontSize: 16,
    },
    buttonGroup: {
        gap: 10, // เว้นระยะห่างระหว่างปุ่ม 2 ปุ่ม
    }
});