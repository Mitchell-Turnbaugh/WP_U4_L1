function validate(shift,result){
    if(shift === ""){
        result.textContent = "You must enter a number";
        result.style.color = "red";
        return false;
    }
    shift = Number(shift);
    if(!Number.isInteger(shift)){
        result.textContent = "Shift number must be an integer";
        result.style.color = "red";
        return false;
    }
    if(shift < 0){
        result.textContent = "Number must not be negative";
        result.style.color = "red";
        return false;
    }
    if(shift > 26){
        result.textContent = "Number must not be greater than 26";
        result.style.color = "red";
        return false;
    }
    return true;
}
function encrypt(){
    const input = document.getElementsByTagName("input")[0].value;
    let shift = document.getElementsByTagName("input")[1].value;
    const result = document.getElementById("result_text");
    if(!validate(shift,result)){
        return;
    }
    shift = Number(shift);
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newString = "";
    for(i of input){
        const lowerCase = i == i.toLowerCase();
        if(alphabet.includes(i.toLowerCase())){
            const index = (alphabet.indexOf(i.toLowerCase()) + shift) % 26;
            if(lowerCase){
                newString += alphabet[index];
            }else{
                newString += alphabet[index].toUpperCase();
            }
        }else{
            newString += i;
        }
    }
    result.textContent = newString;
}
function decrypt(){
    const input = document.getElementsByTagName("input")[0].value;
    let shift = document.getElementsByTagName("input")[1].value;
    const result = document.getElementById("result_text");
    if(!validate(shift,result)){
        return;
    }
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newString = "";
    for(i of input){
        const lowerCase = i == i.toLowerCase();
        if(alphabet.includes(i.toLowerCase())){
            const index = (alphabet.indexOf(i.toLowerCase()) - shift) % 26;
            if(index >= 0){
                if(lowerCase){
                    newString += alphabet[index];
                }else{
                    newString += alphabet[index].toUpperCase();
                }
            }else{
                if(lowerCase){
                    newString += alphabet[26 + index];
                }else{
                    newString += alphabet[26 + index].toUpperCase();
                }
            }
        }else{
            newString += i;
        }
    }
    result.textContent = newString;
}
function clearResult(){
    const result = document.getElementById("result_text");
    const input = document.getElementsByTagName("input")[0];
    const shift = document.getElementsByTagName("input")[1];
    result.textContent = "";
    input.value = "";
    shift.value = "";
}