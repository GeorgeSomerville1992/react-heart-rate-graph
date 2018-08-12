import React from 'react';
import { array, func } from 'prop-types';
import DatePicker from 'react-datepicker';
import { GraphControlContainer } from './styles';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

function HeartReadingControl(props) {
  return (
    <GraphControlContainer>
      <DatePicker
        inline
        showMonthDropdown
        selected={moment(props.dateRange[0])}
        onChange={props.onChange}
        onMonthChange={props.onMonthChange}
        startDate={moment(props.dateRange[0])}
        endDate={moment(props.dateRange[1])}
      />
    </GraphControlContainer>
  )
}

HeartReadingControl.propTypes = {
  dateRange: array,
  onChange: func,
}

export default HeartReadingControl;