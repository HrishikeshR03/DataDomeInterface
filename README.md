#Data-Dome-Interface

This is a full stack solution for migrating an unstructured hierarchy data and storing them in a database and expose an API to interact with the data and visualizing the hierarchy tree from the hierarchy data stored in the database.

This repository consists of 3 modules as mentioned below :-

1. Migration : Responsible for storing data to database
2. Backend : Exposes an API to interact with hierarchy data
3. Frontend : Visualizes the hierarchy tree with details of each node.

Improvements :-
1. Repository can be made more modularized to utilize components which are used more often.
2. Few lint issues are there which needs configuration settings and console statements which are added for information and debugging purposes.
3. Better transformation logic and data structures usage can optimize performance for large data sets.
4. Graph database can be used to utilize its capabilities for large data sets.

**Setup**

*Migration module*
Assuming the mysql database setup and the table creation as explained in README file of Migration module.

As per the configurations done in dbConfig.js, database server is running on port localhost 3306.

The input JSON data to be stored in database has to be kept at ./data/migration_data.json.

Change directory to Migration module
<pre>
$cd Migration
$npm install     #If running for the first time or any changes/updates on dependencies
$npm run migrate    #This script will load the input data to database
</pre>

*Backend module*
Assuming the database server is running on localhost port 3306.
And Backend application will be running on localhist port 3000.

All these database and app configurations can be configured in ./Backend/config/appConfig.js and ./Backend/config/dbConfig.js in case you change it.

Change directory to Backend module back from Migration module and execute below commands.
<pre>
$cd ../Backend
$npm install     #If running for the first time or any changes/updates on dependencies
$npm run server    #This script will bring up the server responding to GET requests
</pre>

Now, to check the response on the browser/postman or any other request response capture tools, send a GET request to http://localhost:3000/hierarchy
You should receive a JSON response with the correct hierarchy structure.

*Frontend module*
Assuming the database server is running on localhost port 3306 and the backend application is running on localhist port 3000.

Change directory to Frontend module back from Backend module and execute below commands.
<pre>
$cd ../Frontend
$npm install     #If running for the first time or any changes/updates on dependencies
$npm run client    #This script will bring up a mock server with the bundled web components
</pre>

Check the console on the details of deployed port for the front end application.
You should see somethinng like this :- 
ℹ Server running at http://localhost:1234

Now click on that link to see the visualization of the hierarchy data displayed from Top to bottom.
Click on any node to get the details of the entity.
You can close the popup window and select any other node for more information.