function Box(opa) {
    opa = opa || {};
    this.width = opa.width || 20;
    this.height = opa.height || 20;
    this.background = opa.background || 'red';
    this.x = opa.x || 0;
    this.y = opa.y || 0;
    var dive = document.getElementById(opa.el);
    this.div = document.createElement('div');
    this.dive = dive;
    this.dive.appendChild(this.div);
    this.init();
}
//对div进行初始化
Box.prototype.init = function() {
        var div = this.div;
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.backgroundColor = this.background;
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        div.style.position = 'absolute';
    }
    //一行能够有几个方块
Box.prototype.random = function() {
    var x = Tools.getRandom(0, (this.dive.offsetWidth / this.width) - 1) * this.width;
    var y = Tools.getRandom(0, (this.dive.offsetHeight / this.height) - 1) * this.height;
    this.div.style.left = x + 'px';
    this.div.style.top = y + 'px';

}