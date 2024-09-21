interface dataApiResponse {
    linkUrl: string
    error?: string
    status: number
}
export default async function getUrlSong(
    id: string
): Promise<string> {
    const searchVideoUrl = `${process.env.EXPO_PUBLIC_API_URL}/api/download?id=${id}`
    console.log(searchVideoUrl)

    try {
        const fetchResult = await fetch(searchVideoUrl)
        
        if(!fetchResult.ok) throw new Error(`Error de conexión`)
        const dataResponse:dataApiResponse = (await fetchResult.json()) as dataApiResponse
        if (dataResponse.status != 200) throw new Error(`Error de servidor: ${dataResponse.error}`)

        return dataResponse.linkUrl
    } catch (err: any) {
        throw new Error(`Error de conexión`)
    }
}
