变量声明 var 变量名= 值; 
变量声明未赋值的话是undefined;
在js中一个等于号是赋值，两个是判断值是否相等，不管数据类型
三个等于是值和数据类型全都要相等

数据类型
获取变量类型 console.log（typeof 数据）
数据类型转换
转数值型  parseInt（)  转整数
parseFolat() 转小数
Number() 转数字 带字母转就是NaN 不是一个数字 ！NaN 是不是不是一个数字  如果为数字的话true
隐形转换 减乘除

转为字符串类型
带引号的一般是字符串
数据.toString（）如果是undefined和null用这个转换会报错 这个效率高
string（数据）
字符串拼接  一个字符串+一个数字也会拼接成一个字符  '在'+12=“在12”

布尔类型
所有的字符串为真，空为假。所有的数字为真，0为假。

运算符
前置加加  ++num ；先自身加一再参与运算
后置加加  num++；先参与运算后加一
var num=10；
 num++；这里写++num和num++一样
console.log(num); 11

var  num = 10;
alert(++num + 10);   // 21 num=11

var  num = 10;
alert(10 + num++);  // 20  
log（num） //11

逻辑运算符
&& 且的意思 有一个为假 就都为假 如果第一个为假 后面的就不用再看了
var num=10；
例如 5>6&& ++num; 
|| 或的意思 两个为假才都为假 

短路运算
&& 如果前面为假的话就直接返回第一个数 第一个为真的话就返回表达式二
||  如果第一个表达式为假就返回表达式二，如果第一个为真就返回表达式一

赋值运算
中间不能有空格
+=  sum += 10；相当于 sum = sum + 10；

if 和swicth 的区别：if用于大范围的判断而swicth用于具体值的判断
swicth 的效率更高能够直接找到具体的值进行判断

双重for循环 外循环循环一次，内循环全部执行
一般外循环控制行内循环控制列

```
//打印正三角
for (var i = 0; i< 3; i++ ) {
      for(var j=0；j<i;j++) {
	sum += '锤子'
      }
   sum += '\n';
}
console.log(sum)
//打印倒三角
for (var i = 0; i< 3; i++ ) {
      for(var j=3；j<i;j++) {
	sum += '锤子'
      }
   sum += '\n';
}
console.log(sum)


```

do while 循环会先执行一次循环体再去判断条件
continue 会 关键字用于立即跳出本次循环，继续下一次循环（本次循环体中 continue 之后的代码就会少执行一次）。
break 会立即跳出循环 结束循环

数组 
创建数组两种方式
字面量的方式  var  arr = [ ]
new 的方式 var arr = new Array();
数组索引从0开始 长度从1开始
访问数组元素 数组[索引]
判断是不是数组
arr instanceof Array
Array.isArray(arr)

数组方法
arr.unshfit() 在数组头部添加元素
arr.shift()在数组头部删除元素
arr.pop()在数组尾部删除元素
arr.push()在数组尾部添加元素
arr.concat（） 拼接数组
arr.reserve() 数组反转
arr.sort(function(a,b){
    return a-b;
})  从小到大
数组转化为字符串
arr.join('-')括号里不加东西则按照逗号方式拼接，字符串再分割为字符串，用str.split(',')
arr.slice() 里面参数开始的位置结束的位置
arr.splice() 从第几个开始 要删除的个数，也可以添加数组元素

字符串对象方法
索引字符串  str.charAt() 里面为索引号找不到为空
str[i] H5新增方法
str.indexOf('字符') 返回这个字符的索引值没有则返回-1
str.subStr() 开始的位置要截取的个数
str.replace(）替换字符

预解析
变量的声明会提前，值不会
函数声明会提前。
匿名函数的函数调用不能写在函数表达式的上面
函数中的变量指挥提前到当前所在域的最上面，不会出去
变量声明在上，函数声明在下
作用域链：采取就近原则的方式来查找变量最终的值。

对象的创建三种方式
字面量的方式
new的方式
通过构造函数 再new

浅拷贝 
被复制对象的所有变量都含有与原来的对象相同的值，而所有的对其他对象的引用仍然指向原来的对象。
如果是基本数据类型，直接进行赋值操作，这样就相当于在栈内存中重新开辟了一个新的空间把值传递过去；
如果是引用类型的值传递，进行的就是浅拷贝，浅拷贝赋值的只是对象的引用，
如上述obj2=obj1，实际上传递的只是obj1的内存地址，所以obj2和obj1指向的是同一个内存地址，所以这个内存地址中值的改变对obj1和obj2都有影响。
！即对象的浅拷贝会对“主”对象进行拷贝，但不会复制主对象里面的对象。”里面的对象“会在原来的对象和它的副本之间共享。


浅拷贝：只拷贝对象的基础属性值，对属性值为对象或数组的属性则拷贝引用·。 
深拷贝：拷贝对象的所有属性作为一个全新的对象。拷贝前后的对象互不影响。

基础：

```
	//排序：
	var arr = [21,34,23,54,65,78];
		for(var i = 0;i<arr.length;i++){
			for(var j = 0;j<arr.length;j++){
				if(arr[j]>arr[j+1]){
					var res = arr[j]
					arr[j] = arr[j+1]
					arr[j+1] = res;
				}
			}
		}
		console.log(arr);	
	//选择排序：
			var arr = [21,34,23,54,65,78];
		for(var i = 0;i<arr.length;i++){
			for(var j = 0;j<arr.length;j++){
				if(arr[i]<arr[j]){
					var res = arr[i]
					arr[i] = arr[j]
					arr[j] = res;
				}
			}
		}
```

​	二分法排序（递归）：
​		递归的思想： 递归注重的是结果   不是过程
​		

​	二分法排序（递归）：
​		递归的思想： 递归注重的是结果   不是过程
​		

```
	var arr = [21,34,23,54,65,78];
			function quick(arr){
				if(arr.length <= 1){
					return arr;
				}
				var index = parseInt(arr.length/2);
				var mid = arr[index];
				var left = [];
				var right = [];
				for(var i = 0;i<arr.length;i++){
					if(i==index) {
						continue
					}
					if(arr[i]>mid){
						left.push(arr[i])
					}else{
						right.push(arr[i])
					}
				}
				return quick(right).concat(mid).concat(quick(left));
			}
```

​	预解析：(执行期 和 编译期---（预解析）)
​		提升当前作用域的最上面！！！
​		形参与变量名重名  以形参为主
​		实参大于形参：  多余的实参忽略
​		形参大于实参：  多余的形参赋值与undefined
​		1.变量的提升
​		2.函数名提升
​		3.分配栈堆地址
​		4.生成对应的哈希
​			加密（不同的密文要对应不同的秘钥   一一对应）
​		5.确定事件流的路线
​	函数：
​		全局函数调用
​		方法调用
​		上下文调用（环境调用）   call   bind   apply
​	函数的执行过程：
​		1.当发现函数会推送到执行环境（环境执行栈）
​		2.当去调用 会把执行过后的代码（返回）主栈
​		3.如果没有return  返回的是默认执行环境下的undefined
​		4.如果发现有形参 和 变量  会把变量 与形参保存在当前执行环境
​	函数查找的规则
​		作用域链：
​			1.现在当前执行环境下查找
​			2.在向上一级查找
​			3.。。。。。
​		局部变量与全局变量的区别：
​			1.局部环境可以访问全局全局环境不可以访问局部环境
​			2.垃圾回收机制：
​				计数清除   255   305
​				标记清除  标记计数   准备删除的时候  要查看当前的变量是否存在引用（闭包）
​		事件的处理机制：
​			1.预解析会确定事件流的路线
​			2.单击事件的时候 根据事件路线 向里面依次触发事件
​			3.达到最里层之后 执行向外的冒泡
​			4.最里层的元素不分顺序谁先定义执行谁；
​			5.事件流跟位置没有关系跟包含与被包含有关系

数组去重

```
   //第一种利用indexof 搜索新数组中的值存不存在 不存在则返回-1 
   function unique() {
            var arr4 = [1, 3, 5, 7, 9, 4, 67, 9, 4, 5];
            var newArr2 = [];
            for (var i = 0; i < arr4.length; i++) {
                if (newArr2.indexOf(arr4[i]) == -1) {
                    newArr2.push(arr4[i]);
                }
            }
            console.log(newArr2);
        }
//第二种 利用数组方法indexof  判断数组元素出现的位置是不是第一次出现位置 是就push进新数组
            var arr = [1, 3, 5, 7, 9, 4, 67, 9, 4, 5];
            var newArr2 = [];
            for (var i = 0; i < arr.length; i++) {
                if (arr.indexOf(arr[i]) == i) {
                    newArr2.push(arr[i]);
                }
            }
//第三种 利用es6方法 set
var arr1 = [...new set(arr)];

//第四种 利用filter过滤器
var b = arr1.filter(function(el,index,arr){
	return arr.indexOf(el) == index;
})
```







