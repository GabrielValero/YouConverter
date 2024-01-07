import {ToastAndroid} from 'react-native'

const showToast = (text)=>{
	ToastAndroid.show(text, ToastAndroid.LONG, ToastAndroid.BOTTOM)
}

export default showToast