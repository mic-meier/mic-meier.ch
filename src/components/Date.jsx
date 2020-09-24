import { format, parseISO } from 'date-fns'

const DateComponent = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyy')}</time>
}

export default DateComponent
