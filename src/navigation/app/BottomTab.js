import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native'
import { HomeStack } from './HomeStack';
import { CommunityStack } from './CommunityStack';
import { HistoryStack } from './HistoryStack';
import { ProfileStack } from './ProfileStack';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarLabelStyle:{
            fontWeight:400,
            fontSize:13,
            // color:'#fff'
        },
        tabBarStyle:{
            //  backgroundColor:'#EC5B70'
        },
        tabBarActiveTintColor:'#000',
        tabBarInactiveTintColor:'#212121'
      }}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="CommunityStack" component={CommunityStack} />
      <Tab.Screen name="HistoryStack" component={HistoryStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  )
}



const styles = StyleSheet.create({})