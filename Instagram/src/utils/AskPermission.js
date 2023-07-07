import {PermissionsAndroid, ToastAndroid} from 'react-native';

export const requestPermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]);
    console.log(granted);

    if (
      granted['PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE'] ==='denied'  ||
      granted['PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE'] ==='denied'
    ) {
        ToastAndroid.show('we cannot process without permission', ToastAndroid.LONG)
        requestPermission()
    }
  } catch (error) {
    console.log(error);
  }
};
