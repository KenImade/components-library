const panels = document.querySelectorAll('.panel')
const texts = document.querySelectorAll('.text')

panels.forEach(panel => {
    panel.addEventListener('click', (ev) => {
        removeActiveClasses()
        panel.classList.add('active')
        showText(ev.target.children[0])
    })
})

function showText(element) {
    setTimeout(() => {
        element.classList.add('active')
    }, 1000);
    
}

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })

    texts.forEach(text => {
        text.classList.remove('active')
    })
}