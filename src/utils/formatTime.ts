const formatTime = (time: number | null): string => {
    if (!time) {
        return "00:00";
    }
    const minutes = parseInt(`${time / 60}`);
    const seconds = parseInt(`${time % 60}`);
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
 };

 export default formatTime