import React from 'react'
import { array } from 'prop-types'
import { Row, HeaderCell, ContentCell, Table, Title } from './styles'

function HeartReadingsTable(props) {
  const renderHeartReadings = data => {
    return data.map(heartRate => {
      return (
        <Row key={heartRate.dateTime}>
          <ContentCell>{heartRate.dateTime}</ContentCell>
          <ContentCell>{heartRate.minimum}</ContentCell>
          <ContentCell>{heartRate.maximum}</ContentCell>
          <ContentCell>{heartRate.meanAverage}</ContentCell>
        </Row>
      )
    })
  }

  return (
    <Table>
      <Title> Heart Table </Title>
      <Row>
        <HeaderCell> Date Time </HeaderCell>
        <HeaderCell> Minimum </HeaderCell>
        <HeaderCell> Maximum </HeaderCell>
        <HeaderCell> MeanAverage </HeaderCell>
      </Row>
      {renderHeartReadings(props.heartRateReadings)}
    </Table>
  )
}

HeartReadingsTable.propTypes = {
  heartRateReadings: array,
}

export default HeartReadingsTable