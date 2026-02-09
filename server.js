const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Serve the HTML file at multiple paths
    if (req.url === '/' || req.url === '/index.html' || req.url === '/carrd-saas.html') {
        fs.readFile(path.join(__dirname, 'saas-website.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading website');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(PORT, () => {
    console.log(`SaaS website running at http://localhost:${PORT}`);
    console.log(`To access from outside, you might need to configure firewall/security groups`);
    console.log(`Current machine IP: check with 'hostname -I' or 'curl ifconfig.me'`);
});