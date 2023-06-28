import {API_URL} from './config'

export async function downloadSource(id){
	const url = `${API_URL}/api/video?videoId=${id}`

	return await fetch(url,{
		method: "GET",
		mode: 'cors',
	})
	.then(response=>response.json())
	.then(res=>{
		console.log(res);
	})
	

}
