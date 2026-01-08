import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function App(){

    const router = useRouter()

    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>หน้าแรก</Text>
            <Button title="คำนวณพื้นที่4 เหลี่ยม" onPress={() => router.navigate('/square')}/>
            <Button title="คำนวณเเคลวิน" onPress={() => router.navigate('/kelvin')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"skyblue",
        justifyContent: "center",
       alignItems: "center", 
        gap: 10
      },
      mainTitle:{
        fontSize:20,
        fontWeight: "700",
        
      }
    }
)