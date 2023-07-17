const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let result = '';

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    [...str].forEach(x => {
        if (x == x.toUpperCase()) result += x.toLowerCase();
        else if ( x == x.toLowerCase()) result += x.toUpperCase();
    });
    
    console.log(result);
});