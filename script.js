function getHistory(){
    return document.getElementById('history-value').innerText;
}
function printHistory(num){
    document.getElementById('history-value').innerText = num;
}
function getOutput(){
    return document.getElementById('output-value').innerText;
}
function printOutput(num){
    if(num == ""){
        document.getElementById("output-value").innerText = num;
    }else{
        document.getElementById('output-value').innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    if (num == "-") {
        return "";
    }
    let n = Number(num); // code 1
    let value = n.toLocaleString('en');
    return value;
}

function reverserNumberFormate(num){
    return Number(num.replace(/,/g,'')); // 02
}
let operator = document.getElementsByClassName("operator");
for(let i =0;i<operator.length;i++){
     operator[i].addEventListener('click',function(){
         if(this.id == "clear"){
             printHistory("");
             printOutput("");
         }else if(this.id =='backspace'){
            let output = reverserNumberFormate(getOutput()).toString();
            if (output) {
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
         }else{
             let output = getOutput();
             let history = getHistory();
             if(output=="" && history !=""){
                 if (isNaN(history[history.length-1])) {
                     history = history.substr(0,history.length-1);
                 }
             }
             if(output != "" || history!=""){
                output = output==""? output:reverserNumberFormate(output);
                history = history + output; // 8+9+6
                if(this.id == "="){
                    let result = eval(history);
                    printOutput(result);
                    printHistory("");
                }else{
                    history = history+this.id;
                    printHistory(history);
                    printOutput("")
                }
             }
         }
    });
}

let number =document.getElementsByClassName('number');
for(let i = 0; i<number.length; i++){
    number[i].addEventListener('click',function(){
        let output = reverserNumberFormate(getOutput());
        if(output!=NaN){
            output = output+this.id;
            printOutput(output);
        }
    });
}

// code 1
/*
    jehatu num akti string .. tai ak age number a convert korte hobe.
    string a thakle 8,000 amon formate pabo nah
    console.log(typeof(n));
*/

// # 02 
/*
    415,465,454 ai type ar number k 415565454 a ante hole 
     Number(num.replace(/,/g,'')); ati babohar korta hoi
*/