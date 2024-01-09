import React, {useContext, useState} from 'react'
import {Platform, Alert} from 'react-native'
import RNFetchBlob from "rn-fetch-blob";
import usePermissions from './usePermissions';
import getUrlSong from '../utils/getUrlSong';
import { TrackData } from '../types';
import showToast from '../utils/showToast';



export default function useDownLoadFile(){
  
	const {WriteStoragePermission} = usePermissions()

	const downloadTrack = async (item: TrackData)=>{
		const permission = await WriteStoragePermission()

		item.url = await getUrlSong(item.videoId!)

		const config = {
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
		}

		permission ? RNFetchBlob.config(config).fetch("GET", item.url, {'Content-Type': 'application/json'})
			.progress((received, total) => {
			console.log("progress", received / total);
        })
        .then((res) => {
			// the temp file path
			console.log("The file saved to ", res.path());
			showToast("Descarga exitosa")
        })
        .catch((errorMessage) => {
            console.log("errorMessage", errorMessage)
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
				{ text: "Dar permiso", onPress: () =>  downloadTrack(item)}
			]
		)
	}

	return {
		downloadTrack
	}
}


