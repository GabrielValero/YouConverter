import React, {useEffect, useState} from 'react'
import {Platform, PermissionsAndroid, Alert, LogBox} from 'react-native'

export default function usePermissions(){

    useEffect(()=>{
        NotificationPermission()
    }, [])

    const WriteStoragePermission = async () => {
        try {
            const verify = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE) === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
            console.log("por aqui paso ", verify);
            var granted = PermissionsAndroid.RESULTS.GRANTED
            if(!verify){
              var granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
                      title: 'Music',
                      message: 'Es necesario para descargar música',
                      buttonNegative: 'Cancel',
                      buttonPositive: 'OK',
                  }
              );
            }
            console.log("permisions ",granted)
            return granted === PermissionsAndroid.RESULTS.GRANTED || granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN ? true : false
        }
        catch (err){
            console.log(err)
            return false
        }
    }
    
    const NotificationPermission = async () => {
        try {
            const verify = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS) === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
            console.log("por aqui paso ", verify);
            var granted = PermissionsAndroid.RESULTS.GRANTED
            if(!verify){
                granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS, {
                        title: 'Notificación',
                        message: 'Es necesario dar permiso a las notificaciones para que manejes la música',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    }
                );
                console.log("Notification f", granted);
            }
            return granted === PermissionsAndroid.RESULTS.GRANTED ? true : false
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
