// 执行下一次循环时的回调
process.nextTick(() => {
    console.log('TAG', 'Thread on last');
});

// 执行退出时的回调函数
process.on("exit",(code) => {
    console.log('TAG', 'The Thread is on '+code);
});

console.log('TAG', 'Thread next ...')

if(typeof(window) === 'undefined'){
    console.log('TAG', 'node.js')
}else {
    console.log('TAG', 'brower');
}

console.log('TAG', 'current file name : ' + __filename);

console.log('TAG', 'current dir name : ' + __dirname);

console.log('TAG', 'process.platform  : ' + process.platform);

console.log('TAG', 'arguments : ' + process.argv);
