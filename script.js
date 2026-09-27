let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"]
let levelDis = document.querySelector("h3");

let started = false;
let level = 0;

document.addEventListener("keypress", function() {
    if(started == false)
    {
        console.log("game started");
        started = true;
        levelup();
    }

});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 500);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 500);
}

function levelup() {
    userSeq = [];
    level++;
    levelDis.innerText = `Level ${level}`;

    let randomInd = Math.floor(Math.random()* 4);
    let randcolor = btns[randomInd];
    let randBtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

let Allbtns = document.querySelectorAll(".btn");

for(bt of Allbtns)
{
    bt.addEventListener("click", function() {
        btnPress(this);
    });
}

function checkAns(idx) {
    if(gameSeq[idx] === userSeq[idx])
    {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        } 
    } else {
        levelDis.innerText = `Game Over! Your Score is : ${level} \n Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 400);
        reset();
    }
}

function btnPress(btn) {
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length - 1);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}