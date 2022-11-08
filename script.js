const images      = document.getElementById('images')
const leftButton  = document.getElementById('left')
const rightButton = document.getElementById('right')
const img = document.querySelectorAll('#images img')


let index = 0, interval = setInterval(run, 4000)


function run() {

    index++
    changeImage()
}


function changeImage() {

    if(index > img.length - 1) { index = 0 } 

    else if(index < 0) { index = img.length - 1 }
    images.style.transform = `translateX(${-index * 700}px)`
}


function resetInterval() {

    clearInterval(interval)
    interval = setInterval(run, 4000)
}


rightButton.addEventListener('click', () => {

    index++
    changeImage()
    resetInterval()
})


leftButton.addEventListener('click', () => {

    index--
    changeImage()
    resetInterval()
})
