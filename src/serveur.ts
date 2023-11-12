import * as http from 'http';

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/ping') {
    const headers = req.headers;

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify(headers));
  } else {
    res.writeHead(404).end();
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
