闭包：
		什么是闭包：
			1.一个作用域可以访问另一个作用域的变量;
			2.一个函数引用父级环境的变量 并且把这个函数内部的变量 返回更高的环境
		为什么要使用闭包：
			闭包：
				占用内存
				不容易释放空间
			好处：
				确保变量不被销毁
		闭包有什么特点
			 1.内部要返回函数
			 2.要引用外部的变量
		如何使用闭包
				// for(var i = 0;i<10;i++){
				// 	(function(i){
				// 		setTimeout(function(){
				// 			console.log(i)
				// 		})
				// 	})(i)
				// }
		伪数组与数组：
			伪数组具有数组的一些属性  也不具有数组的一些方法
			伪数组 用for in 遍历 会遍历出 不知道的函数
			伪数组转化数组：
				var p1 = Array.prototype.slice.call(p);
				for(var k in p1){
					console.log(p1[k])
				}
			call  apply  bind
			1.改变this指向
			2.在不同环境下执行
			
			function A(name,age){
				this.name = name;
				this.age = age;
			}
			A.prototype.fn = function(){
				console.log(123)
			}
			function B(name,age,id){
				this.id = id;
				A.call(this,name,age)
			}
			//A的原型=B的原型
			B.prototype = A.prototype;
			function C(name,age,sex){
				this.sex = sex;
				A.apply(this,[name,age])
			}
			C.prototype = A.prototype;
			C.prototype.fn = function(){
				console.log(456)
			}
			var b = new B("kf",12);
			b.fn()	
		canvas：
			这个玩意是画图的
				function React(options){
				this.init(options)
			}
			React.prototype={
				init:function(options){
					this.x = options.x;
					this.y = options.y;
					this.width = options.width||100;
					this.height = options.height||100;
					this.bgcolor = options.bgcolor||"pink";
					this.border = options.color;
					this.linewidth = options.linewidth||5;
				},
				renderrect:function(ctx){
					ctx.rect(this.x,this.y,this.width,this.height);
					ctx.fillStyle = this.bgcolor;
					ctx.fill();
					ctx.stroke()
				},
				renderarc:function(ctx){
					ctx.arc(100,100,50,0*Math.PI,2*Math.PI,true);
					ctx.fillStyle = this.bgcolor;
					ctx.fill();
					ctx.stroke()
				}
			}


			var rect = new React({
				x:100,
				y:100,
				width:100,
				height:100,
				bgcolor:"pink"
	
			});
			rect.renderarc(ctx);
			rect.renderrect(ctx);
静态成员只能构造函数本身调用

深拷贝

```
   function deepCopy(o1, o2) {
            for (var key in o1) {
                if (o1[key] instanceof Array) {
                    //判断o1key是不是数组
                    o2[key] = [];
                    deepCopy(o1[key], o2[key]);
                } else if (o1[key] instanceof Object) {
                    o2[key] = {};
                    deepCopy(o1[key], o2[key]);
                } else {
                    o2[key] = o1[key];
                }
            }
        }
//第二种
var obj2 = JSON.parse(JSON.stringfy(obj1))
```

