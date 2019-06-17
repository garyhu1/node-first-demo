function examResult (data) {
    return `${data.name}同学一年级期末考试语文${data.chinese}分，数学${data.math}分，位于年级第${data.ranking}名。`
}

var res = examResult({
    name: '小明',
    chinese: 78,
    math: 87,
    ranking: 999
}); 

console.log('TAG', res);