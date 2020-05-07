//Create an HTML page with traffic lights and a button that switches the color to the next one.

document.getElementsByClassName('button').onclick = changeColor;
let firstLight = document.getElementById('first-light'); 
let secondLight = document.getElementById('second-light'); 
let thirdLight = document.getElementById('third-light'); 
    function changeColor(){
        if (firstLight.classList.contains('on')){
            firstLight.classList.remove('on'); 
            secondLight.classList.add('on');
        } else if (secondLight.classList.contains('on')){
            secondLight.classList.remove('on'); 
            thirdLight.classList.add('on');
        } else if (thirdLight.classList.contains('on')){
            thirdLight.classList.remove('on'); 
            firstLight.classList.add('on');
        }
    } 


