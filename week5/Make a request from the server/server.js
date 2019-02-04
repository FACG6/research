const req = require('request');
const http = require('http');
const fs = require('fs');
const path = require('path');
const queryString = require('querystring');
http.createServer((request, response) => {
    if (request.url == '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (error, file) => {
            if (error) {
                response.writeHead(500, {
                    'Content-Type': 'text/html'
                });
                response.end('<h1>Server Error</h1>')
            } else {
                response.writeHead(200, {
                    'Content-Type': 'text/html'
                })
                //console.log(res);
                response.end(file);
            }
        })

    } else if (request.url == '/query') {
        let allData = '';
        request.on('data', chunk => {
            allData += chunk;
        })
        request.on('end', () => {
            const search = queryString.parse(allData).text;

            const options = {
                method: "GET",
                url: `https://api.themoviedb.org/3/search/movie?api_key=49a2024dbbeaea4da5c16734580251d8&query=${search}`
            }

            req(options, (err, res, body) => {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/html'
                    });
                    response.end('<h1>Server Error</h1>')
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/html'
                    })
                    const paresBody = JSON.parse(body);
                    paresBody.results.forEach(element => {
                        response.write(element.title);
                    });
                    response.end();
                }
            });

        })

    }
}).listen(5000, () => {
    console.log("server start");
})