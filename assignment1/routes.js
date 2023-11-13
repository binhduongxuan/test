const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>Greeting</title></head>');
        res.write('<body><h1>WELCOME</h1><form action="/create-user" method="POST"><label for="">Username: </label>' +
            '<input type="text" name="username"><button type="submit">Save</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url ==='/users'){
        res.write('<html>');
        res.write('<head><title>List user</title></head>');
        res.write('<body><ul><li>User1</li><li>User2</li><li>User3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); //parsedBody = 'xxxxx'
            const username = parsedBody.split('=')[1];
            console.log(username);
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
        })
    }

}

exports.handler = requestHandler;