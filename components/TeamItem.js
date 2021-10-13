import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo'
import { db, TEAMS_REF } from '../firebase/Config';
import styles from '../style/style';

export const TeamItem = ({teamItem: {name, nickname }, id}) => {
  
  const onRemove = () => {
    db.ref(TEAMS_REF + [id]).remove();
  };
  
  return (
    <View style={styles.teamItem}>
      <Text style={[styles.team]}>
      {name} ({nickname})</Text>
      <Pressable>
        <Entypo name={'trash'} size={20} onPress={onRemove} />
      </Pressable>
    </View>
  );
}