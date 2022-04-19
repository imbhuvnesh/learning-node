const http = require('http');

const server = http.createServer((req, res) =>
{
    const url = req.url;

    if (url === '/')
    {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title><W/head>')
        res.write('<body><p>Welcome!!</p><a href="/users" >Users</a><form action="/create-user" method="post"><input type="text" name="username"><button>Submit</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/users')
    {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title><W/head>')
        res.write('<body><p>Users List</p><ul><li>User 1</li><li>User 2</li></ul></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user')
    {
        const body = [];
        req.on('data', (chunk) =>
        {
            body.push(chunk);
        });
        req.on('end', () =>
        {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});


server.listen(3000);