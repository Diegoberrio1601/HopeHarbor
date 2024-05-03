import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome6 } from "@expo/vector-icons";
import { HomeScreen } from "../../screens/app/Home";
import { DetailMessageScreen } from "../../screens/app/detailMessage/DetailMessage";


const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#141718", // Cambiar el color de fondo del encabezado
        },
        headerTintColor: "#fff", // Cambiar el color del texto del encabezado
       
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontFamily: "Medium", color: "#fff", fontSize:22 }}>Mensaje del día</Text>
          ),
        }}
      />
      <Stack.Screen
        name="DetailMessageScreen"
        component={DetailMessageScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontFamily: "Medium", color: "#fff", fontSize:22 }}>Mensaje de Diego</Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
