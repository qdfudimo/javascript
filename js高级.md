�հ���
		ʲô�Ǳհ���
			1.һ����������Է�����һ��������ı���;
			2.һ���������ø��������ı��� ���Ұ���������ڲ��ı��� ���ظ��ߵĻ���
		ΪʲôҪʹ�ñհ���
			�հ���
				ռ���ڴ�
				�������ͷſռ�
			�ô���
				ȷ��������������
		�հ���ʲô�ص�
			 1.�ڲ�Ҫ���غ���
			 2.Ҫ�����ⲿ�ı���
		���ʹ�ñհ�
				// for(var i = 0;i<10;i++){
				// 	(function(i){
				// 		setTimeout(function(){
				// 			console.log(i)
				// 		})
				// 	})(i)
				// }
		α���������飺
			α������������һЩ����  Ҳ�����������һЩ����
			α���� ��for in ���� ������� ��֪���ĺ���
			α����ת�����飺
				var p1 = Array.prototype.slice.call(p);
				for(var k in p1){
					console.log(p1[k])
				}
			call  apply  bind
			1.�ı�thisָ��
			2.�ڲ�ͬ������ִ��
			
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
			//A��ԭ��=B��ԭ��
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
		canvas��
			��������ǻ�ͼ��
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
��̬��Աֻ�ܹ��캯���������

���

```
   function deepCopy(o1, o2) {
            for (var key in o1) {
                if (o1[key] instanceof Array) {
                    //�ж�o1key�ǲ�������
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
//�ڶ���
var obj2 = JSON.parse(JSON.stringfy(obj1))
```

