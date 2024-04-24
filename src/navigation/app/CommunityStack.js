import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome6 } from "@expo/vector-icons";
import { CommunityScreen } from "../../screens/app/Commnity";

const Stack = createNativeStackNavigator();

export const CommunityStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="CommunityScreen"
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
        name="CommunityScreen"
        component={CommunityScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontFamily: "Medium", color: "#fff", fontSize: 22 }}>
              Comunidad
            </Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
