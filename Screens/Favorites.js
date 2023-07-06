import { View, Text } from "react-native";
import { MEALS } from '../data/dummy-data';
import FoodGrid from "../components/FoodGrid";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from '../data/Colors';
import { useContext } from "react";
import { FavoriteContextModule } from '../store/context/FavoriteContext'


export default function Favorite({ navigation }) {

    const sharedData = useContext(FavoriteContextModule);
    const newList = MEALS.filter((item) =>
        sharedData.favorites.includes(item.id)
    );


    function foodPressHandler(id, title) {
        navigation.navigate("FoodDetails", { id: id, title: title })
    }

    return (
        <View style={styles.container}>
            {newList.length ?
                <FlatList contentContainerStyle={styles.flatlist} data={newList} renderItem={({ item }) => (
                    <FoodGrid {...item} onPress={() => foodPressHandler(item.id, item.title)} />
                )} />
                :
                <Text style={styles.text}>There is no Favorite Food</Text>
            }
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.primary,
        justifyContent:"center"
       
    },
    flatlist: {
        paddingBottom: 30
    },
    text:{
       color:"white",
       fontSize:20,
       marginBottom:150,
       textAlign:"center"
    }
})