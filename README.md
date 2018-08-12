## Heart rate app

### Setup

- Run npm install and then start to load the app. Before to have the server running via node app.js App should boot up on port 3001
- Can run the tests by running npm run test

### Using the app

- You can filter the heart rating readings via selecting a date or month within the highlighted dates and the graph and table should update accordingly.
- For best results I recommended filtering by the month toggle within the date picker. The graph is configured to read readings for each day. But many days in the data only have one reading

### Configuration

- Create react app for simplicity
- Jest & enzyme used for snapshot and unit tests
- react-datepicker used for selecting a dates to filter the data by month or date
- Moment used to pass dates into the date picker 
- date-fns for calculating date ranges 
- Axios used for handling basic requests
- Styled components used for when I needed to add the own styles.
- Recharts to display the graph

### Architecture

- Base Container with three main components, control (datepicker), graph and data table
- a bit of business logic required to filter the data correctly and to convert the data into values which were compatible for the graph to read. I have extracted this out into it's helper files, utils. All functions are tested for side effects
- Styled components for separate concerns between styling and logic and I feel they semantically read better.

### Todo
- Graph from endpoint (done)
- Graph Functionality filtering (done)
- Graph data set (done)
- Demonstrate basic snapshot tests (done)
- Test business logic in utils folder (done)
- Demonstrate shallow state tests and callbacks (done)
- Demonstrate integration tests with mocking (done)
- Add basic responsiveness (done)
- Tidy up styles
- Add lifecycle UI tests.
- Add advanced responsiveness for mobile users and other screen sizes
- Lock the date picker based on months which have data in
- add Offline message
- Tooltips for the user