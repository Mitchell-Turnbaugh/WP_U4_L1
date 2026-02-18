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
        if(alphabet.includes(i)){
            newString += alphabet[(alphabet.indexOf(i) + shift) % 26];
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
            console.log((alphabet.indexOf(i) - shift) % 26)
            newString += alphabet[(alphabet.indexOf(i) - shift) % 26];
        }else{
            newString += i;
        }
    }
    result.textContent = newString;
}