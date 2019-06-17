const events = require("events");

const eventEmitter = new events.EventEmitter();

eventEmitter.on("send-data",() => {
    console.log("开始发送数据");
    let data = "hello node";

    eventEmitter.emit("recieve-data",{data});
});

eventEmitter.on("recieve-data",(params) => {
    console.log('TAG', '接收数据成功 ： ' + params.data);
});

eventEmitter.addListener("recieve-data",(params) => {
    console.log('TAG', '我也接收到数据了 ： ' + params.data);
});

eventEmitter.emit("send-data");

console.log('TAG', '数据发送完成');