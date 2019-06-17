const net = require("net");

net.createServer((connection) => {
    console.log('TAG', 'client is connection');

    connection.on("end",() => {
        console.log('TAG', '客户端关闭连接');
    });

    connection.write("hello!");

    connection.pipe(connection);
}).listen("8001", () => {
    console.log('TAG', 'Server is running .')
});