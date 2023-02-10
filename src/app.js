const btn = document.querySelector('.btn')
let first = document.querySelector('.g-1')
let imgWindow = document.createElement('div')
let imgDisplay = first.firstElementChild.cloneNode() 
let imageGallery = document.querySelectorAll('img')
let SourceTabs = []
let Interval;
 
// FONCTION QUI CREE LA DIV A METTRE L'IMAGE
function createDiv() {
    let container = document.body
    container.appendChild(imgWindow)
    imgWindow.setAttribute('class', 'imageWindow')
    imgWindow.setAttribute('id', 'currentImg')
    imageDisplay()
}

// FONCTION QUI AFFICHE L'IMAGE EN DIAPORAMA
function imageDisplay() {
    imgDisplay.setAttribute('class', 'imageDisplay')
    imgWindow.appendChild(imgDisplay)   
    imgWindow.addEventListener('click', function () {
        imgWindow.remove()
        imgDisplay.remove()
        clearInterval(Interval)
    })
}

// FONCTION QUI CHANGE L'IMAGE CHAQUE 3s
function changeImage() {
    let img = 0
    for (let i = 0; i < imageGallery.length; i++) {
        SourceTabs.push(imageGallery[i].getAttribute('src'))
    }
        Interval = setInterval(() => {
        imgDisplay.setAttribute('src', SourceTabs[img])
        img++
        if (img === imageGallery.length) {
            img = 0
        }
    }, 3000)  
}
btn.addEventListener('click', function () {
    createDiv();
    changeImage()
})

