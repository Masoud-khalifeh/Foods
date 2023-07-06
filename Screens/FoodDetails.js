import { useLayoutEffect, useState } from "react";
import { Text, ScrollView, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { Image, StyleSheet } from "react-native";
import Explanation from "../components/Explanation";
import { colors } from '../data/Colors';
import IconProducer from "../components/Icon";




export default function FoodDetails({ route, navigation }) {
    const { id } = route.params;
    const food = (MEALS.filter(item => item.id === id))[0];
    const [isFavorited, setIsFavorited] = useState(false);


    function pressHandler() {
        setIsFavorited(!isFavorited);
 

    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconProducer filled={isFavorited} onPress={pressHandler} />
            }
        })
    }, [navigation, isFavorited])

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
    icon: {
        fontSize: 24,
        marginRight: 15,
        color: 'red',
    },
    container: {
        backgroundColor: colors.primary,
        paddingBottom: "5%"
    },
    header: {
        alignItems: "center",
        height: "40%"
    },
    image: {
        width: "100%",
        height: "80%"
    },
    title: {
        color: "white",
        fontSize: 20,
        paddingVertical: 10,
        fontWeight: "800"
    },
    details: {
        color: colors.extra,
        marginBottom: 5
    },
    scroll: {
        height: "60%",
    }
})