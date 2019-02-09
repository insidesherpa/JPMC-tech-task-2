
## Instalation

Similar to Task 1, please start the data feed server by running the python server

### `python2 datafeed/server.py`

Please make sure you are using python2.7.


Before you can start the React application, you have to run

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

## Tasks
1. Whenever new data feed is retrieved, previous entry was reentered into the table. Update the application to make the table does not have duplicated entries.
2. We want the react app to keep continuosly requests data from the python server. At the moment the data feed is called only once every time the 'Start Streaming' button is clicked. Change the application to continuously querying the datafeed every 100ms when the 'Start Streaming' is clicked.
3. Currently after the data is loaded, the Perspective element only shows the data in table view. Add Perspective configurations so when the data is loaded it shows historical data of ask_price ABC in Y line chart.
