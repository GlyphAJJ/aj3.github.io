const body = document.getElementsByTagName('body')
window.addEventListener('keydown', (event) => {
    if (event.ctrlKey && (event.key === 'S' || event.key === 's')) {
        event.preventDefault()
        body[0].innerHTML =
          '@glyphaj'
    }
    if (event.ctrlKey && event.key === 'C') {
        event.preventDefault()
        body[0].innerHTML =
            'AJ was here'
    }
    if (event.ctrlKey && (event.key === 'E' || event.key === 'e')) {
        event.preventDefault()
        body[0].innerHTML =
          'Skid!'
    }
    if (
        event.ctrlKey &&
        (event.key === 'I' || event.key === 'i' || event.key === 'Ä\xB1')
    ) {
        event.preventDefault()
        body[0].innerHTML =
          'GLYPHAJ was here'
    }
    if (event.ctrlKey && (event.key === 'K' || event.key === 'k')) {
        event.preventDefault()
        body[0].innerHTML =
          'SKID ALERT'
    }
    if (event.ctrlKey && (event.key === 'U' || event.key === 'u')) {
        event.preventDefault()
        body[0].innerHTML =
          '.gg/C6KDYq9Peb'
    }
})
document.addEventListener('contextmenu', function (e) {
    e.preventDefault()
})
