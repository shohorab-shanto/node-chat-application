# Node Chat Application

A real-time chat application built with Node.js, Express, MongoDB, and WebSockets.

## Features

- User authentication (login/signup)
- Real-time messaging
- User inbox management
- Cookie-based session management
- JWT token support
- Input validation with express-validator
- Password encryption with bcrypt

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Frontend**: EJS templating
- **Authentication**: JWT, Bcrypt
- **Real-time Features**: Cookie Parser
- **File Uploads**: Multer
- **Development**: Nodemon, Cross-env

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/shohorab-shanto/node-chat-application.git
cd node-chat-application
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```
PORT=5000
MONGO_CONNECTION_STRING=mongodb://localhost:27017/chat-app
COOKIE_SECRET=your-secret-key-here
APP_NAME=Chat Application
```

## Running the Application

### Development Mode
```bash
npm start
```
The application will run with nodemon and automatically restart on file changes.

### Production Mode
```bash
npm run prod
```

The application will start on the port specified in your `.env` file (default: 5000).

## Project Structure

```
├── app.js                          # Main application entry point
├── package.json                    # Project dependencies and scripts
├── .env.example                    # Example environment variables
├── controller/                     # Route controllers
│   ├── loginController.js
│   ├── usersController.js
│   └── inboxController.js
├── router/                         # Route handlers
│   ├── loginRouter.js
│   ├── usersRouter.js
│   └── inboxRouter.js
├── middlewares/                    # Custom middlewares
│   └── common/
│       ├── decorateHtmlResponse.js
│       └── errorHandler.js
├── views/                          # EJS templates
│   ├── index.ejs
│   ├── login.ejs
│   ├── users.ejs
│   ├── inbox.ejs
│   ├── error.ejs
│   └── partials/
│       └── header.ejs
└── public/                         # Static files
    ├── css/
    ├── js/
    └── images/
```

## Environment Variables

- `PORT` - Server port (default: 5000)
- `MONGO_CONNECTION_STRING` - MongoDB connection string
- `COOKIE_SECRET` - Secret key for cookie encryption
- `APP_NAME` - Application name displayed in the UI
- `NODE_ENV` - Environment mode (development/production) - set automatically by npm scripts

## API Routes

- **Login Routes** (`/`)
  - POST `/register` - User registration
  - POST `/login` - User login
  - GET `/logout` - User logout

- **Users Routes** (`/users`)
  - GET `/` - Get all users
  - GET `/:id` - Get user by ID
  - PUT `/:id` - Update user profile

- **Inbox Routes** (`/inbox`)
  - GET `/` - Get user messages
  - POST `/` - Send message
  - DELETE `/:id` - Delete message

## Error Handling

The application includes comprehensive error handling middleware that:
- Catches 404 errors for undefined routes
- Handles all application errors
- Logs errors in development mode
- Provides user-friendly error messages in production

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Cookie-based session management
- Input validation and sanitization
- Environment variable protection

## License

ISC

## Author

Shohorab Shanto

## Repository

https://github.com/shohorab-shanto/node-chat-application
