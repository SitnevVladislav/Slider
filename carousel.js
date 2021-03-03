class Slider{
    constructor(images,pages){
        this.images = images;
        this.pages = pages;
        this.index = 0;
    }
    lastFactory(){
        let slide = document.querySelectorAll('.slide-single');
        let img = document.createElement('img');
        img.src = slide[slide.length-1].src;
        img.classList.add('slide-single');
        img.style.marginLeft = -300+'px';
        document.querySelector('#slider').prepend(img);
    }
    firstFactory(){
        let slide = document.querySelectorAll('.slide-single');
        let img = document.createElement('img');
        img.src = slide[0].src;
        img.classList.add('slide-single');
        document.querySelector('#slider').appendChild(img);
    }
    __addActiveClass(index) {
        this.images[index].classList.add("slider__li_active");
        this.pages[index].classList.add("slider__pages-li_active");
    }
    __removeActiveClass(index) {
        this.images[index].classList.remove("slider__li_active");
        this.pages[index].classList.remove("slider__pages-li_active");
    }
    __setIndex(number) {
        if(number >= this.images.length)
            this.index = 0;
        else if(number < 0)
            this.index = this.images.length - 1;
        else
            this.index = number;
    }



    nextSlide(){
        this.__removeActiveClass(this.index);
        this.__setIndex(this.index + 1);
        this.__addActiveClass(this.index);

        let position = -300;
        let current_slide = document.querySelector('.slide-single');
      
        let timerId = setInterval(()=>{
            position-=5;
            current_slide.style.marginLeft = position + 'px';

        },15);
        setTimeout(()=>{
            clearInterval(timerId);
            current_slide.remove();
            let curr = document.querySelector('.slide-single');
            curr.style.marginLeft = -300 + 'px';
            this.firstFactory();
            
        },900);
    }

    prevSlide(){
        this.__removeActiveClass(this.index);
        this.__setIndex(this.index - 1);
        this.__addActiveClass(this.index);

        let position = -300;
        let last_el = document.querySelectorAll('.slide-single');
        last_el[last_el.length - 1].remove();
        let current_slide = document.querySelector('.slide-single');

        let timerId = setInterval(()=>{
        position+=5;
        current_slide.style.marginLeft = position + 'px';
        },15);
        setTimeout(()=>{
            clearInterval(timerId);
            this.lastFactory();
            
        },900);
    }




    controllerClick(event) {      
        let target = event.target.dataset.target;
        if(target){
            event.preventDefault();
            if(target.toLowerCase() === "next") {
                this.nextSlide();
            } else if(target.toLowerCase() === "prev") {
                this.prevSlide();
            }
        }
    }


}