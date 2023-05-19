const httpServer = require('http').createServer();
const WebSocket = require('ws');
const mysql = require('mysql');
const connections = [];
const SocketServer = new WebSocket.Server({ server: httpServer });

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mesajlar' // veritabanı adı burada değiştirildi
});

db.connect((err) => {
  if (err) {
    console.error('Veritabanı bağlantısı başarısız oldu: ' + err.stack);
    return;
  }
  console.log('Veritabanı bağlantısı başarıyla sağlandı');
});

SocketServer.on('connection', (client) => {
  console.log('Bir istemci bağlandı.');
  connections.push(client);

  client.on('message', (message) => {
    console.log(`İstemciden mesaj var: ${message}`);
    connections.forEach((connection) => {
      connection.send(`${message}`);

      const data = { id: null, mesaj: message }; // veritabanına kaydedilecek veriler
      db.query('INSERT INTO mesajlar SET ?', data, function (error, results, fields) {
        if (error) throw error;
        console.log('Mesaj kayıt edildi');
      });
    });
  });

  client.on('close', () => {
    console.log('İstemci düştü.');
    const index = connections.indexOf(client);
    connections.splice(index, 1);
  });
});

const PORT = 3000;

httpServer.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda dinlemeye başladı.`);
});
