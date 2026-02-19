const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Decode URL to handle spaces and special characters
    const decodedUrl = decodeURIComponent(req.url);
    
    // Serve the HTML file at multiple paths
    if (decodedUrl === '/' || decodedUrl === '/index.html' || decodedUrl === '/carrd-saas.html') {
        fs.readFile(path.join(__dirname, 'saas-website.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading website');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } 
    // Serve playbook data JSON
    else if (decodedUrl === '/playbook-data.json') {
        fs.readFile(path.join(__dirname, 'playbook-data.json'), (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Playbook data not found');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    }
    // Serve images from the images directory
    else if (decodedUrl.startsWith('/images/')) {
        const imagePath = path.join(__dirname, decodedUrl);
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Image not found');
                return;
            }
            // Determine content type based on file extension
            const ext = path.extname(imagePath).toLowerCase();
            const contentType = {
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.gif': 'image/gif',
                '.webp': 'image/webp'
            }[ext] || 'application/octet-stream';
            
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        });
    }
    else {
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(PORT, () => {
    console.log(`SaaS website running at http://localhost:${PORT}`);
    console.log(`To access from outside, you might need to configure firewall/security groups`);
    console.log(`Current machine IP: check with 'hostname -I' or 'curl ifconfig.me'`);
});