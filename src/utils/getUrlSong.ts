interface Response{
    url: string | undefined;
}
export default async function getUrlSong(id: string, count: number = 0): Promise<string>{
	const url = `${process.env.EXPO_PUBLIC_API_URL}/api/video?videoId=${id}`
	console.log(url);

	try{
		const result = await fetch(url)
		const data: Response = await result.json() as Response
		return data.url!
	}catch(err: any){
		if(count < 3) return getUrlSong(id, count + 1)
		return ""
	}

}
