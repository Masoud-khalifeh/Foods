import { View, Text } from "react-native";
import { CATEGORIES } from '../data/dummy-data'
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";
import SingleGrid from "../components/SingleGrid";


export default function Categories({navigation}) {

    function pressGridHandler(index,title) {
        navigation.navigate("SingleCategory",{id:index,title: title})
    }
    return (
        
            <View style={styles.container}>


                <FlatList 
                numColumns={2}
                contentContainerStyle={styles.flatlist}
                data={CATEGORIES} renderItem={({ item }) => (
                    <View style={styles.grids}>
                        <SingleGrid
                            color={item.color}
                            title={item.title}
                            onPress={()=>pressGridHandler(item.id,item.title)}
                        />
                    </View>

                )} keyExtractor={(item) => item.id} />
            </View>
       

    )
}


const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        flex:1,
        backgroundColor:"#3f3025",
        paddingTop:10

    },
    grids: {
        width: 190,
        height: 190
    },
    flatlist:{
     
        flexGrow: 1,
        width: '100%',
        paddingBottom:30,
    }

})