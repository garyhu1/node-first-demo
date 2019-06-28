/**
 * @description 采用同步方法去读多个文件
 * 
 * 此代码编译不通过，暂时还未处理导致不通过的原因
 */
const fs = require("fs");
const { promisify } = require('util');

const read = promisify(fs.read);

const write = promisify(fs.write);

async function callAsyncSync(){

       const res1 = await read('./test1.txt')
    
       const res2 = await read('./test2.txt')
    
       const output1 = transferString(res1)
    
       const output2 = transferString(res2)
    
       write('./output.txt',output1+output2)
    
       return;
    
}

function transferString(data) {
    return data.toString();
}


callAsyncSync();