import { differenceInMilliseconds, parseISO } from 'date-fns'

export default function diferenceBetweenDatesInMilliseconds(
  startDate,
  endDate
) {
  if (startDate === null || endDate === null) return

  const startDateParse = parseISO(startDate)
  const endDateParse = parseISO(endDate)

  return differenceInMilliseconds(startDateParse, endDateParse)
}
