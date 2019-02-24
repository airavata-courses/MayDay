import app from './app';
import * as fs from 'fs';
import * as https from 'https';
const PORT = process.env.PORT || 3000;

const options = {
    cert: fs.readFileSync('cert/ssl_host.crt'),
    key: fs.readFileSync('cert/ssl_host.key')
  };

const server = https.createServer(options, app);
server.listen(PORT,() => {
    console.log('Express server listening on port ' + PORT);
});