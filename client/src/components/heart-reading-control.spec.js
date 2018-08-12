import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import HeartReadingControl from './heart-reading-control';

describe('<HeartReadingControl>', () => {
  it('renders structure with props', () => {
    const tree = renderer.create(
      <HeartReadingControl
        onChange={jest.fn()}
        dateRange={[new Date('2018-03-29T18:04:00'), new Date('2018-05-29T18:04:00')]}
         />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})