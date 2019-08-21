class gundongjulianimation{
    constructor(selector,selector1){
        this.name = document.querySelectorAll(selector);
        this.selector1 = selector1
    }
    gunlunbiggen(){
        gunlun(this.name,this.selector1);
    }
}
function gunlun(name,selector1){
    function Show() {
        var Height = $(window).height();
        $(name).not('.none').each(function(ind) {
            var Top = $(this).offset().top; //元素距离顶部距离
            var scroll = $(document).scrollTop(); //滚动高度
            if(Top - scroll - Height <= 0 &&Top - scroll >= 0) {
                $(name).not('.none').eq(ind).addClass(selector1);
            }else{
                $(name).not('.none').eq(ind).removeClass(selector1);
            }
            
        });
    }
    $(function() {
        Show();
        $(window).scroll(function() {
            Show();
        })
    })
}
