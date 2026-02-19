function encrypt(){
    const input = document.getElementsByTagName("input")[0].value;
    let shift = document.getElementsByTagName("input")[1].value;
    const result = document.getElementById("result_text");
    if(shift === ""){
        result.textContent = "You must enter a number";
        return;
    }
    shift = Number(shift);
    if(!Number.isInteger(shift)){
        result.textContent = "Shift number must be an integer";
        return;
    }
    if(shift < 0){
        result.textContent = "Number must not be negative";
        return;
    }
    if(shift > 26){
        result.textContent = "Number must not be greater than 26";
    }
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
    if(shift === ""){
        result.textContent = "You must enter a number";
        return;
    }
    shift = Number(shift);
    if(!Number.isInteger(shift)){
        result.textContent = "Shift number must be an integer";
        return;
    }
    if(shift < 0){
        result.textContent = "Number must not be negative";
        return;
    }
    if(shift > 26){
        result.textContent = "Number must not be greater than 26";
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