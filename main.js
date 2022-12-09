const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const timer = document.getElementById('timerTime');
const editdiv = document.getElementById('editdiv');

let result; 
let text;
let reg = /\d+/g;
let a1,a2,a3,a4,a5,a6;
let startingtimer;
let myInterval;
let originalTime;
editdiv.onclick = () => {
    clearInterval(myInterval);
    startBtn.textContent = 'START';
    editdiv.contentEditable = 'true';
    editdiv.textContent = '';
    editdiv.style.opacity = '0.5';
    editdiv.textContent = 's';
};

editdiv.onkeyup = (e) => {
    if(isNaN(e.key)){
        editdiv.textContent ="s";
    }else{
        if(editdiv.textContent.length == 3){
            editdiv.textContent +='m';
        }else if (editdiv.textContent.length == 6){
            editdiv.textContent +='h';
        }
        if(editdiv.textContent.length > 8){
            text = editdiv.textContent;
            editdiv.contentEditable = 'false';
            result = text.match(reg);   
            result2 = result.toString();
            result2.split("");
            a1 = result2[0];
            a2 = result2[1];
            a3 = result2[2];
            a4 = result2[3];
            a5 = result2[4];
            a6 = result2[5];
            editdiv.innerText = `s${a1}${a2} m${a3}${a4} h${a5}${a6}`;
            originalTime = [a1,a2,a3,a4,a5,a6];
        }
    }   
};

editdiv.onblur =() => { 
    editdiv.style.opacity = '1';
};

startBtn.onclick = () => {
    if(startBtn.textContent == 'START'){
        startBtn.textContent = 'STOP';
        startingtimer = editdiv.innerText;
        let x1 = startingtimer[1];
        let x2 = startingtimer[2];
        let x3 = startingtimer[5];
        let x4 = startingtimer[6];
        let x5 = startingtimer[9];
        let x6 = startingtimer[10];
        let iterations = 0;
        const myTimer = (e) => {
            if(x2 > 0) {
                editdiv.innerText = `s${x1}${x2 - 1} m${x3}${x4} h${x5}${x6}`;
                x2--;
            }else if(x1> 0 && x2 ==0 ){
                editdiv.innerText = `s${x1 - 1}${9} m${x3}${x4} h${x5}${x6}`;
                x1--, x2 = 9;
            }else if(x4 > 0 && x1 == 0 && x2 == 0){
                editdiv.innerText = `s${9}${9} m${x3}${x4 - 1} h${x5}${x6}`;
                x4--;
                x1 = 9;
                x2 = 9;
            }else if(x3 > 0 && x1 == 0 && x2 == 0 && x4 == 0){  
                editdiv.innerText = `s${x1}${x2} m${x3 - 1}${9} h${x5}${x6}`;
                x3--;
                x4 = 9;
            }else if(x6 > 0 && x1 == 0 && x2 == 0 && x4 == 0 && x3 == 0){
                editdiv.innerText = `s${x1}${x2} m${9}${9} h${x5}${x6 - 1}`;
                x6--;
                x3 = 9;
                x4 = 9;
            }else if(x5 > 0 && x1 == 0 && x2 == 0 && x4 == 0 && x3 == 0 && x6 == 0){
                editdiv.innerText = `s${x1}${x2} m${x3}${x4} h${x5 -1}${9}`;
                x5--;
                x6 = 9;
            }
        };
        myInterval = setInterval(myTimer, 1000);
        iterations += 1000;
        if(x1 === 0 && x2 === 0 && x3 === 0 && x4 === 0 && x5 === 0 && x6 === 0){
            clearInterval(myInterval);
        }
    }
    else if (startBtn.textContent == 'STOP'){
        startBtn.textContent = 'START'; 
        clearInterval(myInterval);
    }
};

resetBtn.onclick = () => {
    clearInterval(myInterval);
    startBtn.textContent = 'START';
    editdiv.innerText = `s${originalTime[0]}${originalTime[1]} m${originalTime[2]}${originalTime[3]} h${originalTime[4]}${originalTime[5]}`;
};


