function encrypt(){
    const input = document.getElementsByTagName("input")[0].value;
    const shift = Number(document.getElementsByTagName("input")[1].value);
    const result = document.getElementById("result_text");
    if(!Number.isInteger(shift)){
        result.textContent = "Shift number must be an integer";
        return;
    }
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newString = "";
    for(i of input){
        const lowerCase = i == i.toLowerCase();
        if(alphabet.includes(i)){
            const index = (alphabet.indexOf(i) + shift) % 26;
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
    const shift = Number(document.getElementsByTagName("input")[1].value);
    const result = document.getElementById("result_text");
    if(!Number.isInteger(shift)){
        result.textContent = "Shift number must be an integer";
        return;
    }
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newString = "";
    for(i of input){
        if(alphabet.includes(i)){
            const index = (alphabet.indexOf(i) - shift) % 26;
            console.log(index);
            if(index >= 0){
                newString += alphabet[index];
            }else{
                newString += alphabet[26 + index];
            }
        }else{
            newString += i;
        }
    }
    result.textContent = newString;
}
function clearResult(){
    const result = document.getElementById("result_text");
    result.textContent = "";
}