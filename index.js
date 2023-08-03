const button = document.querySelector("button")

const getRandomColor = ()=> Math.floor(Math.random() * 0xffffff).toString(16);
const generateGradient = ()=>{
    const color1 = getRandomColor();
    const color2 = getRandomColor();

    document.body.style.background =`linear-gradient(to left top, #${color1}, #${color2})`;
}
generateGradient();

button.addEventListener('click', generateGradient);