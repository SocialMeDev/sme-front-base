export default function FormatMillisecondsInTime(millisecondsParameter) {
  let milliseconds = millisecondsParameter

  console.log(`milliseconds`, milliseconds)

  const time = {
    hours: 0,
    seconds: 0,
    milliseconds: 0,
  }

  const secondDiference = 1000
  const hourDiference = secondDiference * 60

  const hourInMilliseconds = Math.trunc(milliseconds / hourDiference)

  if (hourInMilliseconds > 0) {
    time.hours = hourInMilliseconds

    milliseconds -= hourInMilliseconds * hourDiference
  }

  const secondInMilliseconds = Math.trunc(milliseconds / secondDiference)

  if (secondInMilliseconds > 0) {
    time.seconds = secondInMilliseconds

    milliseconds -= secondInMilliseconds * secondDiference
  }

  time.milliseconds = milliseconds

  return time
}
