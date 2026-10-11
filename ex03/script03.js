let count=0;

function updateCount() {
    const display = document.getElementById("count");
    display.textContent = count;

    if(count > 0){
        display.style.color="green"
    }else if(count < 0){
        display.style.color="red"
    }else{
        display.style.color="black"
    }
}
document.getElementById("increment").addEventListener("click", increment);
function increment(){
    count++;
    updateCount();
}
document.getElementById("decrement").addEventListener("click", decrement);
function decrement(){
    count--;
    updateCount();
}
document.getElementById("reset").addEventListener("click", reset);
function reset(){
    count=0;
    updateCount();
}