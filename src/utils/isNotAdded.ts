import { TrackData } from "../types"

const isNotAdded = (trackList: TrackData[], song: TrackData): Boolean=>{
    return trackList.filter( item => item.title == song.title).length == 0
}
export default isNotAdded