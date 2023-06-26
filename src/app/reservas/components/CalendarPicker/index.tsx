import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateRange } from '@mui/x-date-pickers-pro';
import { Dayjs } from 'dayjs';

type CalendarProps = {
  date: DateRange<Dayjs>,
  onChangeDate: (date: DateRange<Dayjs>) => void
}



export const CalendarPicker = ({date , onChangeDate = null}: CalendarProps) => {  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}>
          <DemoItem label='Escolha as datas'>
            <DateRangeCalendar
            disablePast
            value={date}
            onChange={onChangeDate}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </>
  )
}