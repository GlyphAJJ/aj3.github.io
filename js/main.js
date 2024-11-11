let counter = 0,
    Title = 'GLYPHAJ.LOL :))', // website title
    direction = true
aniTitle = setInterval(function () {
    if (counter == Title.length) {
        direction = false
    }
    if (counter == false) {
        direction = true
    }
    counter = direction == true ? ++counter : --counter
    newtitle = counter == 0 ? '' : Title.slice(0, counter)
    document.title = '' + newtitle
}, 400)
window.oncontextmenu = function () {
    return false
}
$(document).x(function (E) {
    if (E.keyCode == 123) {
        return false
    } else {
        if (
            (E.ctrlKey && E.shiftKey && E.keyCode == 73) ||
            (E.ctrlKey && E.shiftKey && E.keyCode == 74)
        ) {
            return false
        }
    }
})
function audioPlay() {
    var E = document.getElementById('audio')
    E.volume = 0.3
    E.play()
}
function videoPlay() {
    var E = document.getElementById('video')
    E.play()
}
