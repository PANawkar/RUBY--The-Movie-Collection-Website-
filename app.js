const carousel=document.querySelector('.carousel');
let sliders=[]

let slideIndex =0;

const createSlide =() =>{
    if(slideIndex >= movies.length){
        sildeIndex =0;
    }

    //creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('div');
    let content = document.createElement('div');
    let h1 = document.createElement('div');
    let p = document.createElement('div');


// attaching all elements
imgElement.appendChild(document.createTextNode(''));
h1.appendChild(document.createTextNode(movies[slideIndex].name));
p.appendChild(document.createTextNode(movies[slideIndex].des));
content.appendChild(h1);
content.appendChild(p);
slide.appendChild(imgElement);
carousel.appendChild(slide);

//setting up image
imgElement.src=movies[slideIndex].image;
slideIndex++;

//setting elements classname
slide.className='slider';
content.className='slide-content';
h1.className='movie-title';
p.className='movie-des';
sliders.push(slide);

//adding sliding effort

if(sliders.length){
    slider[0].slide.marginLeft='calc(-${100 *(sliders.length -2)}-${30 *(sliders.length -2)}px)';
}
}

for(let i=0;i<3;i++){
    createSlide();
}

setInterval(()=>{
    createSlide();
},3000);

// video cards

const videoCards =[...document.querySelectorAll('.video-card')];

videoCards.forEach(item=>{
    item.addEventListener('mouseover', () =>{
        let video= item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () =>{
        let video= item.children[1];
        video.pause();
    })

})