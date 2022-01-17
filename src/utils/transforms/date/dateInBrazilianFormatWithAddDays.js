import { format, addMinutes, addDays } from 'date-fns'

export default function dateInBrazilianFormatWithAddDays(parameterDate, days) {
  const date = new Date()

  const timezone = date.getTimezoneOffset()

  const newDate = addMinutes(new Date(parameterDate), timezone * 2)

  const dateWithDays = addDays(new Date(newDate), days)

  return format(new Date(dateWithDays), 'dd/MM/yyyy')
}
