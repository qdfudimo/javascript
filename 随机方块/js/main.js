var arr = [];
for (var i = 0; i < 10; i++) {
    var r = Tools.getRandom(0, 255);
    var g = Tools.getRandom(0, 255);
    var b = Tools.getRandom(0, 255);
    var box = new Box({
        el: 'container',
        background: 'rgb(' + r + ',' + b + ',' + g + ')'
    })
    arr.push(box);
}
console.log(arr);
setInterval(ran, 500);
ran();

function ran() {
    for (var i = 0; i < arr.length; i++) {
        var box = arr[i];
        box.random();
    }
}