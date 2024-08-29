// src/server.js

const app = require('./app'); // Import the Express app instance

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
