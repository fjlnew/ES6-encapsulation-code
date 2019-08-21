class aroundPlay {
    constructor(selector,selector1,selector2, num, time,onewidth) {
        this.big = document.getElementById(selector);
        this.biggbox = document.getElementById(selector1);
        this.dongtaitu = document.getElementById(selector2);
        this.allpic = num;
        this.nowplace = 1;
        this.fangx = 1;
        this.changetime = time;
        this.width=onewidth;
        this.left = 0;
    }
    gotothe(b) {
        var size = (b - 1) * this.width * (-1);
        this.dongtaitu.style.marginLeft = size + "px";
    }
    onmusetmove(evt) {
        var _this = this;
        var oevent = evt || event;
        var disx = oevent.clientX;
        var disy = oevent.clientY;
        document.onmousemove = function (evt) {
            var oevent = evt || event;
            evt.preventDefault();
            _this.left = oevent.clientX - disx + 'px';
        }
        document.onmouseup = function () {
            if (_this.left[0] == '-') {
                if (_this.nowplace != _this.allpic) {
                    _this.nowplace++;
                    _this.gotothe(_this.nowplace);
                }
            } else {
                if (_this.nowplace != 1) {
                    _this.nowplace--;
                    _this.gotothe(_this.nowplace);
                }
            }
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
    zddh(npl, fx) {
        var _this = this;
        if (npl == 1 && fx == 0) {
            _this.fangx = 1;
            _this.zddh(_this.nowplace, _this.fangx);
        } else if (npl == _this.allpic && fx == 1) {
            _this.fangx = 0;
            _this.zddh(_this.nowplace, _this.fangx);
        } else if (npl >= 1 && npl < _this.allpic && fx == 1) {
            _this.nowplace = npl + 1;
            _this.gotothe(_this.nowplace);
        } else if (npl <= _this.allpic && npl > 1 && fx == 0) {
            _this.nowplace = npl - 1;
            _this.gotothe(_this.nowplace);
        }
    }


}
