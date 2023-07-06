import { View, Text } from "react-native";
import { MEALS } from '../data/dummy-data';
import FoodGrid from "../components/FoodGrid";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";
import {colors} from '../data/Colors'


export default function Favorite({  navigation }) {
    

    function foodPressHandler(id,title) {
        navigation.navigate("FoodDetails", { id: id,title: title })
    }
console.log(MEALS)
    return (
        <View style={styles.container}>

            <FlatList contentContainerStyle={styles.flatlist} data={MEALS} keyExtractor={(item) => item.id} renderItem={({ item }) => (
                <FoodGrid {...item} onPress={() => foodPressHandler(item.id,item.title)} />
            )} />


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.primary,
    },
    flatlist: {
        paddingBottom: 30
    }
})