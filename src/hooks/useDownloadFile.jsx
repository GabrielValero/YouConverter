import React, {useContext, useState} from 'react'
import {Platform, PermissionsAndroid, Alert} from 'react-native'
import * as Permissions from 'expo-permissions';
import RNFetchBlob from "rn-fetch-blob";
import TrackPlayer from 'react-native-track-player';

export default function useDownLoadFile(){

  const downloadMedia = async ()=>{
    const permission = await requestToPermissions()

    let trackIndex = await TrackPlayer.getCurrentTrack();
    let track = await TrackPlayer.getTrack(trackIndex);

    permission ?
    RNFetchBlob.config({
      fileCache : true,
      appendExt: 'mp3',
      addAndroidDownloads : {
        useDownloadManager: true,
        notification : true,
        title : track.title,
        path: `${RNFetchBlob.fs.dirs.DownloadDir}/${track.title}'.mp3'`,
        description: 'You Converter Downloading'
      }
    }).fetch("GET", track.url, {'Content-Type': 'application/json'})
      .progress((received, total) => {
        console.log("progress", received / total);
      })
      .then((res) => {
        // the temp file path
        console.log("The file saved to ", res.path());
      })
      .catch((errorMessage, statusCode) => {
          console.log("errorMessage", errorMessage)
          console.log("statusCode", statusCode)
          Alert.alert(
            "Hubo un error!!!",
            "Puede ser por falta de internet quien sabe",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Try again", onPress: () =>  downloadMedia}
            ]
          )
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
      )
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
