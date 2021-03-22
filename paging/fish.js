const canvas = document.querySelector('.canvas');
const canvasWidth = canvas.offsetWidth;
const fishBellWrap = document.querySelector('.fishBellWrap');
const fishBellWrapOn = document.querySelector('.fishBellWrap.on .fishBell');
const fishBellWrapOnTwo = document.querySelector('.fishBellWrap.onTwo .fishBell');
const fishBell = document.querySelector('.fishBell');
const fishBellWidth = fishBell.offsetWidth;
const fishBellHeight = fishBell.offsetHeight;
// let degFirst;

canvas.addEventListener('click', bellHandler);

function switchLeft(x, bell) {
    let half = canvasWidth / 2;

    if (x > half) {
        if (bell.style.animationName === "waveTwo") {
            bell.style.animationName = `wave`;
        } else {
            bell.style.animationName = `waveTwo`;
        }
        console.log('오른쪽');

        bell.style.transform = `rotateY(50deg)`
    } else if (x < half) {
        if (bell.style.animationName === "waveLeftTwo") {
            bell.style.animationName = `waveLeft`;
        } else {
            bell.style.animationName = `waveLeftTwo`;
        }
        console.log('왼쪽');
        bell.style.transform = `rotateY(-50deg)`;
    }
};

function bellHandler(e) {
    let target = e.target;
    let x = e.clientX;
    let targetParent = target.parentNode;
    let targetClass = targetParent.classList.value;

    if (target === fishBell && targetClass === "fishBellWrap on") {
        fishBellWrap.classList.remove('on');
        fishBellWrap.classList.add('onTwo');
        switchLeft(x, target);
    } else if (target === fishBell && targetClass === "fishBellWrap onTwo") {
        fishBellWrap.classList.remove('onTwo');
        fishBellWrap.classList.add('on');
        switchLeft(x, target);
    }
};

// canvas.addEventListener('mousedown', mouseHandler);
// canvas.addEventListener('click', mouseHandler);
// function numberChange(num) {
//     if (num === 7) {
//         num = 0;
//         degFirst = num;
//     } else if (num === 6) {
//         num = 1;
//         degFirst = num;
//     } else if (num === 5) {
//         num = 2;
//         degFirst = num;
//     } else if (num === 4) {
//         num = 3;
//         degFirst = num;
//     } else if (num === 3) {
//         num = 4;
//         degFirst = num;
//     } else if (num === 2) {
//         num = 5;
//         degFirst = num;
//     } else if (num === 1) {
//         num = 6;
//         degFirst = num;
//     } else if (num === 0) {
//         num = 7;
//         degFirst = num;
//     }
// }

// function mouseHandler(e) {
//     let x = e.clientX;
//     let y = e.clientY;
//     let half = canvasWidth / 2;
//     let yNumber = y / 70;
//     let degNumber = yNumber.toFixed(1);
//     let degFirstNumber = Math.floor(yNumber);
//     let degLastNumber = degNumber.substr(2, 2);
//     let degLast = parseInt(degLastNumber);

//     if (x > half && y <= fishBellHeight) {
//         console.log('오른쪽');
//         // console.log(degFirstNumber);
//         numberChange(degFirstNumber);
//         // fishBellWrap.classList.remove('on');
//         fishBellWrap.classList.add('on');
//         fishBellWrap.style.transform = `rotateZ(-${degFirst}${degLast}deg)`;
//     } else if (x < half && y <= fishBellHeight) {
//         console.log('왼쪽');
//         // fishBellWrap.classList.remove('on');
//         numberChange(degFirstNumber);
//         fishBellWrap.style.transform = `rotateZ(${degFirst}${degLast}deg)`;
//         // fishBellWrap.classList.add('on');
//     } else {
//         console.log('영역아님')
//     }

//     console.log(yNumber);
//     console.log(degFirstNumber);
//     console.log(degLastNumber);
//     console.log(degLast);
// };

// function returnHandler(e) {
//     console.log('click')
//     //transform: var(--topPx);
//     // let y = e.clientY
//     // let x = e.clientX
//     // mouse.style.transform = `translate(${x}px,${y}px)`
//     // mouse.innerHTML = `${x}px, ${y}px`

//     // mouseLine.setProperty('--topPx', `translateY(${y}px)`)
//     // mouseLine.setProperty('--bottomPx', `translateX(${x}px)`)
// }