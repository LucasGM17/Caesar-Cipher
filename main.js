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
        while(cycle < 0) {
            cycle += 26;
        }
        transformatedArr.push(alphabet[cycle]); 
     }
 }
    let newWord = transformatedArr.join('');
    return newWord;
}

let checkRes = () => {
    if(str.value.length === 0 || shift.value.length === 0) {
        alert('Please fill out all the fields!');
    } else {
        res.innerHTML = `The result is: ${caesarCipher(str.value, Number(shift.value))}`;
    }
}

str.addEventListener('keypress', e => {
    if(e.key === 'Enter') {
        shift.focus();
    }
})

shift.addEventListener('keypress', e => {
    if(e.key === 'Enter') {
        checkRes();
    }
})

btn.addEventListener('click', checkRes);