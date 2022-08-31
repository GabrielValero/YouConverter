import React, {useContext, useState} from 'react'
import {Platform, PermissionsAndroid, Alert} from 'react-native'
import * as Permissions from 'expo-permissions';
import RNFetchBlob from "rn-fetch-blob";

import ConverterContext from '../context/ConverterContext'
import downloadSource from '../utils/downloadSource'

export default function useDownLoadFile(){

  const {mediaInfo} = useContext(ConverterContext)
  const [progress, setProgress] = useState()

  const downloadImage = async ({setProgress, format})=>{
    let date = new Date();
    let uri = mediaInfo.image;
    //let isVideo = uri.includes(".mp4") ? false : true;
    //let title = isVideo ? video.title : Math.floor(date.getTime() + date.getSeconds() / 2);
    const downloadUrl = await downloadSource({id: mediaInfo.id, format: format})

    const permission = await requestToPermissions()

    permission ?
    RNFetchBlob.config({
      fileCache : true,
      appendExt: 'mp3',
      addAndroidDownloads : {
        useDownloadManager: true,
        notification : true,
        title : mediaInfo.title,
        path: RNFetchBlob.fs.dirs.DownloadDir + `/$name` + ".mp3",
        description: 'You Converter',
        mime: "audio/mpeg"
      }
    })
      .fetch("GET", downloadUrl)
      .then((res) => {
        // the temp file path
        console.log("The file saved to ", res.path());
      })
      .catch((errorMessage, statusCode) => {
          console.log("errorMessage", errorMessage)
          console.log("statusCode", statusCode)
        })
    : Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }

  return {
    downloadImage
  }
}


const requestToPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
          title: 'Music',
          message: 'Es necesario que nos permitas hackearte',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED ? true : false
    }
    catch (err){
     console.log(err)
    }
  }