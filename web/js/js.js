// JavaScript Document
var thu = [];

function run(){
	thu.forEach(function(o){
		o.scroll();
	})
	setTimeout(run, 16);
}

/*tab标签*/
function setTab(m,n){
var tli=document.getElementById("menu"+m).getElementsByTagName("li");
var mli=document.getElementById("main"+m).getElementsByTagName("ul");
for(i=0;i<tli.length;i++){
   tli[i].className=i==n?"hover":"";
   mli[i].style.display=i==n?"block":"none";
}
}

function scroll(){
	var div = document.getElementsByTagName('div');
	for(var i = 0, n = div.length; i < n; i++) {
		var o = div[i];
		if (o.className.indexOf('index_banner') >= 0) {
			thu.push(o);
			o.img = o.getElementsByTagName('img')[0];
			o.nwi = o.img.width;
			o.nhi = o.img.height;
			o.img = o.img.style;
			o.x0  = 0;
			o.y0  = 0;
			o.xm  = 0;
			o.ym  = 0;
			o.onmousemove = function (e) {
				if (window.event) e = window.event;
				this.xm = e.clientX;
				this.ym = e.clientY;
			}
			o.scroll = function () {
				var xmo = Math.min(this.nw, Math.max(0, this.xm - this.nx));
				var ymo = Math.min(this.nh, Math.max(0, this.ym - this.ny));
				var x = -xmo * (this.nwi / this.nw) + xmo;
				var y = -ymo * (this.nhi / this.nh) + ymo;
				this.x0 += ((this.x0 > x) ? -1 : 0.1) * Math.abs(this.x0 - x) * .1;
				this.y0 += ((this.y0 > y) ? -1 : 0.1) * Math.abs(this.y0 - y) * .1;
				this.img.left = ''.concat(Math.round(this.x0), 'px');
				this.img.top  = ''.concat(Math.round(this.y0), 'px');
			}
			o.onresize = function () {
				this.nx = 0;
				this.ny = 0;
				this.nw = this.offsetWidth;
				this.nh = this.offsetHeight;
				for (var o = this; o != null; o = o.offsetParent) this.nx += o.offsetLeft, this.ny += o.offsetTop;
			}
			o.onresize();
		}
	}
	run();
}

onload = function() {
	scroll();
}

