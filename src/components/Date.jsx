/** @jsx jsx */
import { format, parseISO } from 'date-fns'
import { jsx } from 'theme-ui'

const DateComponent = ({ dateString }) => {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} sx={{ fontSize: 0 }}>
      {format(date, 'LLLL d, yyy')}
    </time>
  )
}

export default DateComponent
