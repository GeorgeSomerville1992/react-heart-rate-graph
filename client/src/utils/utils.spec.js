import helper from './helpers';

const fixture = [
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
	{
		"minimum": "57",
		"maximum": "59",
		"meanAverage": "58",
		"dateTime": "2018-04-03T08:01:00"
	},
	{
		"minimum": "71",
		"maximum": "74",
		"meanAverage": "72",
		"dateTime": "2018-04-04T09:54:00"
	},
]

describe('Basic Utils tests', () => {
  it('convertValues: correctly converts values into the right format', () => {
    expect(helper.convertValues(fixture)).toMatchSnapshot()
  })

  it('getDateRange: returns a correct range', () => {
    const convertedFixture = helper.convertValues(fixture)

    expect(helper.getDateRange(convertedFixture)).toMatchSnapshot()
  })

  it('filterCurrentSelectedMonth: returns values based on a selcted month', () => {
    const convertedFixture = helper.convertValues(fixture)

    expect(helper.filterCurrentSelectedMonth(new Date("2018-04-01T21:34:00"),  convertedFixture)).toMatchSnapshot()
  })

  it('filterCurrentSelectedMonth: returns values based on a selcted date', () => {
    const convertedFixture = helper.convertValues(fixture)

    expect(helper.filterCurrentSelectedDate(new Date("2018-04-01T21:34:00"),  convertedFixture)).toMatchSnapshot()
  })
})