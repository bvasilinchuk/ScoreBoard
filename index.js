
//Score counting


let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
homeScore.innerHTML = 0
guestScore.innerHTML = 0
totalHomeScore = 0
totalGuestScore = 0


// Home functions
function onePointHome(){
    totalHomeScore++
    homeScore.innerHTML = totalHomeScore;
}

function twoPointHome(){
    totalHomeScore += 2
    homeScore.innerHTML = totalHomeScore;
}

function threePointHome(){
    totalHomeScore += 3
    homeScore.innerHTML = totalHomeScore;
}

// Guest functions
function onePointGuest(){
    totalGuestScore++
    guestScore.innerHTML = totalGuestScore;
}

function twoPointGuest(){
    totalGuestScore += 2
    guestScore.innerHTML = totalGuestScore;
}

function threePointGuest(){
    totalGuestScore += 3
    guestScore.innerHTML = totalGuestScore;
}















// Timer staff

let seconds = document.getElementById("seconds")
let miliSeconds = document.getElementById("miliseconds")
let secondsCounter = 0
let tCounter = 0
let interval;
function stop_stopwatch(){
    clearInterval(interval);
}

function reset_stopwatch(){
    secondsCounter = 0
    tCounter = 0
    miliSeconds.innerHTML = "00"
    seconds.innerHTML = "00"
    homeScore.innerHTML = 0
    guestScore.innerHTML = 0
    totalHomeScore = 0
    totalGuestScore = 0
}

function start_stopwatch(){
    clearInterval(interval);
    interval = setInterval(start_stopwatch, 10)
    tCounter++
    
    if(tCounter <= 9){
      miliSeconds.innerHTML = "0" + tCounter;
    }
    
    if (tCounter > 9){
      miliSeconds.innerHTML = tCounter;
      
    } 
    
    if (tCounter > 99) {
      secondsCounter++;
      seconds.innerHTML = "0" + secondsCounter;
      tCounter = 0;
      miliSeconds.innerHTML = "0" + 0;
    }
    
    if (secondsCounter > 9){
      seconds.innerHTML = secondsCounter;
    }
    
    function stop_stopwatch(){
        clearInterval(interval);
    }
  
}