# Car Rental API Server

Welcome to the repository of the Car Rental API Server! This project is a Node.js server that provides an API for car rental.

## Initial Setup

Before getting started with the server, make sure you have Node.js installed on your machine. You can download the latest stable version of Node.js from [their official website](https://nodejs.org).

Once you have cloned or downloaded the repository, navigate to the root folder of the project and run the following command to install the dependencies:

```bash
npm install
```

## Database Configuration

This server uses a MongoDB database to store information about vehicles and clients. Make sure you have a MongoDB instance running on your local machine or on a remote server.

In the `config.js` file, you will find the database connection configuration. Make sure to provide the correct connection URL for your MongoDB instance:

```javascript
module.exports = {
  // ...
  databaseUrl: 'mongodb://localhost:27017/rentalDB',
  // ...
};
```

## Running the Server

Once you have configured the database, you can start the server by running the following command in the terminal:

```bash
npm start
```

The server will run on `http://localhost:3000` by default, unless you specify a different port in the `PORT` environment variable.

## Available Endpoints

The API server provides the following endpoints to interact with the car rental system:

- `GET /vehicles`: Get the list of all available vehicles.
- `GET /vehicles/:id`: Get the details of a specific vehicle by its ID.
- `POST /vehicles`: Create a new vehicle in the database.
- `PUT /vehicles/:id`: Update the details of a specific vehicle by its ID.
- `DELETE /vehicles/:id`: Delete a specific vehicle by its ID.

- `GET /clients`: Get the list of all registered clients.
- `GET /clients/:id`: Get the details of a specific client by their ID.
- `POST /clients`: Create a new client in the database.
- `PUT /clients/:id`: Update the details of a specific client by their ID.
- `DELETE /clients/:id`: Delete a specific client by their ID.

All endpoints require authentication using a valid access token, except the client registration endpoint.

## Authentication

The server uses JSON Web Token (JWT) based authentication. To access protected endpoints, you need to include the access token in the HTTP request header:

```http
Authorization: Bearer <token>
```

You can obtain a valid access token by sending a POST request to `/auth/login` with the credentials of an existing user. The server will generate a JWT token that you should use for future authenticated requests.

## Contribution

If you would like to contribute to this project, feel free to open an issue or submit a pull request. We welcome new ideas and improvements!

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as needed.

Thank you for using the Car Rental API Server! We hope this server will be helpful for building your own car rental application. If you have any questions or issues, feel free to open an issue in the repository.
