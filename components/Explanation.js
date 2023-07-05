import { StyleSheet } from "react-native"
import { View, Text } from "react-native";
import uuid from 'react-native-uuid';
import {colors} from '../data/Colors'

export default function Explanation(props) {

    //gets a title and an array to show
    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.titleText}>{props.title}</Text>
            </View>
            <View style={styles.itemsView}>
                {props.data.map(item => (
                    <Text key={uuid.v4()} style={styles.detailText}>{item}</Text>
                ))}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        margin: "5%",
        marginBottom: 0,

    },
    itemsView: {
        borderTopWidth: "4%",
        borderTopColor: colors.secondary,
        paddingTop:"3%",
        width: "80%",
        alignItems: "center"
    },
    titleText: {
        fontSize: 20,
        fontWeight: 700,
        paddingBottom:"3%",
        color:colors.secondary
    },
    detailText: {
        width:"100%",
        backgroundColor: colors.secondary,
        borderRadius: 10,
        margin: "1%",
        overflow: "hidden",
        paddingHorizontal: "2%",
        paddingVertical:"1%",
        color:colors.primary,
        fontWeight:400
    }
})