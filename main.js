let min = 0
let sec = 0
let miliSec = 0
let timer;

function timerCall(){
    miliSec++
    if(miliSec < 100){
        if(miliSec ===99){
            miliSec = 0
            sec ++
            if(sec ===60){
                sec = 0
                min ++
            }
        }
    }else{
        miliSec=0

    }document.getElementById("timer").innerHTML = min +":"+sec+":"+miliSec
}

function startTimer(){
    document.getElementById("start").disabled= true
    timer = setInterval(timerCall,10)
}

