import React, {useContext, useState} from 'react'
import {Platform, Alert} from 'react-native'
import RNFetchBlob from "rn-fetch-blob";
import usePermissions from './usePermissions';
import getUrlSong from '../utils/getUrlSong';

export default function useDownLoadFile(){
  
	const {WriteStoragePermission} = usePermissions()

	const downloadMedia = async (item)=>{
		const permission = await WriteStoragePermission()

		console.log("use ",item);
		item.url = await getUrlSong(item.videoId)


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
			showToast("Descarga exitosa")
        })
        .catch((errorMessage, statusCode) => {
            console.log("errorMessage", errorMessage)
            console.log("statusCode", statusCode)
            showToast("Error en la descarga")
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


