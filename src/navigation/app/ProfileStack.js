import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome6 } from "@expo/vector-icons";
import { ProfileScreen } from "../../screens/app/Profile";
import { PreferencesScreen } from "../../screens/app/Profile/PreferencesScreen";
import { NotificationsScreen } from "../../screens/app/Profile/NotificationsScreen";
import { FavoriteTopicScreen } from "../../screens/app/Profile/FavoriteTopicScreen";
import { AccountSecurityScreen } from "../../screens/app/Profile/AccountSecurityScreen";
import { EditInformationScreen } from "../../screens/app/Profile/EditInformationScreen";
import { InviteAFriendScreen } from "../../screens/app/Profile/InviteAFriendScreen";
import { NewPasswordScreen } from "../../screens/auth/NewPasswordScreen";

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
              Preferencias
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="PreferencesScreen"
        component={PreferencesScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontFamily: "Medium", color: "#fff", fontSize: 22 }}>
              Preferencias
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontFamily: "Medium", color: "#fff", fontSize: 22 }}>
              Notificaciones
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="FavoriteTopicScreen"
        component={FavoriteTopicScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontFamily: "Medium", color: "#fff", fontSize: 22 }}>
              Tema preferido
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="AccountSecurityScreen"
        component={AccountSecurityScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontFamily: "Medium", color: "#fff", fontSize: 22 }}>
               Seguridad de la cuenta
            </Text>
          ),
        }}
      />
       <Stack.Screen
        name="EditInformationScreen"
        component={EditInformationScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontFamily: "Medium", color: "#fff", fontSize: 22 }}>
               Editar información
            </Text>
          ),
        }}
      />
       <Stack.Screen
        name="NewPasswordScreen"
        component={NewPasswordScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontFamily: "Medium", color: "#fff", fontSize: 22 }}>
               Editar información
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="InviteAFriendScreen"
        component={InviteAFriendScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontFamily: "Medium", color: "#fff", fontSize: 22 }}>
              Invitar a un amigo 
            </Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
