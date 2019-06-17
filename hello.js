const { fuck,helloNode } = require("./public/word");

const { autoRun,observe } = require("./mvvm.js");

let msg = "小岩岩"

fuck(msg);

console.log('TAG', '当前工作的dir = '+process.cwd());

console.log('\n<<===========================================================>>\n');

let data = {
    count : 1
}

observe(data);

autoRun(() => {
    console.log('GARYHU', 'count = ' + data.count);
});

data.count = 1000;