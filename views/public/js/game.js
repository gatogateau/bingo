// import { callbackify } from "util";
// import { EALREADY } from "constants";

// submit button to find moderator page
var shuffle = require ('shuffle-array');

function openModPage (){
    var x = document.getElementById("form1").elements[0].value;
    var y = document.getElementById("pageOpen");
    console.log("this is the text " + x);
    console.log(document.form1);
    var z = "password";
    if (x == "password") {
        y.style.display = "inline-block";
        console.log ('option1');
    } else {
        y.style.display = "none";
        console.log ("option2");
    }
};



// set values for bingo
var bingoFillerArray= [

"peer to peer recognition",
"after hours trading",
"branch call",
"RRES 81 82 91",
"customer mentions weather" ,
"but... what if" ,
"That was easy, rep or Customer",
"trading lead",
"what is a trailing stop?",
"promote strategy desk",
"update Benes",
"unauthorized account",
"I have a quick/easy question",
"code for penny stocks",
"code for after hours trading",
"daily IE over 80%",
">6.24 cph for the day",
"show feature in ATP",
"CEI 7 survey",
"use the customer's name",
"political comment from customer",
"bvol",
"I want free trades",
"explain settlement",
"roll option",
"pin reset",
"guidance lead",
"explain wash sale",
"fixed income transfer",
"ISR express transfer",
"send an e-kit",
"customer tells weekend plans"
];

console.log (bingoFillerArray.length);


var bingoGameArray= [
    "aa","ab","ac","ad","ae","af","ag","ah","ai","aj","ak","al","am","an","ao","ap","aq","ar","as","at","au","av","aw","ax","ay","az","ba","bb","bc","be","bf","bg"
];
console.log (bingoGameArray.length);

shuffle(bingoFillerArray);
console.log (bingoFillerArray);