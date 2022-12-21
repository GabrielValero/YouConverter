import React, {useState, useContext} from 'react'
import {View, StyleSheet, TextInput, Pressable} from 'react-native'

import { AntDesign, Feather } from '@expo/vector-icons';

import TextTemplate from '../Templates/TextTemplate'
import ConverterContext from '../../context/ConverterContext'
import useYoutube from '../../hooks/useYoutube.jsx'
import colors from '../../config/colors'

export default function SearchBar(){
  const {getQueryResult} = useYoutube();
  const {restartInfo} = useContext(ConverterContext)
  const [search, setSearch] = useState('')

  const onChange = (e)=>{
    setSearch(e)
  }

  const onSubmit = ()=>{
    search.length > 1 && getQueryResult({search:search})
  }

  const onDelete = ()=>{ // Para resetear la busqueda
    setSearch('')
    restartInfo()
  }

  return(
    <View style={styles.container}>
      <Pressable onPress={onSubmit}>
        <AntDesign name="search1" size={22} color={colors.textColor} />
      </Pressable>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        autoFocus={true}
        value={search}
        placeholderTextColor={colors.textColor}
        placeholder="Link del video"
        keyboardType="default"
      />
      <Pressable onPress={onDelete}>
        <Feather name="x" size={22} color={colors.textColor} />
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
    backgroundColor: colors.buttonColor,
    borderRadius: 10,
  },
  input:{
    width: "80%",
    fontSize: 17,
    color: colors.textColor,
  }
})
