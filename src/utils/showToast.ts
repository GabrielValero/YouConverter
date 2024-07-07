import {ToastAndroid} from 'react-native'

const showToast = (text:string)=>{
	ToastAndroid.show(text, ToastAndroid.LONG)
}

export default showToast