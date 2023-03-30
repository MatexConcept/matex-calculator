const input = document.getElementById('inputBx')
// const output = document.getElementsByClassName('outputBx')
const buttons = document.querySelectorAll('button')

let result = ''
let array = Array.from(buttons);

array.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerText == '='){
            result = eval(result);
            input.value = result;
        }else if(e.target.innerText == 'AC'){
            result = '';
            input.value = result;
        }else if(e.target.innerText == 'DEL'){
            result = result.slice(0, result.length-1);
            input.value = result;
        }  else{
            result += e.target.innerText;
            input.value = result;
        } 
        
    })
})