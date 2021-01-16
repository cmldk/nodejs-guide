const fs = require('fs');

const requestHandler = (req, res) => {
    const method = req.method;
    const url = req.url;
    const users = [];

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><div>Hello, welcome to my first nodejs app</div><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');
        res.write('<div>');
        res.write('<h1>Users</h1>');
        res.write('<ul><li>User 1</li></ul>')
        res.write('<ul><li>User 2</li></ul>')
        res.write('<ul><li>User 3</li></ul>')
        res.write('</div>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
            fs.writeFile('users.txt', username, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', "/");
                return res.end();
            });
        })
    }
}

module.exports = requestHandler;