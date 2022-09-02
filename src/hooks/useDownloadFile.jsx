import React, {useContext, useState} from 'react'
import {Platform, PermissionsAndroid, Alert} from 'react-native'
import * as Permissions from 'expo-permissions';
import RNFetchBlob from "rn-fetch-blob";

import ConverterContext from '../context/ConverterContext'
import downloadSource from '../utils/downloadSource'

export default function useDownLoadFile(){

  const {mediaInfo, downloadInfo} = useContext(ConverterContext)

  const downloadMedia = async ({setProgress, isVideoDownloading})=>{
    const permission = await requestToPermissions()

    const url = isVideoDownloading ? downloadInfo.video.url : downloadInfo.audio.url

    permission ?
    RNFetchBlob.config({
      fileCache : true,
      appendExt: isVideoDownloading ? "mp4" : 'mp3',
      addAndroidDownloads : {
        useDownloadManager: true,
        notification : true,
        title : mediaInfo.title,
        path: `${RNFetchBlob.fs.dirs.DownloadDir}/${mediaInfo.title}${isVideoDownloading ? ".mp4" : '.mp3'}`,
        description: 'You Converter',
      }
    }).fetch("GET", url, {'Content-Type': 'application/json'})
      .progress((received, total) => {
        console.log("progress", received / total);
        setProgress(received / total)
      })
      .then((res) => {
        // the temp file path
        console.log("The file saved to ", res.path());
      })
      .catch((errorMessage, statusCode) => {
          console.log("errorMessage", errorMessage)
          console.log("statusCode", statusCode)
        })
    : Alert.alert(
      "FALTAN PERMISOS!!!",
      "Negaste permisos que necesitas para descargar un video o canción",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Dar permiso", onPress: () =>  downloadMedia}
      ]
    );
  }

  return {
    downloadMedia
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
