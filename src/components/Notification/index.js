import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { NotificationCard } from './NotificationCard';

export const NotificationList = ({ notifications }) => {
  
  return (
   <>
    <FlatList
      data={notifications} 
      renderItem={({ item }) => <NotificationCard notification={item} />} 
      keyExtractor={(item) => item.id.toString()} 
      numColumns={2}
    />
   </>
  );
};

const styles = StyleSheet.create({});
