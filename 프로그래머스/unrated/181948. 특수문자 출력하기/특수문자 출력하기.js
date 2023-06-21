// 특수문자를 출력할 때 어떻게 해야하는가? 에 대한 깊은 고찰

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log(`!@#$%^&*(\\'"<>?:;`);
});