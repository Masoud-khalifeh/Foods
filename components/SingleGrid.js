import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";




export default function SingleGrid(props) {

    return (
        <Pressable style={[styles.container,{backgroundColor:`${props.color}`}]} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    )
}



const styles = StyleSheet.create({
    container: {
        borderRadius: "10%",
        flex: 1,
        margin:"5%",
        justifyContent:"center",
        shadowColor:"gray",
        shadowOpacity:"80%",
        shadowOffset:{width:0,height:0},
    },
    text: {
        fontSize: 20,
        fontWeight:800,
        textAlign:"center"
    }
})