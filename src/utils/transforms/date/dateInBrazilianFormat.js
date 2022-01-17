import { format, addMinutes } from 'date-fns'

export default function dateInBrazilianFormat(parameterDate) {
  const date = new Date()

  const timezone = date.getTimezoneOffset()

  const newDate = addMinutes(new Date(parameterDate), timezone)

  return format(new Date(newDate), 'dd/MM/yyyy')
}
