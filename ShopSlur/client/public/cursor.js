const cursorDot = document.querySelector("[data-cursor-dot]")
const cursorOutline = document.querySelector("[data-cursor-outline]")

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX
    const posY = e.clientY

    cursorDot.style.left = posX + 'px'
    cursorDot.style.top = posY + 'px'

    cursorOutline.style.left = posX + 'px'
    cursorOutline.style.top = posY + 'px'


    if (e.target.tagName === 'A' ||
        e.target.tagName === 'H11' ||
        e.target.tagName === 'SPAN1' ||
        e.target.tagName === 'IMG' ||
        e.target.tagName === 'path' ||
        e.target.tagName === 'BUTTON' ||
        e.target.parentNode.tagName === 'BUTTON') {
        cursorDot.classList.add('big');
    } else {
        cursorDot.classList.remove('big');
    }

    cursorOutline.animate({
        left: posX + 'px',
        top: posY + 'px'
    },{
        duration: 500,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fill: "forwards",
    })
})