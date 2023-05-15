var lightContainerr = document.getElementById("light-Containerr");
var slideImg = document.getElementById("slide-img");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var closeBtn = document.getElementById("close");
var imgList = document.querySelectorAll("#About img")
var imgArray = [];
var currentIndex = 0;



for (var i = 0; i < imgList.length; i++) {
    imgArray.push(imgList[i]);
    imgList[i].addEventListener("click",function(e){
        currentIndex = imgArray.indexOf(e.target);
        $(lightContainerr).fadeIn();
        // lightContainerr.style.display="block";
        var imgSrc = e.target.src;
        slideImg.setAttribute("src" , imgSrc);
})

}
function prevSlide(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = imgArray.length-1;
    }
    var prevImgSArc = imgList[currentIndex].getAttribute("src");
    slideImg.setAttribute("src" , prevImgSArc);
}
function nextSlide(){
    currentIndex++;
    if(currentIndex == imgArray.length){
        currentIndex=0;
    }

    var nextImgSrc = imgList[currentIndex].getAttribute("src");
    slideImg.setAttribute("src" , nextImgSrc);
}
function closeSlide(){
    $(lightContainerr).fadeOut();
    // lightContainerr.style.display="none";
}


nextBtn.addEventListener("click" ,nextSlide);
prevBtn.addEventListener("click",prevSlide);
closeBtn.addEventListener("click" ,closeSlide);

document.addEventListener("keydown",function(e){
    if(e.keyCode == 39){
        nextSlide();
    }
    else if(e.keyCode == 37){
        prevSlide();
    }
    else if(e.keyCode == 27){
        closeSlide();
    }
})