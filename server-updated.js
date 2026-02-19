const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Parse URL
    const parsedUrl = url.parse(req.url);
    const decodedPath = decodeURIComponent(parsedUrl.pathname);
    
    // Serve the main website
    if (decodedPath === '/' || decodedPath === '/index.html' || decodedPath === '/carrd-saas.html') {
        serveFile(res, 'saas-website.html', 'text/html');
    } 
    // Serve task dashboard
    else if (decodedPath === '/tasks' || decodedPath === '/task-dashboard.html') {
        serveFile(res, 'task-dashboard.html', 'text/html');
    }
    // Serve test files
    else if (decodedPath === '/test-navigation.html') {
        serveFile(res, 'test-navigation.html', 'text/html');
    }
    else if (decodedPath === '/test-mobile-menu.html') {
        serveFile(res, 'test-mobile-menu.html', 'text/html');
    }
    // Serve task API
    else if (decodedPath === '/api/tasks/simple') {
        try {
            const tasksContent = fs.readFileSync(path.join(__dirname, 'TASKS.md'), 'utf8');
            const pending = (tasksContent.match(/- \[ \].*/g) || []).length;
            const completed = (tasksContent.match(/- \[x\].*/g) || []).length;
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                pending,
                completed,
                total: pending + completed,
                lastUpdated: new Date().toISOString()
            }));
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to read tasks' }));
        }
    }
    // Serve playbook data
    else if (decodedPath === '/playbook-data.json') {
        serveFile(res, 'playbook-data.json', 'application/json');
    }
    // Serve images from the images directory
    else if (decodedPath.startsWith('/images/')) {
        const imagePath = path.join(__dirname, decodedPath);
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
    // Serve other static files (CSS, JS, etc.)
    else {
        const filePath = path.join(__dirname, decodedPath);
        fs.stat(filePath, (err, stats) => {
            if (err || !stats.isFile()) {
                res.writeHead(404);
                res.end('Not found');
                return;
            }
            
            const ext = path.extname(filePath).toLowerCase();
            const contentType = {
                '.html': 'text/html',
                '.css': 'text/css',
                '.js': 'application/javascript',
                '.json': 'application/json',
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.gif': 'image/gif',
                '.webp': 'image/webp',
                '.svg': 'image/svg+xml',
                '.ico': 'image/x-icon'
            }[ext] || 'application/octet-stream';
            
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Error reading file');
                    return;
                }
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(data);
            });
        });
    }
});

function serveFile(res, filename, contentType) {
    const filePath = path.join(__dirname, filename);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading ' + filename);
            return;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
}

server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📱 BYC Website: http://localhost:${PORT}/`);
    console.log(`📊 Task Dashboard: http://localhost:${PORT}/tasks`);
    console.log(`🧪 Navigation Test: http://localhost:${PORT}/test-navigation.html`);
    console.log(`📱 Mobile Menu Test: http://localhost:${PORT}/test-mobile-menu.html`);
    console.log(`📈 Task API: http://localhost:${PORT}/api/tasks/simple`);
});