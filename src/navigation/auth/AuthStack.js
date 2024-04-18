import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome6 } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";

import { OnboardingScreen } from "../../screens/auth/OnboardingScreen";
import { LoginScreen } from "../../screens/auth/LoginScreen";
import { RegisterScreen } from "../../screens/auth/RegisterScreen";
import { AddPhoneScreen } from "../../screens/auth/AddPhoneScreen";
import { ForgotPasswordScreen } from "../../screens/auth/ForgotPasswordScreen";
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

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={({ navigation }) => ({
          headerShown: true,
          ...headerOptions, 
          headerLeft: () => <CustomHeader navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={({ navigation }) => ({
          headerShown: true,
          ...headerOptions, 
          headerLeft: () => <CustomHeader navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="NewPasswordScreen"
        component={NewPasswordScreen}
        options={({ navigation }) => ({
          headerShown: true,
          ...headerOptions, 
          headerLeft: () => <CustomHeader navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={({ navigation }) => ({
          headerShown: true,
          ...headerOptions, 
          headerLeft: () => <CustomHeader navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="AddPhoneScreen"
        component={AddPhoneScreen}
        options={({ navigation }) => ({
          headerShown: true,
          ...headerOptions, 
          headerLeft: () => <CustomHeader navigation={navigation} />,
        })}
      />
     


    </Stack.Navigator>
  );
};
