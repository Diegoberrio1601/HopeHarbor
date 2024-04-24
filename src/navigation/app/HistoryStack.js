import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome6 } from "@expo/vector-icons";
import { HistoryScreen } from "../../screens/app/History";

const Stack = createNativeStackNavigator();

export const HistoryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HistoryScreen"
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#141718", // Cambiar el color de fondo del encabezado
        },
        headerTintColor: "#fff", // Cambiar el color del texto del encabezado
      }}
    >
      <Stack.Screen name="HistoryScreen" component={HistoryScreen}  options={{
          headerTitle: () => (
            <Text style={{ fontFamily: "Medium", color: "#fff", fontSize:22 }}>Mi historial</Text>
          ),
        }}/>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
