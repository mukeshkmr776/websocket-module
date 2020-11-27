const { v4: uuidv4 } = require('uuid');
const socketio = require('socket.io');

class MySocket {
  socket = null
  allClients = [];

  constructor(httpServer) {
    this.socket = socketio(httpServer);
    this.socket.on('connection', (client) => {
      this.onConnection(client);
    });
    this.socket.on('error', this.onClientError);
  }

  onConnection(client) {
    client.uuid = uuidv4();
    this.addClient(client);
    client.on('disconnect', (reason) => {
      console.log('client disconnected - ', reason);
      this.removeClient(client);
    })
    client.on('message', (data) => {
      const callbackForSend = async (data2) => client.emit('message', data2);
      const messageEvent = new MessageEvent(data, callbackForSend);
      messageEvent.send({bye: true});
    });
  }

  onDisconnection(msg) {
    console.log('Client disconnected - ', msg);
  }

  onClientError(error) {
    console.log('Client error - ', error);
  }

  broadcastToAll() {
    this.socket.emit("hello", "world");
  }

  addClient(client) {
    this.allClients.push(client);

    this.allClients.forEach(cl => {
      console.log(cl.uuid);
    })
  }

  removeClient(disconnectedClient) {
    this.allClients.forEach((client, index) => {
      if (client.uuid === disconnectedClient.uuid) {
        this.allClients.splice(index, 1);
      }
    })
  }
}

class MessageEvent {
  type = null;
  message = null;
  callbackForSend = null;

  constructor(data, callbackForSend) {
    this.type    = data.type;
    this.message = data.message;
    this.callbackForSend = callbackForSend;
  }

  send(data) {
    this.callbackForSend({
      type: this.type,
      message: data || {}
    });
  }

}

module.exports = MySocket;
