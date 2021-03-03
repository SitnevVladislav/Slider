(() => {
    const pages = document.querySelectorAll(".slider__pages-li");
    const images = document.querySelectorAll(".slide-single");
    const sliderBlock = document.querySelector(".carousel");
    const slider = new Slider(
        images,
        pages
    );
    slider.lastFactory();


    
    sliderBlock.addEventListener("click", slider.controllerClick.bind(slider));
    
    


 })();