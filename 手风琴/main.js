
class shofengqing{
    constructor(selector){
        this.panelers = document.querySelectorAll(selector);
    }
    begin(){
        beggin(this.panelers);
    }
    
}

function beggin(panels){
    function toggleOpen() {
        if (this.classList.length > 2) {
            this.classList.toggle('open');
        } else {
            removeOpen();
            this.classList.toggle('open');
        }
    }
    
    function removeOpen() {
        panels.forEach(panel => panel.classList.remove('open'));
    }
    
    
    function toggleActive(e) {
        if (e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }
    }
    
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
    
}