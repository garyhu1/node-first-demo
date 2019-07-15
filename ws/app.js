const WebSocket = require("ws");

// 引入Server服务
const WebSocketServer = WebSocket.Server;

// 创建实例
const wss = new WebSocketServer({
    port: 4004
});

// 监听连接
wss.on('connection',(ws) => {
    console.log(`[SERVER] connection()`);
    ws.on("message", message => {
        console.log(`[SERVER] Received: ${message}`);
        ws.send(`ECHO:${message}`,err => {
            if (err) {
                console.log(`[SERVER] error: ${err}`);
            }
        });
    })
});