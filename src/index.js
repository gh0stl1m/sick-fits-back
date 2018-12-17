// Load environment variables
require('dotenv').config({ path: '.env' });

// Yoga server instance
const createServer = require('./server');

const server = createServer();

// Run server
server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  },
},
  serverInfo => {
    console.log(`Server is now running on port http://localhost:${serverInfo.port}`);
  }
);
