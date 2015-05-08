
var photos = document.querySelector('.photos');
var photosGrid = document.querySelector('.photos-grid');

window.photos = photos;
window.photosGrid = photosGrid;

document.addEventListener('scroll', function() {
    var windowHeight = window.innerHeight;
    var photosHeight = photos.clientHeight
    var windowMidPt = (windowHeight - photosHeight) / 2 / windowHeight;

    var photosRect = photos.getBoundingClientRect();
    var photosTop = photosRect.top;
    var photosMidPt = photosRect.top + photos.clientHeight / 2;

    var x1 = -photos.clientHeight / 2;
    var y1 = photos.clientHeight;
    var x2 = window.innerHeight + photos.clientHeight / 2;
    var y2 = -photosGrid.clientHeight;
    var slope = (y2 - y1) / (x2 - x1);
    var intercept = photos.clientHeight * (1 + slope / 2);

    var offset = photosMidPt * slope + intercept;

    photosGrid.style['transform'] = 'translateY(' + offset + 'px)';
})