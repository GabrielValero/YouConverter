import React, { useEffect, useState } from "react";
import { Platform, PermissionsAndroid, Alert, LogBox } from "react-native";

export default function usePermissions() {
  const WriteStoragePermission = async () => {
    try {
      const isWritePermissionGranted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      const isGranted = PermissionsAndroid.RESULTS.GRANTED;
      const requestPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Music",
          message: "Es necesario para descargar música",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      const granted = isWritePermissionGranted ? isGranted : requestPermission;
      console.log("permisions ", granted);
      const verifyIfGranted =
        granted === PermissionsAndroid.RESULTS.GRANTED ||
        granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN;
      return verifyIfGranted ? true : false;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return {
    WriteStoragePermission,
  };
}
