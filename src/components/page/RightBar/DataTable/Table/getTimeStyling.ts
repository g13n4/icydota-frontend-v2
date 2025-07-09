const HOUR = 60 * 60
const MINUTE = 60

function padTime(num: number) {
    return num < 10 ? `0${num}` : num;
}

export default function getTimeStyling(
  value: number | null,
) {
  if (value === null) return null;
    const hours = Math.floor(value / HOUR)
    const minutes = Math.floor((value % HOUR) / MINUTE)
    const seconds = value % MINUTE

    if (hours !== 0) {
        return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`
    }

  return `${padTime(minutes)}:${padTime(seconds)}`
}
