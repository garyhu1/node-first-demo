
const helloNode = function() {
    console.log('TAG', 'hello node!');
}

const fuck = (msg) => {

    console.log("W T F"+msg);
}

module.exports = {
    helloNode,
    fuck
}