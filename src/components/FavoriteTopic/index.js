import { StyleSheet, FlatList} from 'react-native'
import React from 'react'
import { FavoriteTopicCard } from './FavoriteTopicCard'

export const FavoriteTopicList = ({favoriteTopic}) => {
  return (
    <FlatList
      data={favoriteTopic}
      renderItem={({ item }) => <FavoriteTopicCard favoriteTopic={item} />}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  )
}


const styles = StyleSheet.create({})