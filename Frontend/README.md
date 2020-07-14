#UI module for Data-Dome-Inteface Application

This module aims at representing the hierarchy tree and details of each node of the hierarchy tree. The data is fetched 

The Backend API running in background exposing GET endpoint /hierarchy provides the correct hierarchy tree structure by transforming the data after getting it from the database.

The Hierarchy Tree markup is generated as a nested list by recursively traversing the response data and tree strucute will be displayed.

User can click on any of the nodes and a pop up will appear showing the details of the clicked node.

This application is implemented with vanilla JS without any libraries. Improvments can be done on this skeletal strucutre.

This app can be extracted to Tomcat server webapps folder as one of the application and index.html should render the hierarchy tree. 
Visual Studio Code's Live Server extension can be used to test the application instantly.
