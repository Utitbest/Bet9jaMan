let time = document.querySelector('.time_me');
let pan = document.querySelector('.time_condition');
let screen1 = document.querySelector('.kycy');
let bttn = document.querySelectorAll('.jamz')


function countdown(duration){
    let timer = duration;

    setInterval(function(){

        let minute = Math.floor(timer / 60);
        let seconds = timer % 60;

        minute = minute < 10 ? '0' + minute: minute;
        seconds = seconds < 10 ? '0' + seconds: seconds;

        time.innerHTML = minute+':'+ seconds;
        // pan.innerHTML = minute+':'+ seconds;

        if(--timer < 0){
            timer = duration;
        };
        if(timer <= 20){
            time.style.setProperty('color', 'red');
        }else{
            time.style.setProperty('color', 'rgb(194, 117, 0)')
        }
        
    }, 1000);

}countdown(300);

let m = 0;
for(;m < bttn.length; m++){
    bttn[m].addEventListener('click', function(){
    let val = this.innerHTML;
    screen1.innerHTML += val;
    screen1.style.setProperty('background', 'blue')
    });
}

function Utitbest(){
    console.log('Darling jesus!!!')
}