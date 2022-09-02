import React, {useState, useContext} from 'react'
import {View, StyleSheet, TextInput, Pressable} from 'react-native'

import { AntDesign, Feather } from '@expo/vector-icons';

import TextTemplate from '../Templates/TextTemplate'
import ConverterContext from '../../context/ConverterContext'
import useMediaInfo from '../../hooks/useMediaInfo'

export default function SearchBar(){
  const {getYoutubeVideoInfo, getInstagramInfo} = useMediaInfo();

  const [search, setSearch] = useState('')

  const onChange = (e)=>{
    setSearch(e)
    let temp;
    if(e.includes('youtube.com/watch?v=') || e.includes('youtu.be/')){
      if(e.includes('youtu.be/')) temp = e.slice(e.indexOf('.be/')+4);
      else if(e.includes('youtube.com/watch?v=') && e.includes('&')) temp = e.slice(e.indexOf('v=')+2, e.indexOf('&'));
      else temp = e.slice(e.indexOf('v=')+2);
      getYoutubeVideoInfo({id: temp})
    }
  }

  return(
    <View style={styles.container}>
      <AntDesign name="search1" size={22} color="#9B9B9B" />
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={search}
        autoFocus={true}
        placeholder="Link del video"
        keyboardType="url"
      />
      <Pressable onPress={()=>setSearch('')}>
        <Feather name="x" size={22} color="#9B9B9B" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: "100%",
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "white",
    borderRadius: 10,
  },
  input:{
    width: "80%",
    fontSize: 17,
    color: "#9B9B9B",
  }
})