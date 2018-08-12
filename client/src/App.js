import React, { Component } from 'react';
import { apiEndpoint } from './utils/api';
import HeartReadingControl from './components/heart-reading-control';
import HeartReadingGraph from './components/heart-reading-graph';
import HeartReadingsTable from './components/heart-readings-table';
import { Container, Header, Title, Content, ContentContainer, Footer } from './styles';
import helpers from './utils/helpers';

class App extends Component {
  state = {
    isFetching: false,
    error: null,
    heartRateValues: [],
    selectedDate: null,
  }

  componentDidMount() {
    this.getHeartRateData()
  }

  getHeartRateData() {
    this.setState({
      isFetching: true,
    }, () => {
      apiEndpoint().getHeartRateData.then(response => {
        this.setState(() => ({
          heartRateValues: helpers.convertValues(response.data),
          dateRange: helpers.getDateRange(response.data)
        }));
      }).catch(error => {
        this.setState(prevState => ({
          isFetching: false,
          error: error,
        }));
      }).then(data => {
        this.setState({
          isFetching: false
        })
      })
    })
  }

  handleDateChange = date => {
    this.setState(() => ({
      filteredHeartRateValues: helpers.filterCurrentSelectedDate(date, this.state.heartRateValues)
    }))
  }

  handleMonthChange = date => {
    this.setState(() => ({
      filteredHeartRateValues: helpers.filterCurrentSelectedMonth(date, this.state.heartRateValues)
    }))
  }

  render() {
    const { dateRange, filteredHeartRateValues, heartRateValues, isFetching } = this.state
    return (
      <Container>
        <Header>
          <Title>{isFetching ? `Loading..` : `Patient's heart rate`} </Title>
        </Header>
          {heartRateValues.length &&
            <Content>
              <ContentContainer>
                <HeartReadingControl
                  onChange={this.handleDateChange}
                  onMonthChange={this.handleMonthChange}
                  dateRange={dateRange} />
                <HeartReadingGraph heartRateValues={filteredHeartRateValues || heartRateValues} />
              </ContentContainer>
              <HeartReadingsTable heartRateReadings={filteredHeartRateValues || heartRateValues} />
            </Content>
          }
        <Footer>
          <Title> Made by George </Title>
        </Footer>
      </Container>
    );
  }
}

export default App;
