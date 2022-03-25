//boilerplate user input code
const { exit } = require("process");
const readline = require("readline");
const { stripVTControlCharacters } = require("util");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to the password validator tool!');

reader.question('Please enter a password to validate:  ', function(answer) {
    let symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let answerArray = answer.split('');
    let containsNum = false;
    let containsSymbol = false;
    //check to see if the entry includes a number
    for (let i = 0; i < answerArray.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (answerArray[i] === numbers[j]) {
                containsNum = true;
            }
        }
    }
    //check to see if the entry includes a symbol
    for (let i = 0; i < answerArray.length; i++) {
        for (let j = 0; j < symbols.length; j++) {
            if (answerArray[i] === symbols[j]) {
                containsSymbol = true;
            }
        }
    }
    //determine if the password is valid
    if (answer.length < 10) {
            console.log('The password must contain at least 10 characters.');
    }   else if (containsNum === false) {
            console.log('The password must contain at least one number.');
    }   else if (containsSymbol === false) {
            console.log('The password must contain at least one symbol. i.e. (!, @, #, $, %, ^, &, *)');
    }   else console.log(`
                                                                      dddddddd     
VVVVVVVV           VVVVVVVV               lllllll   iiii              d::::::d  !!!
V::::::V           V::::::V               l:::::l  i::::i             d::::::d !!:!!
V::::::V           V::::::V               l:::::l   iiii              d::::::d !:::!
V::::::V           V::::::V               l:::::l                     d:::::d  !:::!
 V:::::V           V:::::V aaaaaaaaaaaa    l::::l iiiiiii     ddddddddd:::::d  !:::!
  V:::::V         V:::::V a::::::::::::a   l::::l i:::::i   dd::::::::::::::d  !:::!
   V:::::V       V:::::V  aaaaaaaaa:::::a  l::::l  i::::i  d::::::::::::::::d  !:::!
    V:::::V     V:::::V            a::::a  l::::l  i::::i d:::::::ddddd:::::d  !:::!
     V:::::V   V:::::V      aaaaaaa:::::a  l::::l  i::::i d::::::d    d:::::d  !:::!
      V:::::V V:::::V     aa::::::::::::a  l::::l  i::::i d:::::d     d:::::d  !:::!
       V:::::V:::::V     a::::aaaa::::::a  l::::l  i::::i d:::::d     d:::::d  !!:!!
        V:::::::::V     a::::a    a:::::a  l::::l  i::::i d:::::d     d:::::d   !!!
         V:::::::V      a::::a    a:::::a l::::::li::::::id::::::ddddd::::::dd   
          V:::::V       a:::::aaaa::::::a l::::::li::::::i d:::::::::::::::::d  !!!
           V:::V         a::::::::::aa:::al::::::li::::::i  d:::::::::ddd::::d !!:!!
            VVV           aaaaaaaaaa  aaaalllllllliiiiiiii   ddddddddd   ddddd  !!!               
`);
    reader.close();
});
