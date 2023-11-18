import React, {useContext, useState} from 'react'
import {Platform, Alert} from 'react-native'
import RNFetchBlob from "rn-fetch-blob";
import TrackPlayer from 'react-native-track-player';
import usePermissions from './usePermissions';
import downloadSource from '../utils/downloadSource';

export default function useDownLoadFile(){
  
	const {WriteStoragePermission} = usePermissions()

	const downloadMedia = async (item)=>{
		const permission = await WriteStoragePermission()

		console.log("use ",item);
		item.url = await downloadSource(item.videoId)


		permission ? RNFetchBlob.config({
			fileCache : true,
			appendExt: 'mp3',
			addAndroidDownloads : {
                useDownloadManager: true,
                notification : true,
                title : item.title,
                path: `${RNFetchBlob.fs.dirs.DownloadDir}/${item.title}.mp3`,
                description: 'You Converter Downloading',
				mediaScannable : true,
			}
		}).fetch("GET", item.url, {'Content-Type': 'application/json'})
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
				{ text: "Dar permiso", onPress: () =>  downloadMedia()}
			]
		)
	}

	return {
		downloadMedia
	}
}


