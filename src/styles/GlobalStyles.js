import { StyleSheet } from "react-native";
import { colorPalette } from "./colorPalette"; 



export const Styles = StyleSheet.create({
    // Button
    btnBlue: {
        width: 7,
        height: 72,
        borderRadius: 24,
        backgroundColor: colorPalette.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnDark: {
        // width: 72,
        // height: 72,
        padding:10,
        borderRadius: 5,
        backgroundColor: colorPalette.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnLight: {
        // width: 72,
        // height: 72,
        padding:10,
        borderRadius: 5,
        backgroundColor: colorPalette.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: colorPalette.btnGray,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallTextLight: {
        fontSize: 15,
        color: colorPalette.white,
    },
    smallTextDark: {
        fontSize: 15,
        color: colorPalette.black,
    },
    
})