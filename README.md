<p align="center">
<a href="https://www.insidesherpa.com/virtual-internships/prototype/R5iK7HMxJGBgaSbvk/Technology%20Virtual%20Experience" target="_blank">
<img src="https://s3-ap-southeast-2.amazonaws.com/insidesherpa-assets/icons/promo_files/Screen+Shot+2019-02-11+at+11.32.13+pm.png"></a>
</p>

<p align="center"> 
	<b><a href="#task">Task Overview</a></b>
	|
	<b><a href="#installation">Installation Instructions</a></b>
	| 
	<b><a href="https://www.insidesherpa.com/modules/R5iK7HMxJGBgaSbvk/88AisH7iuw3L5N5ig" target="_blank">Link to Module 2</a></b>		
	| 
	<b><a href="https://www.insidesherpa.com/virtual-internships/prototype/R5iK7HMxJGBgaSbvk/Technology%20Virtual%20Experience">Bank&MergeCo. Program</a></b>
</p>

<h1> Introduction</h1> 
<b> Experience Technology at Bank&MergeCo. </b>
<p>Try out what real work is like in the technology team at Bank & Merge Co. Fast track to the tech team with your work.</p>

<h2 id="task"> Module 2 Task Overview </h2>
<p>Use Bank&MergeCo.'s frameworks and tools
Implement Bank&MergeCo.’s Perspective open source code in preparation for data visualization</p>
<p> <b>Aim:</b>Take an incomplete setup of Perspective and make it work with the code from Task 1</p>

<ol>
	<li>Please clone this repository to start the task</li>
	<li>When new data feed is retrieved, the previous entry is re-entered into the table. Update the application so that the table does not have duplicated entries</li>
	<li>We want the react app to keep continuosly requests data from the python server. Currently, the data feed is called only once every time the 'Start Streaming' button is clicked. Change the application to continuously query the datafeed every 100ms when the 'Start Streaming' is clicked.</li>
	<li>Currently, the Perspective element only shows the data in table view after the data loads. Add Perspective configurations so that when the data is loaded, it shows the historical data of ask_price ABC in the Y line chart.</li>
	<li>Upload a git patch file as the submission to this task</li>	
</ol>

<h2 id="installation" >Installation</h2>

Please ensure you are using <b> python2.7. </b>

Similar to Task 1, start the data feed server by running the python server

<code> python2 datafeed/server.py </code>

Run <code>npm install</code> to start the React application.

To run the app in development mode, run <code>npm start</code> in the project directory.

Open http://localhost:3000 to view the app in the browser. The page will reload if you make edits.


