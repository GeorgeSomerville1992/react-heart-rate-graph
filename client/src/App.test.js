import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('./utils/api', () => {
  return {
    apiEndpoint: jest.fn(() => {
      return {
        getHeartRateData: Promise.resolve({
          data: [
            {
              "minimum": "71",
              "maximum": "74",
              "meanAverage": "72",
              "dateTime": "2018-03-28T13:46:00"
            },
            {
              "minimum": "57",
              "maximum": "87",
              "meanAverage": "71",
              "dateTime": "2018-03-28T18:00:01"
            },
            {
              "minimum": "54",
              "maximum": "61",
              "meanAverage": "57",
              "dateTime": "2018-03-29T18:04:00"
            },
            {
              "minimum": "52",
              "maximum": "52",
              "meanAverage": "52",
              "dateTime": "2018-03-30T03:49:00"
            },
            {
              "minimum": "56",
              "maximum": "61",
              "meanAverage": "58",
              "dateTime": "2018-03-31T05:43:00"
            },
            {
              "minimum": "64",
              "maximum": "68",
              "meanAverage": "66",
              "dateTime": "2018-04-01T21:34:00"
            },
            {
              "minimum": "57",
              "maximum": "58",
              "meanAverage": "57",
              "dateTime": "2018-04-02T19:48:00"
            },
          ]
        }),
      }
    })
  }
})

describe('Patients Heart Rate tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders with correct initial state', () => {
    const wrapper = shallow(<App/>);
    const status = wrapper.state();

    expect(wrapper.state().isFetching).toBe(true);
    expect(wrapper.state().error).toBe(null);
    expect(wrapper.state().heartRateValues).toHaveLength(0);
    expect(wrapper.state().selectedDate).toBe(null);
  })

  it('handles the getHeartRate function correctly on mount', () => {
    const getHeartRateData = jest.fn();
    const wrapper = shallow(<App />);
    wrapper.instance().getHeartRateData = getHeartRateData;
    wrapper.instance().componentDidMount();
    expect(getHeartRateData).toHaveBeenCalled();
  })

  it('handles get Heart wraper request from api correctly and filters the data', async () => {
    const wrapper = shallow(<App />)
    await wrapper.instance().componentDidMount();
    expect(wrapper.state().heartRateValues).toHaveLength(7);
  })
})
