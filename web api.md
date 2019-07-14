 e.stopPropagation（）   阻止事件冒泡  事件的方法
 e.preventDefault（）     阻止默认事件跳转
 e.target  指向的是被点击的元素 事件的属性
e.type  返回事件的类型不带on   属性

**this**    
1.指向的是绑定事件的对象
2.构造函数中的this指向的是new的实例化对象
3.普通函数中的this指向的是全局对象window
4.计时器中的this指向的是全局对象window
5.对象中的this指向的是这个对象

e.client  获取的是可视窗口的坐标
事件委托的核心就是  利用事件冒泡影响每一个子节点  
Dom事件的三个阶段 捕获阶段  当前目标阶段  冒泡阶段
键盘获取  e.keyCode
keyup 键盘弹起
keydown 键盘落下

**注册事件的两种方式**
元素.on操作类型= function() {
}   只能处理一种点击事件后面的会覆盖掉前面的

事件监听
元素.addEventListener(type,函数，true/false）
type 为不带on开头的事件  true 为事件捕获阶段从上往下执行  false或者为空 冒泡阶段从当前目标开始由内往外
 绑定的元素.removeEventListener（不带on的事件，函数名）   删除事件

**获取事件**
getElementById(id);  通过元素的id获取
getElementsByTagName(标签名)  通过标签获取
getElementsByName(name属性名）通过属性名获取
getElementsByClassName(class名) 通过class类名获取
H5新增
querySelector() 获取的是一个东西 id选择器要加#id  class选择器要加.class
querySelectorAll()  获取的是一个伪数组

**事件三要素** ： 事件源 事件类型 事件处理函数

**排它思想**
先清楚所有的类样式  在给当前的对象添加类样式

**全选反选**
第一步先给全选按钮添加点击事件 循环下面分选按钮的状态，给分选按钮添加全选按钮的状态（this.checked）选中为true
第二步循环给每个分选按钮注册点击事件，先假设所有的按钮全部为选中，flag=true。
再循环判断每个分选按钮的状态，是否被选中，如果没有被选中则flag为false。设置全选按钮的状态等于flag
**获取自定义属性**
元素.getAttribute('属性名')  
**自定义创造属性**
元素.setAttribute('属性名', 属性值）
**h5新增创造自定义属性**
以data开头  data-属性名  data-tr-dr
**获取属性值**
元素.dataset.属性名
元素.dataset['属性名']
  元素.dataset.trDr
**移除自定义属性**
元素.removeAttribute（'属性名'）
**tab栏切换**
先循环tab栏的给每个添加点击事件，自定义一个属性用来存储当前的i值。先循环每个栏，移除他们的类样式，在给当前的添加类样式。
先循环每个出现的栏，设置隐藏，给和当前tab栏的点击位置i值一样的出现

**节点类型**
nodeType	 为1 是元素
nodeType  为2  是属性
nodeType  为3  是文本值 空行换行

**父级节点**
node.parentNode  最近的一个亲父节点  没有则返回null

**子级节点**
父级元素.childNodes   是一个伪数组  返回的是所有的节点
父级元素.children  是一个伪数组  经常用  返回的是所有的元素节点
最后一个子元素节点  父级元素.children[父级元素.children.length-1]
兄弟节点
下一个兄弟节点
 父级元素.nextSibling
上一个
父级元素.previousSibling

先创建再添加
创建节点
 var 变量名=document.createElement（'标签名'）；

**添加节点**
在后面一直添加
父级元素.appendChild(变量名);
在指定的某一个位置添加
父级元素.insertBefore（变量名，指定位置（ul.children[0])
删除节点
父级元素.removeChild(child)
node.removeChild() 方法从 node节点中删除一个子节点，返回删除的节点。

**克隆节点**
node.cloneNode() 括号内false的话为浅拷贝 只复制标签  。为true就复制所有内容
还要再添加

**创建元素的三种方式**
innerHTML  用数组的话创建元素效率最高 ，要先把元素添加到数组中push，再分割为字符串join 赋值给innerHTML 
，字符串拼接效率最低

document.write   会把 页面内容全部重新生成

var 变量名=document.createElement('标签名') 

**入口函数**
load 是页面元素全部加载完成 才能执行操作
window.onload=function() {

}
window.addEventListener('load',function(){

})
DomContentLoaded  是等页面基本结构加载完成就能执行一些js操作
window.addEventListener('DomContentLoaded',function(){

})

window.onresize 监测页面窗口是否缩放
  innerWidth 动态获取窗口宽度
定时器 一次定时
setTimeout(function(){

},1000(毫秒))
里面的function可以给个变量名
var 变量名=setTimeout(function(){

},1000(毫秒))
定义变量接收为了清楚定时器
clearTimeout（变量名）;

定时器闹钟定时器时间倒继续执行
setInterval(function(){

},5000)
就是每过五秒过后执行



**刷新页面**
location.reload(true)   
location.href=location.href
history.go(0)

var  params = new URLSearchParams(?name=ss&age=16)
params.get('name')  //ss

navigator.userAgent   获取设备信息

history.forward  前进 go（1）
history.back   后退  go(-1)

元素.offsetTop  
offsetLeft
offetWidth  包括边框。padding。内容
offsetHeight
offset一般用来获取元素位置

元素.clientTop  
clientLeft 
clientWidth
clientHeight  不包括边框
client一般获取元素大小

元素.scrollTop  元素向上卷曲的距离
向上卷曲事件  onscroll
window.pageXoffset  页面向上卷曲的距离

scrollTop=document.documentElement.scrollTop || document.body.scrollTop || window.pageXoffset || 0;

mouseentr 不会对子元素冒泡  一般 mouseleave 搭配使用

touchstart  手指在屏幕上
touchmove  手指在屏幕上移动
touchend   手指在屏幕上离开
 touches 正在触摸屏幕的所有手指的列表 
targetTouches 正在触摸当前DOM元素的手指列表
如果侦听的是一个DOM元素，他们两个是一样的
changedTouches 手指状态发生了改变的列表 从无到有 或者 从有到无
因为我们一般都是触摸元素 所以最经常使用的是 targetTouches
console.log(e.targetTouches[0]);
targetTouches[0] 就可以得到正在触摸dom元素的第一个手指的相关信息比如 手指的坐标等等

e.targetTouches.pageX 获取在x轴上的坐标开始的位置
e.changedTouches.pageX 获取在x轴上的结束的坐标位置

 事件为touchstart  先获取鼠标在盒子中的初始位置，和盒子的offsetLeft.offsetTop
 事件为touchmove 
移动端移动盒子是用手指在屏幕上的结束位置-初始位置=移动距离，
用这个移动距离加上盒子的位置offsetLeft值就是盒子的移动距离

事件为mousedown  pc端是先用鼠标在盒子的位置减去盒子的offsetLeft的值获取鼠标在盒子中的位置
鼠标移动事件源为document  用鼠标在盒子的位置减去鼠标在盒子的位置就是鼠标移动的距离

函数中没有return，log输出的话为undefined

window.scroll（x,y)

pc端轮播图是点击看不到过程
移动端是滑动能看到过程

添加类名不会覆盖前面的
element.classList.add('类名')
element.classList.remove('类名')
element.classList.toggle('类名')

本地存储
页面关闭存储就清楚
创建
sessionStorage.setItem(key,val)  ('username',value);
获取
sessionStorage.getItem（key);
移除
sessionStorage.removeItem(key);
全部清楚（慎用）
sessionStorage.clear（）;什么都不用

不手动清除，会一直存在
localStorage.setItem（key，val）

change事件文本框状态发生改变






















​	