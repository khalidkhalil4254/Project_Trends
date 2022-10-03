# Project_Trends

Project_Tresnds is web application is used to view/visualize most Twitter Trends in each hour :


The project is split into two parts:
1. Frontend - VueJs Web-Application.
2. Backend RESTful API - Node-Express application

## Getting Started
> _tip_: it's recommended that you start with getting the backend API running since the frontend web application depends on the API.

### Prerequisite
1. The depends on the Node Package Manager (NPM). You will need to download and install Node from [https://nodejs.com/en/download](https://nodejs.org/en/download/). This will allow you to be able to run `npm` commands.
2. Environment variables will need to be set. These environment variables include database connection details that should not be hard-coded into the application code.
 

Afterwards, we can prevent any credential files from being included in your solution by adding the file to our `.gitignore` file.

### 1. Database
Create a MongoDB/DynamoDB either locally or on AWS DynamoDB. The database is used to store the application's metadata.

* The port number will need to be set as `8100` for backend develpment server and `8080` for frontend development server. 

Once your database is set up environment variables in your machine/environment.

### 3. Backend API
Launch the backend API locally. The API is the application's interface to the database.

* To download all the package dependencies, run the command from the project root directory:
    ```bash
    npm i
    ```
* To run the application locally, run:
    ```bash
    npm run dev
    ```
* You can visit `http://localhost:8100/api/v0/search` in your web browser to verify that the application is running. You should see a JSON payload. Feel free to play around with Postman to test the API's.

### 4. Frontend App
Launch the frontend app locally.

* To download all the package dependencies, run the command from the project root directory:
    ```bash
    npm install .
    ```
* Run the application locally using deveopment server command.
    ```bash
    npm dev
    ```
* You can visit `http://localhost:8080` in your web browser to verify that the application is running. You should see a web interface.
