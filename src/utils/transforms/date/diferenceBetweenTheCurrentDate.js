import { differenceInDays } from 'date-fns'

export default function diferenceBetweenTheCurrentDate(date) {
  const currentDate = new Date()

  return differenceInDays(currentDate, new Date(date))
}
