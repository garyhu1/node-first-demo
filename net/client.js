const net  = require("net");

const client = net.connect({port : "8001"}, () => {
    console.log('TAG', '连接到服务器');
});

client.on("data",(data) => {
    console.log('TAG', 'data = ' + data.toString());

    client.end();
});

client.on("end",() => {
    console.log('TAG', '断开服务器连接');
});