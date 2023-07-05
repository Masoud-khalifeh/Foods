import { StyleSheet } from "react-native";
import { Text, Image } from "react-native";
import { Pressable } from "react-native";

export default function foodGrid(props) {

    return (
        <Pressable style={styles.container}>
            <Image style={styles.image} source={{ uri: props.imageUrl }} />
            <Text style={styles.textTitle}>{props.title}</Text>
            <Text style={styles.textdetail}>{props.duration}   {props.complexity}   {props.affordability}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        margin: "5%",
        marginBottom:0,
        borderRadius: "10%",
        backgroundColor: "white",
        overflow:"hidden"
    },
    image: {
        width: "100%",
        height: 200
    },
    textTitle: {
        margin: "3%",
        fontWeight:800,
        fontSize:20
    },
    textdetail: {
        marginBottom: "3%",
        fontSize:15
    }
})