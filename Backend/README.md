#Backend API module for Data-Dome-Inteface Application

This module aims at providing an API to interact with the hierarchy data stored in the database which was migrated as explained in the migration module.

The API GET endpoint /hierarchy provides the correct hierarchy tree structure by transforming the data after getting it from the database.

Transformation logic's complexity to get the hierarchy structure is O(n).
This can be improved with tree datastructure and tree traversal algorithms.
As of now, JSON has to be traversed recursively to get data of a respecitve node.

Run the server from command prompt
<pre>
npm run server
</pre>