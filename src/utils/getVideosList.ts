import { TrackData } from "../types";

export default async function getVideosList(query:String, count = 0): Promise<TrackData[]>{
	const searchKey = query.trim().replace(/ /g, '+')
	const url = `${process.env.EXPO_PUBLIC_API_URL}/api/search?key=${searchKey}`
	console.log(searchKey);
	
	try {
		const response = await fetch(url, { mode: 'cors' });
		const data: Promise<TrackData[]> = await response.json() as Promise<TrackData[]>
		return data;
	} catch (error: any) {
		if (count < 3) {
			return await getVideosList(query, count + 1);
		} else {
			return []
			throw new Error(`Hubo un error al obtener la lista de videos. Mensaje: ${error.message}`);
		}
	}
}
