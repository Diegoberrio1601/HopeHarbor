import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome6 } from "@expo/vector-icons";
import { ProfileScreen } from "../../screens/app/Profile";

const Stack = createNativeStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
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
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontFamily: "Medium", color: "#fff", fontSize: 22 }}>
              Cuenta
            </Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
