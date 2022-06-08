let str = document.getElementById('txt');
let shift = document.getElementById('shift');
const btn = document.getElementById('btn');
let res = document.getElementById('res');
function caesarCipher(s, k) {
    let transformatedArr = [];
    const alphabet = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
 let word = s.split('');
 for(i in word) {
     let place = alphabet.indexOf(word[i]);
     if(place === -1) {
        transformatedArr.push(word[i]);
     } else {
        let cycle = place+k;
        while(cycle > 25) {
            cycle -= 26;
        }
        transformatedArr.push(alphabet[cycle]); 
     }
 }
    let newWord = transformatedArr.join('');
    return newWord;
}

btn.addEventListener('click', () => {
    if(str.value.length === 0 || shift.value.length === 0) {
        alert('Please fill in all the fields!');
    } else {
        res.innerHTML = `The result is: ${caesarCipher(str.value, Number(shift.value))}`;
    }
});