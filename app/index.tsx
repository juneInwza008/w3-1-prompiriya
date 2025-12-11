import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function App(){

    const router = useRouter()

    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>หน้าแรก</Text>
            <Button title="ไปหน้า2" onPress={() => router.navigate('/square')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"skyblue",
        justifyContent: "center",
       alignItems: "center" 
      },
      mainTitle:{
        fontSize:20,
        fontWeight: "700"
      }
    }
)