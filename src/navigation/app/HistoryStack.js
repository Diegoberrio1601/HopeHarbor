import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome6 } from "@expo/vector-icons";
import { HistoryScreen } from "../../screens/app/History";

const Stack = createNativeStackNavigator();

export const HistoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
