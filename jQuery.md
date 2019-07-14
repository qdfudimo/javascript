不能文档做动画，只能元素做动画
jq里面anmiate动画和offset（{
			}）里面不用写function函数
$(".tips > p").fadeIn(200).delay(200).fadeOut(1000).text("请输入正确的手机号");
		offset（）.top; 获取元素位置，距离文档位置的
offset（{
		top：xx,
		left:xxx
}）

**选择器** 

id选择器     $("#id")  获取指定id的元素

类选择器	$(".class")  获取指定类名元素数组的保存

标签选择器 $("div") 获取指定标签的数组

筛选选择器
	:first
		$('div:first')
			获取指定的第一个div元素
	:last
		$('div:last')
			获取指定的最后一个div元素
	:eq(索引)
		$('div:eq(0)')
		$('div').eq(0)
		获取指定的第一个div元素
	:odd
		$('div:odd')
			获取指定的div个数索引为奇数的元素
	:even
		$('div:even')
			获取指定的div个数索引为偶数的元素

筛选方法
	$el.parent()
		返回$el元素的父元素
	$el.parents()
		返回$el元素的所有父元素
			传参(选择器)可以获取指定选择器的父元素
	$el.children('选择的元素')
		获取$el元素的直接子元素
	$el.find('选择的元素')
		获取$el元素的所有后代元素
	$el.siblings('选择的元素')
		获取$el元素的所有兄弟元素
	$el.nextAll()
		获取$el元素的之后的所有兄弟元素
	$el.prevtAll()
		获取$el元素的之q前的所有兄弟元素
	$el.hasClass('样式名')
		判断当前$el是否有某个样式，有返回true，否则返回false
	注意两者之间的区别
	注意两者之间的区别

内容文本
	普通元素内容
		$el.html()
			获取元素内容  拿到包含标签的字符串
		$el.html('<div>123</div>')
			设置元素内容  识别标签类型字符串，可以用来创建元素
		同原生的el.innerHTML = ''<div>123</div>"
	普通元素文本内容
		$el.text()
			获取元素内容  拿到元素文本的字符串
		$el.text('你好')
			设置元素内容  不识别标签类型字符串
		同原生的el.innerText = ''你好"
	表单内容
		$('input').val()
			获取表单元素内容  拿到表单元素输入框内的值
		$('input').val('你好')
			设置表单元素内容
		同原生的el.value = ''你好"

元素操作
	遍历元素
		$el.each(function (index, item) {})
			index是数组的索引
			item是每一个子元素
	遍历复杂数据类型
		$.each(arr, function (index, item) {})
		JS原生也提供一个遍历方式
			arr.forEach(function (item, index){})
		注意回调函数里的参数，顺序是不一样的
	创建元素
		var el = $('<div></div>')
	添加元素
		父元素里添加子元素
			$el.append(创建的元素(变量))
			$el.append('<div></div>')
				给$el下面子元素的最后添加创建的元素
			$el.prepend('<div></div>')
				给$el下面子元素的最前面添加创建的元素
		父元素前面添加元素
			$el.before(创建的元素，识别标签)
		父元素后面添加元素
			$el.after(创建的元素，识别标签)
	删除元素
		删除自己
			$el.remove()
		清空子元素
			$el.empty()
			$el.html('')
				请查看本文件--》内容文本--》普通元素内容(星号)

positon().top;获取的是带有定位的位置
样式操作
	行内样式
		单个样式
			$el.css('样式属性')
				$('div').css('width')
					返回div元素宽度样式值，比如是200px的字符串
			$el.css('样式属性'，'样式值')
				$('div').css('width'，'200px')
				$('div').css('width'，200)
				设置div元素的宽度是200px
		多个样式
			$el.css({'样式属性1'，'样式值1'， '样式属性2'，'样式值2'，...})
				$('div').css({'width':200, 'height': 300})
					设置div元素的宽是200px,高是300px
	操作类名  注：类名不要加点
		$el.addClss('类名')
			给$el元素添加一个类名
		$el.removeClss('类名')
			给$el元素删除一个类名
		$el.toggleClss('类名')
			给$el元素切换一个类名，有就删除，没有就添加
		这种类名操作不会影响元素原先的类名

元素尺寸操作
	$el.width()/$el.height()
		获取元素宽度和高度
			不包含padding, border, margin
	$el.innerWidth()/innerHeight()
		获取元素宽度和高度
			不包含border, margin
	$el.outerWidth()/outerHeight()
		获取元素宽度和高度
			不包含margin
	$el.outerWidth(true)/outerHeight(true)
		获取元素宽度和高度
			包含padding, border, margin
	1.括号内不传参，是获取值，不带单位   2.传参(不需要加单位)，是设置  

















