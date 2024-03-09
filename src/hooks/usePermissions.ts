import React, {useEffect, useState} from 'react'
import {Platform, PermissionsAndroid, Alert, LogBox} from 'react-native'

export default function usePermissions(){

    const WriteStoragePermission = async () => {
        try {
            const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
                ? PermissionsAndroid.RESULTS.GRANTED
                : await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
                        title: 'Music',
                        message: 'Es necesario para descargar música',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    }
                );
            console.log("permisions ",granted)
            return granted === PermissionsAndroid.RESULTS.GRANTED || granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN ? true : false
        }
        catch (err){
            console.log(err)
            return false
        }
    }

    return{
        WriteStoragePermission,
    }
}
