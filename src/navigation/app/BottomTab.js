import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Image } from "react-native";
import { HomeStack } from "./HomeStack";
import { CommunityStack } from "./CommunityStack";
import { HistoryStack } from "./HistoryStack";
import { ProfileStack } from "./ProfileStack";

const Tab = createBottomTabNavigator();

const tabIcons = {
  HomeStack: require("../../../assets/icons/homeIcon.png"),
  CommunityStack: require("../../../assets/icons/communityIcon.png"),
  HistoryStack: require("../../../assets/icons/historyIcon.png"),
  ProfileStack: require("../../../assets/icons/profileIcon.png"),
};

const CustomTabIcon = ({ focused, iconName }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={iconName}
        width={24}
        style={{ marginBottom: 10, tintColor: focused ? "#fff" : "#9E9E9E" }}
      />
      {focused && (
        <View
          style={{
            backgroundColor: "#fff",
            width: 8,
            height: 8,
            borderRadius: 4,
          }}
        />
      )}
    </View>
  );
};

export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#141718",
          height: 87,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          const iconName = tabIcons[route.name];
          return <CustomTabIcon focused={focused} iconName={iconName} />;
        },
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="CommunityStack" component={CommunityStack} />
      <Tab.Screen name="HistoryStack" component={HistoryStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
