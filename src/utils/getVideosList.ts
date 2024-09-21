import { TrackData } from '../types'

interface dataApiResponse {
    trackList: any
    error?: string
    status: number
}

export default async function getVideosList(
    query: String,
    limit = 20,
): Promise<TrackData[]> {
    const searchKey = query.trim().replace(/ /g, '+')
    const url = `${process.env.EXPO_PUBLIC_API_URL}/api/track/search?key=${searchKey}&limit${limit}`
    console.log(searchKey)

    try {
        const fetchResult = await fetch(url, { mode: 'cors' })
        if (!fetchResult.ok) throw new Error(`Error de conexión`)
        const dataResponse:dataApiResponse = (await fetchResult.json()) as dataApiResponse
        if (dataResponse.status != 200)
            throw new Error(`Error de servidor: ${dataResponse.error}`)
        const trackList: TrackData[] = dataResponse.trackList.map(
            (track: any) => ({
                ...track,
                artworkList: track.artwork,
                artwork: null,
            }),
        )

        return trackList
    } catch (error: any) {
        throw new Error(`Error: ${error.message}`)
    }
}
