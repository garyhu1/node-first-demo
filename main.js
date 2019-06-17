const requireContext = require("require-context");

const context = requireContext("../../express",false,/\.js$/);// false表示不查询子目录

let keys = context.keys();// 返回一个数组，包含了查询到的结果对象

keys.forEach(element => {
    console.log('TAG', 'element = '+element);

    let componentConfig = context(element);
    console.log('TAG', 'componentConfig = '+JSON.stringify(componentConfig));
});
