const canvas = document.querySelector('.canvas');
const canvasBackground = document.querySelector('.canvasBackground');
const twinkleWrap = document.querySelector('.twinkleWrap');

canvasBackground.addEventListener('click', cloudsHandler);
canvas.addEventListener('click', viewHandler);

function cloudsHandler(e) {
    let target = e.target;
    let targetParent = target.parentNode;
    let targetClass = target.classList.value;
    let parentClass = targetParent.classList.value;

    if (targetClass === 'clouds' || parentClass === 'clouds') {
        let clouds = target.parentNode;
        let rain = clouds.querySelector('.rain');
        let drop = clouds.querySelector('.drop');
        let lightning = clouds.querySelector('.lightning');

        if (rain) {
            drop && rain.classList.remove('drop');
            !drop && rain.classList.add('drop');
        } else if (lightning) {
            drop && lightning.classList.remove('drop');
            !drop && lightning.classList.add('drop');
        }
    }
}

function viewHandler(e) {
    let target = e.target;
    let targetClass = target.classList.value;
    let x = e.clientX;
    let y = e.clientY;
    let width = canvas.offsetWidth;
    let widthHalf = width / 2;
    let widthLeft = widthHalf - 1;
    let perspectiveX = 190;
    let perspectiveY = 250;
    let canvasPerspective = width / perspectiveX;
    let divisionNumber = canvasPerspective.toFixed(1);
    let position = x / canvasPerspective;
    // let y = e.clientY;
    // console.log(target);
    // console.log(x);
    // console.log(y);
    // console.log(width);
    // console.log(canvasPerspective);
    // console.log(divisionNumber);

    if (x > widthHalf) {
        // let xNumber = position - 95;
        let xNumber = position;
        console.log('오른쪽');
        console.log(xNumber);
        //141 ~ 280
        twinkleWrap.style.perspectiveOrigin = `${xNumber}% 10%`;
    } else if (x < widthLeft) {
        console.log('왼쪽');
        // let xNumber = position + 95;
        // console.log(xNumber);
        twinkleWrap.style.perspectiveOrigin = `${position}% 10%`;
        //0 ~ 139
    } else if (widthHalf) {
        console.log('가운데');
        //140
        twinkleWrap.style.perspectiveOrigin = `${position}% 10%`;
    }

    // if (targetClass === 'canvasBackground') {
    //     // console.log('hi');
    //     // if (x > widthHalf) {
    //     //     console.log(오른쪽);
    //     // }
    //     twinkleWrap.style.perspectiveOrigin = `${x}%${y}%`;
    // }
}

