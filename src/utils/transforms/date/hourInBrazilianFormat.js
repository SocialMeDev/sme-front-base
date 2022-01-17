import { format } from 'date-fns'

export default function hourInBrazilianFormat(date) {
  return format(new Date(date), 'HH:mm')
}
