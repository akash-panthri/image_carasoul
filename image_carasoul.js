const prevBut = document.getElementById('prev')
const nextBut = document.getElementById('next')
const imgs = document.getElementById('images')


const img = document.querySelectorAll('#images img')


let index = 0
let interval = setInterval(run,2000)

function run(){
    index++
    changeImage()
}

function changeImage(){
    if (index> img.length-1){
index = 0
    }  else if(index<0){
index = img.length-1
    }

    imgs.style.transform=  `translateX(${-index * 500}px)`
}


function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run,2000)
}

nextBut.addEventListener('click',()=>{
    index++
    changeImage()
    resetInterval()
})
prevBut.addEventListener('click',()=>{
    index--
    changeImage()
    resetInterval()
})