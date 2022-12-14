var msec = 0 ,sec = 0,min = 0,hr = 0;
var chrono = document.getElementById("chrono");

function millisec(){
    msec = msec+1;
    if(msec == 100){
        msec = 0;
        secondcount();
    }
    chrono.innerHTML = hr.toString().padStart(2,'0')+":"+min.toString().padStart(2,'0')+":"+ sec.toString().padStart(2,'0') + ":" + msec.toString().padStart(2,'0');
}
function secondcount(){
    sec = sec+1;
    if(sec == 60){
        sec = 0;
        minutecount();
    }/* 
    chrono.innerHTML = hr.toString().padStart(2,'0')+":"+min.toString().padStart(2,'0')+":"+ sec.toString().padStart(2,'0'); */
   
    /*  console.log(sec); */
}
function minutecount(){
    min++;
    if(min == 60){
        min = 0;
        hourcount();
    }
    /* console.log("minutes =" +min); */
}
function hourcount(){
    hr++;
    /* console.log("hour = "+ hr); */
}

let chronostart = document.getElementById("start");
chronostart.addEventListener("click",function(){go('go');});
let chronostop = document.getElementById("stop");
chronostop.addEventListener("click",function(){go('stop');});
let chronoreset = document.getElementById("reset");
chronoreset.addEventListener("click",function(){go('reset');});
let chronotour = document.getElementById("tour");
chronotour.addEventListener("click",function(){go('tour');});

var myinterval;
var didtimestart = false;

function go(p){
    if (p == 'go' && !didtimestart){      
    myinterval = setInterval(millisec,10);
    console.log('clicked start ');
    didtimestart = true;
    }
    else if (p == 'stop' && didtimestart){
    console.log('clicked stop');
    clearInterval(myinterval);
    didtimestart = false;
    }
    else if (p =='reset'){
    sec = 0;
    min = 0;
    hr = 0;
    n = 0;
    msec = 0
    chrono.innerHTML = hr.toString().padStart(2,'0')+":"+min.toString().padStart(2,'0')+":"+ sec.toString().padStart(2,'0') + ":" + msec.toString().padStart(2,'0');
    const resetTour = document.getElementsByClassName("ptour");
    Array.from(resetTour).forEach(element => {
        element.remove();
    });
    console.log('reset');
    }
    else if (p =='tour'){
    console.log('tour');
    lestours();
    }
}
var n = 0;
function lestours(){
    n++;
    let lesTours = "Tour "+n +" : "+ hr.toString().padStart(2,'0')+":"+min.toString().padStart(2,'0')+":"+ sec.toString().padStart(2,'0')+ ":" + msec.toString().padStart(2,'0');
    let lestours = document.getElementById("lestours");
    const newTour = document.createElement("p");
    newTour.classList.add('ptour');
    const contenuTour = document.createTextNode(lesTours);
    newTour.appendChild(contenuTour);
    lestours.appendChild(newTour);
}
/* window.onload = setInterval(secondcount,1000); */