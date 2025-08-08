const fs = require('fs');
const path = require('path');


const https = require('https');


require('dotenv').config();

const app = require('./app');


const PORT = process.env.PORT || 8000;

// Use absolute paths for key and cert files to avoid path issues
const options = {
  key: fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
};

const server = https.createServer(options, app);


function startServer() {

    try {

        server.listen(PORT, () => {
            console.log(`Listening on port ${PORT}...`);
            console.log(``);
        });

    } catch (err) {

        console.error('Failed to start server:', err);
        
    }

}


startServer();