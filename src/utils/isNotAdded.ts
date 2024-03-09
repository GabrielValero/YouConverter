import { TrackData } from "../types"

const isNotAdded = (trackList: TrackData[], track: TrackData): Boolean=>{
    return trackList.filter( item => item.title == track.title).length == 0
}
export default isNotAdded