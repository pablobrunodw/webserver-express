/* App de webserver */

const http = require('http');

http.createServer((req, rta) => {
    rta.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Pablo',
        edad: 37,
        url: req.url
    }

    rta.write(JSON.stringify(salida));
    // rta.write('Hola mundo');
    rta.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');