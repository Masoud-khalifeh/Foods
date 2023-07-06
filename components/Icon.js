import { Icon } from '@rneui/themed';
import { Pressable, StyleSheet } from "react-native";

export default function IconProducer(props) {

    return (
        <Pressable onPress={props.onPress} style={(pressed)=>{pressed&&styles.pressed}}>
            <Icon name={props.filled ? "star" : "star-outline"} color="white" style={styles.icon} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    },
    icon: {
        padding: 10,
    }
})