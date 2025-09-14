const randomColor = () => {
    const r = Math.floor(Math.random() * 256); // 0-255
    const g = Math.floor(Math.random() * 256); // 0-255
    const b = Math.floor(Math.random() * 256); // 0-255
    return `rgb(${r}, ${g}, ${b})`;
}
let intervalID;
let isChanging = false;
addEventListener('keydown',function(event){

    if(event.code === 'Space' && !isChanging){
        intervalID = setInterval(() => {
            document.querySelector('body').style.backgroundColor = randomColor();
        }, 500);
        isChanging = true;
    } 
    else if(event.code === 'Space' && isChanging){
        clearInterval(intervalID);
        isChanging = false;
    }
})