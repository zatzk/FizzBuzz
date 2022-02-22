function calcFizzBuzz(valor) {
    let returnVal = '';
    for(let i = 1; i <= valor; i++){
        
        if(i%3 === 0 && i%5 === 0){
            returnVal += 'FizzBuzz ';
        }
        else if(i%3 === 0){
            returnVal += 'Fizz ';
        }
        else if(i%5 === 0){
            returnVal += 'Buzz ';
        }
        else{
            
            returnVal += i + ' ';
        }
    }
    return returnVal;
}

function takeValue(){
    let output='';
    let val = document.getElementById('fizzbuzzID').value;

    output = calcFizzBuzz(val);
    document.getElementById('results').innerHTML = output;
}