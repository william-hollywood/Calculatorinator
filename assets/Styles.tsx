import { StyleSheet } from "react-native";
import { menuHeight } from "../components/Header";

export const styles = StyleSheet.create({
    content: {
        zIndex: -1,
        paddingTop: menuHeight + 6,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    addCellButt: {
        width: 50,
        height: 50,
        borderWidth: 3,
    }
});