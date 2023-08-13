### Backend

##### **Prerequsites**

1. [VS Code Download](https://code.visualstudio.com/download) - Download according to your OS requirements
2. [Node Js Download](https://nodejs.org/en) - Got to this link and install the latest **LTS Version(only)** Note - Current Version are generally unstable, please use LTS Only.
Once Installed, check the instalation by running the followiung commands from your terminal

3. [PostgreSQL Download](https://www.postgresql.org/download/) - PostgreSQL database server up and running.


##### **Getting Started**

1. Clone the repository to your local machine:
```bash
git clone <repository_url>
cd <repository_name>/server
```
2. Install the required packages using npm:
```bash
npm install
```
3. Set Up the .env File:
* Create a .env file in the root directory of your project.

* Add your database credentials and other sensitive information to the .env file. 
Example:
```bash
# Postgres database 
POSTGRES_USER=user
POSTGRES_HOST=localhost 
POSTGRES_PASSWORD=database-password
POSTGRES_DB=database-name
POSTGRES_PORT=portno (eg.5432)

#Application Port 
PORT=5000

```
##### **Folder Structure**
* server/: 
    This directory contains the Express.js back-end server.
    * routes/: Define API routes here.
    * controllers/: Logic for handling API requests.
    * db/: Dedicated to managing database-related functionality.
    * services/: handle database operations related  entities. It might contain functions or classes that interact directly with the database, such as creating, updating, deleting, or retrieving user data..

    * config/: Configuration files (database connection).
    * index.js: Entry point for starting the Express server.

##### **Usage**
Access your API endpoints using a tool like **Postman** or by making HTTP requests from your frontend application.
[Postman Download](https://www.postman.com/downloads/)
