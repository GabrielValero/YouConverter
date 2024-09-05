interface Response {
    url: string | undefined
}
export default async function getUrlSong(
    id: string,
    count: number = 0,
): Promise<string> {
    const searchVideoUrl = `${process.env.EXPO_PUBLIC_API_URL}/api/video?videoId=${id}`
    console.log(searchVideoUrl)

    try {
        const fetchResult = await fetch(searchVideoUrl)
        const track: Response = (await fetchResult.json()) as Response
        return track.url!
    } catch (err: any) {
        if (count < 3) return getUrlSong(id, count + 1)
        return ''
    }
}
