const scre = document.getElementsByClassName("screen")[0];
const click = document.getElementsByClassName("Clicks");
const answer = document.getElementById("answer");
let calc = document.getElementById("calc");
let aff = '';
document.addEventListener("click",function(event){
    if (!(event.target.className == "Clicks")) return;
    event.preventDefault();
    if(event.target.dataset.vl === "AC"){
        // event.preventDefault();
        aff = "";
        calc.innerHTML = '';
        answer.innerHTML = ''
        calc.style.bottom= "1rem";
        calc.style.fontSize = "40px";
        answer.style.transform = "translateX(70px)";
    }else if (event.target.dataset.vl === "DEL"){
        // event.preventDefault();
        aff.pop();
        scre.innerHTML = aff.join(" ");
    }else if (event.target.dataset.vl === "="){
        if (!aff.length) return;
        event.preventDefault();
        calc.innerHTML += " =";
        calc.style.bottom= "5rem";
        calc.style.fontSize = "2rem";

        answer.innerHTML = calculate(aff);
        answer.style.transform = "translateX(0)";

        rld();
    }else{
        if (["/","*","-","+"].includes(event.target.dataset.vl)){
            aff += ` ${event.target.dataset.vl} ` 
        }else{
            aff += event.target.dataset.vl 
        }
        calc.innerHTML = aff
    }
    
});

function calculate(ar){
    ar = ar.split(" ")
    let calclute = +ar[0];


    for(let i = 1; i < ar.length - 1; i++){
        switch (ar[i]){
            case "*":
                calclute *= +ar[i + 1]
                break;
            case "/":
                calclute /= +ar[i + 1]
                break;
            case "+":
                calclute += +ar[i + 1]
                break;
            case "-":
                calclute -= +ar[i + 1]
                break;
        }
    }
    return calclute;
}

function clickHandler(e) {
    calc.innerHTML = '';
    answer.innerHTML = '';
    calc.style.bottom= "1rem";
    calc.style.fontSize = "40px";
    answer.style.transform = "translateX(70px)";
    if (["/","*","-","+","="].includes(e.target.dataset.vl)) document.removeEventListener("click", clickHandler);
    aff = e.target.dataset.vl;
    calc.innerHTML = aff;
    
    // Remove the event listener after it's triggered once
    document.removeEventListener("click", clickHandler);
}

function rld() {
    // Add the event listener
    document.addEventListener("click", clickHandler);
    return;
}
