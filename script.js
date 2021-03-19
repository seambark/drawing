const canvas = document.querySelector('.canvas');
const canvasWidth = canvas.offsetWidth;
const fishBellWrap = document.querySelector('.fishBellWrap');
const fishBell = document.querySelector('.fishBell');
const fishBellHeight = fishBell.offsetHeight;

// fishBellWrap.addEventListener('click', bellHandler);
// function bellHandler(e) {
//     e.target.parentNode;
//     console.log(e.target.parentNode);
// };

canvas.addEventListener('click', mouseHandler);
function mouseHandler(e) {
    const x = e.clientX;
    const y = e.clientY;
    const half = canvasWidth / 2;

    if (x > half && y <= fishBellHeight) {
        console.log('오른쪽');
        // fishBellWrap.classList.remove('on');
        // fishBellWrap.style.transform = 'translateX(-50%) rotateZ(-10deg)';
        // fishBellWrap.classList.add('on');
    } else if (x < half && y <= fishBellHeight) {
        console.log('왼쪽');
        // fishBellWrap.classList.remove('on');
        // fishBellWrap.style.transform = 'translateX(-50%) rotateZ(10deg)';
        // fishBellWrap.classList.add('on');
    } else {
        console.log('영역아님')
    }
    // console.log(x);
    console.log(fishBellHeight);
    console.log(x);
    console.log(y);
};