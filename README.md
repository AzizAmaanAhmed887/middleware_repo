# Middleware Repository

A simple Express.js application demonstrating the implementation and usage of middleware functions for request handling and authentication.

## Features

- **Root Middleware**: Logs all incoming requests to the console
- **Token Authentication**: Custom middleware for API route protection using query parameter tokens
- **Multiple Routes**: Demonstrates different route handlers with middleware integration
- **404 Handling**: Catches and handles invalid paths gracefully

## Dependencies

- **Express.js** (v5.1.0) - Fast, unopinionated web framework for Node.js

## Installation

```bash
npm install
```

## Usage

Start the server:

```bash
node test.js
```

The server will run on `http://localhost:8080`

## Available Routes

### Public Routes
- `GET /` - Root route (returns "Root route")
- `GET /login` - Login route (returns "Login route")
- `GET /wrong` - Test error route (returns "error")

### Protected Routes
- `GET /api?token=887` - API endpoint protected by token authentication
    - Requires query parameter `token=887`
    - Returns "data send from api" on successful authentication
    - Returns 401 Unauthorized for invalid/missing tokens

## Middleware Implementation

### Root Middleware
Applied globally to all routes, logs "Root middleware" for every request.

### Token Check Middleware (`checkToken`)
- Validates the presence of a specific token in query parameters
- Allows access only when `token=887`
- Returns 401 status for unauthorized requests

### 404 Handler
Catches all undefined routes and returns a 404 status with "Invalid path" message.

## Example Requests

```bash
# Successful API request
curl http://localhost:8080/api?token=887

# Unauthorized API request
curl http://localhost:8080/api?token=123

# Root route
curl http://localhost:8080/

# Invalid route (404)
curl http://localhost:8080/notfound
```

## Author

Aziz Amaan Ahmed

## License

ISC