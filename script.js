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
    let targetClass = target.classList.value;
    // console.log(target);
    // console.log(targetClass);
    if (targetClass === 'clouds') {
        let child = target.children;

        target.classList.add('drop');
        console.log(child);
        // weather(child)
    }
}