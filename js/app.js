const textLoad = document.querySelector('.text-loading');
const background = document.querySelector('.bg');

let load = 0;

const blurring = () => {
    load++;

    if (load === 100) {
        clearInterval(int);
    }

    textLoad.textContent = `${load}%`;
    textLoad.style.opacity = scale (load, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(load, 0, 100, 20, 0 )}px)`;
}

let int = setInterval(blurring, 30);

// Mapping a range of numbers to another range of numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
    return(num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}