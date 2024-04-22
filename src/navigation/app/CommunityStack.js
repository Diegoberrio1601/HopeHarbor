import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome6 } from "@expo/vector-icons";
import { CommunityScreen } from "../../screens/app/Commnity";

const Stack = createNativeStackNavigator();

export const CommunityStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
