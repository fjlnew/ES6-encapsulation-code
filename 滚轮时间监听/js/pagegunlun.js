class bigpagegunlun {
    constructor(selector,selector1){
        this.biggestpage = document.getElementById(selector);
        this.page = selector1-1;
    }
    bigpagegunlun(){
        bigpagegunlungo(this.biggestpage,this.page);
    }
}
function bigpagegunlungo(biggestpage,page){
    var page = page;
    var id = 0;
    $(document).on('mousewheel DOMMouseScroll', throttle(onMouseScroll, 1000));
    
    function throttle(func, wait) {
        let previous = 0;
        return function () {
            let now = Date.now();
            let context = this;
            let args = arguments;
            if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
            }
        }
    }
    
    function onMouseScroll(e) {
        var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        var delta = Math.max(-1, Math.min(1, wheel));
        if (delta < 0) { //向下滚动
            if (id >= page) {} else {
                id++;
                fun(-1);
            }
        } else { //向上滚动
            if (id < 1) {} else {
                id--;
                fun(1);
            }
        }
    }
    var ment = 0;
    var olddata = 0;
    
    function fun(id) {
        var height = biggestpage.offsetHeight;
        if (id === 1) {
            olddata = height;
        } else {
            olddata = -1 * height;
        }
        ment = ment +  olddata;
        biggestpage.style.marginTop = '' + ment + 'px';
    }
}
