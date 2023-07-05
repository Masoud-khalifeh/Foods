import { Text, ScrollView, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { Image, StyleSheet } from "react-native";
import Explanation from "../components/Explanation";

export default function FoodDetails({ route }) {
    const { id } = route.params;
    const food = (MEALS.filter(item => item.id === id))[0];
    return (
        < View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: food.imageUrl }} style={styles.image} resizeMode="cover" />
                <Text style={styles.title}>{food.title}</Text>
                <Text style={styles.details}>{food.duration}   {food.complexity}   {food.affordability}</Text>
            </View>
            <ScrollView style={styles.scroll}>
                <Explanation title="Ingredients" data={food.ingredients} />
                <Explanation title="Steps" data={food.steps} />
            </ScrollView>

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3f3025",
    },
    header: {
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        color: "white",
        fontSize: 20,
        paddingVertical:10,
        fontWeight: "800"
    },
    details: {
        color: "#fff4ee",
        marginBottom:5
    },
    scroll:{
        height:"65%",
    }
})