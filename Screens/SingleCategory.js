import { View, Text } from "react-native";
import { MEALS } from '../data/dummy-data';
import FoodGrid from "../components/FoodGrid";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";

export default function SingleCategory({ route, navigation }) {
    const { id } = route.params;
    const details = MEALS.filter(item => item.categoryIds.includes(id));

    function foodPressHandler(id,title) {
        navigation.navigate("FoodDetails", { id: id,title: title })
    }

    return (
        <View style={styles.container}>

            <FlatList contentContainerStyle={styles.flatlist} data={details} keyExtractor={(item) => item.id} renderItem={({ item }) => (
                <FoodGrid {...item} onPress={() => foodPressHandler(item.id,item.title)} />
            )} />


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#3f3025",
    },
    flatlist: {
        paddingBottom: 30
    }
})