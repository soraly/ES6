//1.导出常量
export var name = 'lzx';

//2.导出函数
export function sayhello(){
    console.log('say hello...');
}

//3.导出对象
export var hero = {
    name: 'hero',
    id: 999
}

//4.导出新名字
let obj = {name:'obj'}
export {obj as obb }

//5.合并导出
var id=123, odiv = {name:'div'}
function say(){console.log('say');return 'done'}
export {id, odiv, say}

//6.匿名导出
export default {key:'hehe',age:789}

//*全部导入


 