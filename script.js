const canvas = document.querySelector('.canvas');
const canvasBackground = document.querySelector('.canvasBackground');

canvasBackground.addEventListener('click', cloudsHandler);

function weather(child) {
    // let childClass = child;
    console.log(child);
    if (child === 'rain.drop') {
        console.log('hi');
    }
}

function cloudsHandler(e) {
    let target = e.target;
    let targetParent = target.parentNode;
    let targetClass = target.classList.value;
    let parentClass = targetParent.classList.value;

    console.log(target);
    console.log(targetParent);
    console.log(parentClass);

    if (targetClass === 'clouds' || parentClass === 'clouds') {
        let clouds = target.parentNode;
        let rain = clouds.querySelector('.rain');
        let drop = clouds.querySelector('.drop');
        let lightning = clouds.querySelector('.lightning');

        if (rain) {
            console.log('비');
            drop && rain.classList.remove('drop');
            !drop && rain.classList.add('drop');
        } else if (lightning) {
            console.log('번개');
            drop && lightning.classList.remove('drop');
            !drop && lightning.classList.add('drop');
        }
    }
}