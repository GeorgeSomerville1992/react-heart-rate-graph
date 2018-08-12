import max from 'date-fns/max'
import min from 'date-fns/min'
import isSameMonth from 'date-fns/is_same_month'
import isSameDay from 'date-fns/is_same_day'
import format from 'date-fns/format'

export default {
  convertValues: data => {
    return data.map(heartRate => {
      return {
        minimum: Number(heartRate.minimum),
        maximum: Number(heartRate.maximum),
        meanAverage: Number(heartRate.meanAverage),
        dateTime: format(new Date(heartRate.dateTime), 'YYYY-MM-DD HH:ss'),
      }
    })
  },

  getDateRange: data => {
    const dateRange = []
    const dateTimes = data.map((heartRate) => {
      return new Date(heartRate.dateTime)
    })

    dateRange.push(min(...dateTimes))
    dateRange.push(max(...dateTimes))
    return dateRange
  },

  filterCurrentSelectedMonth: (selectedDate, heartRateData) => {
    return heartRateData.filter(heartRate => {
      return isSameMonth(new Date(selectedDate), new Date(heartRate.dateTime))
    })
  },

  filterCurrentSelectedDate: (selectedDate, heartRateData) => {
    return heartRateData.filter(heartRate => {
      return isSameDay(new Date(selectedDate), new Date(heartRate.dateTime))
    })
  }
}