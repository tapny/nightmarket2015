
var photos = document.querySelector('.photos');
var photosGrid = document.querySelector('.photos-grid');

document.addEventListener('scroll', function() {
    var windowHeight = window.innerHeight;
    var photosHeight = photos.clientHeight
    var referencePt = (windowHeight - photosHeight) / 2 / windowHeight;

    console.log(referencePt);

    // var photosTop = photos.getBoundingClientRect().top;
})