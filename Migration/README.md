#Migration module for Data-Dome-Inteface Application

This module aims at migrating hierarchy data input from file migration_data.json
Current implementation is on RDBMS solution using mysql.

This solution can be modified to implement on neo4j graph database and GraphQL implementations as it will be the best solution hierarchical data like these.

**Database Setup**

Create database data_dome in MySQL Workbench and run the create entity_details query in the editor.

CREATE TABLE entity_details (
id int NOT NULL AUTO_INCREMENT,
name varchar(10) NOT NULL,
description varchar(45) NOT NULL,
parent varchar(10) NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `name_UNIQUE` (`name`)
)

**Application Setup**

1.Input hierarchical data to be migrated to database can be placed in migration_data.json file.
2.'npm run migrate' script will store the hierarchy data present in the file to database.

**NOTE : As shown in the query, there are constraints on the input data, the script will fail if the hierarchy data in the file is corrupted**