// const timeHammer = function () { alert("HAMMERTIME"); }
// // window.setTimeout(timeHammer, 5000);

// const timeHammer2 = function (time) { alert(`${time} is hammertime!`); }

// const hammerTime = function(time) {
//     window.setTimeout(timeHammer2.bind(this, time), time);
// }


const readline = require('readline'); 
const reader = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 
function teaAndBiscuits() { 
    reader.question('Would you like some tea?', function (res) { 
        console.log(`You replied ${res}.`); 
        reader.question('Would you like some biscuits?', function (res2) { 
            console.log(`You replied ${res2}.`); 
            const first = (res === 'yes') ? 'do' : 'don\'t'; 
            const second = (res2 === 'yes') ? 'do' : 'don\'t'; 
            console.log(`So you ${first} want tea and you ${second} want biscuits.`); 
            reader.close(); 
        }); 
    }); 
}
teaAndBiscuits();
