import React, {useContext, useState} from 'react'
import {Platform} from 'react-native'
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
    // let cameraPermissions = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    // if (cameraPermissions.status !== 'granted') {
    //   cameraPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    // }
    console.log(downloadUrl);
    // if (true) {
    //   console.log("Y por aqui tambien");
    //   FileSystem.downloadAsync(
    //     audioLink,
    //     FileSystem.documentDirectory + "CSM IRIS  - Goo Goo Dolls (Rock cover by Jonathan Young).mp3",
    //     {},
    //     callback
    //   )
    //   .then(({ uri }) => {
    //     console.log('Finished downloading to ', uri);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    //
    // } else {
    //   alert('Requires file permission');
    // }

  }

  return {
    downloadImage
  }
}
