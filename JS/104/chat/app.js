const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socketIo = require("socket.io")(server);

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const chatters = [];
let privateMsg = {};

socketIo.on("connection", socket => {
  console.log('server got a connection');

  let name;
  socket.on('login', (loginName, callback) => {
    const n = loginName.trim();
    if (!n) {
      callback(`Username is required.`);
    }

    if (chatters.find(c => c === n)) {
      callback(`Username ${n} already used. Please choose another.`);
    } else {
      name = n;
      chatters.push(name);
      privateMsg[name] = socket;
      callback(null, chatters);
    };

    socket.on('message', msg => {
      const m = msg.trim();

      if (m[0] === '@') {
        let stringArray = m.split(' ')
        let userName = stringArray[0].substring(1)
        console.log(userName)

        let message = m.substr(stringArray + 1);
        console.log(message)

        privateMsg[userName].emit("Direct_message", { name, msg: message });
        console.log(userName)
      }

      else if (m) {
        socketIo.emit('message', { author: name, msg: msg });

      }
    });
  });
});

app.use('/', (req, res, next) => {
  res.send('Hello World!');
});

server.listen(80);