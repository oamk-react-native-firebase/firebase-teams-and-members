import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo'
import { db, MEMBERS_REF } from '../firebase/Config';
import styles from '../style/style';

export const MemberItem = ({memberItem: {
  firstname, lastname, nickname}, id}) => {
  
  const onRemove = () => {
    db.ref(MEMBERS_REF + [id]).remove();
  };
  
  return (
    <View style={styles.memberItem}>
      <Text style={[styles.member]}>
      {firstname} {lastname} ({nickname})</Text>
      <Pressable>
        <Entypo name={'trash'} size={26} onPress={onRemove} />
      </Pressable>
    </View>
  );
}