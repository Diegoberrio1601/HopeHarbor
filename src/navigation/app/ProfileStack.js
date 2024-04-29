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

// Componente de encabezado personalizado
const CustomHeader = ({ navigation }) => (
  <View style={{ marginLeft: 0 }}>
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#232627",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20,
      }}
    >
      <FontAwesome6 name="angle-left" size={20} color="#757474" />
    </TouchableOpacity>
  </View>
);

const headerOptions = {
  headerTitle: "",
  headerStyle: {
    backgroundColor: "#141718",
  },
  headerBackTitleVisible: false,
  headerShadowVisible: false,
};
const headerTitleStyle = {
  fontFamily: "Medium",
  color: "#fff",
  fontSize: 22,
};

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
        options={({ navigation }) => ({
          headerShown: true,
          ...headerOptions,
          headerTitle: "Preferencias", // Agrega el título aquí
          headerTitleStyle: headerTitleStyle,
          headerLeft: () => <CustomHeader navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={({ navigation }) => ({
          headerShown: true,
          ...headerOptions,
          headerTitle: "Notificaciones", // Agrega el título aquí
          headerTitleStyle: headerTitleStyle,
          headerLeft: () => <CustomHeader navigation={navigation} />,
        })}
        
      />
      <Stack.Screen
        name="FavoriteTopicScreen"
        component={FavoriteTopicScreen}

        options={({ navigation }) => ({
          headerShown: true,
          ...headerOptions,
          headerTitle: "Tema preferido", // Agrega el título aquí
          headerTitleStyle: headerTitleStyle,
          headerLeft: () => <CustomHeader navigation={navigation} />,
        })}

        
      />
      <Stack.Screen
        name="AccountSecurityScreen"
        component={AccountSecurityScreen}
        options={({ navigation }) => ({
          headerShown: true,
          ...headerOptions,
          headerTitle: "Seguridad de la cuenta", // Agrega el título aquí
          headerTitleStyle: headerTitleStyle,
          headerLeft: () => <CustomHeader navigation={navigation} />,
        })}
        
      />
      <Stack.Screen
        name="EditInformationScreen"
        component={EditInformationScreen}
        options={({ navigation }) => ({
          headerShown: true,
          ...headerOptions,
          headerTitle: " Editar información", // Agrega el título aquí
          headerTitleStyle: headerTitleStyle,
          headerLeft: () => <CustomHeader navigation={navigation} />,
        })}
       
      />
      <Stack.Screen
        name="NewPasswordScreen"
        component={NewPasswordScreen}
        options={({ navigation }) => ({
          headerShown: true,
          ...headerOptions,
          headerTitle: " Editar contraseña", // Agrega el título aquí
          headerTitleStyle: headerTitleStyle,
          headerLeft: () => <CustomHeader navigation={navigation} />,
        })}
       
      />
      <Stack.Screen
        name="InviteAFriendScreen"
        component={InviteAFriendScreen}
        options={({ navigation }) => ({
          headerShown: true,
          ...headerOptions,
          headerTitle: " Invitar a un amigo", // Agrega el título aquí
          headerTitleStyle: headerTitleStyle,
          headerLeft: () => <CustomHeader navigation={navigation} />,
        })}
       
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
