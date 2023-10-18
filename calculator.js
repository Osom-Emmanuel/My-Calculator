let numbers = document.querySelectorAll('.button');
let screen = document.getElementById('upper-screen');
let screen2 = document.getElementById('lower-screen');
let Operators = document.querySelectorAll('.operator');
let startButtons = document.querySelectorAll('.operator');
let OffButton = document.querySelector('.off');
let onButton = document.querySelector('.on');
let Clear = document.getElementById('AC');
let Del = document.querySelectorAll('.DEL')
let result = document.querySelector('.result');
let newScreen = document.querySelector('.new-div');
let stringNum = '';
let funcNum = '';
let delNum = stringNum.slice(1);
let resultNum = '';
let clearNum = '';
let off = '';

numbers.forEach(button => {
    button.addEventListener('click', (e) => {
        stringNum += button.value;
        screen.innerHTML = stringNum;
        if (stringNum.length>10) {
            screen.innerHTML = 'Dear user, you have been limited from adding other numbers'
        }
        console.log(stringNum)
        
    })

});

Operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        funcNum += operator.value;

        screen.innerHTML = stringNum += funcNum; 
    
        console.log(funcNum)

        event.preventDefault();
       
    })
})

result.addEventListener('click', (e) => {
    let resultNum = sum(...stringNum)
    screen2.innerHTML = resultNum;

    event.preventDefault();
})
let sum = (...args) => {
        let resultNum = eval(stringNum);
        for (let arg of args) 
    return resultNum;
        }

        
Clear.addEventListener('click', (e) => {
    if (screen.innerHTML = stringNum) {
        clearNum = stringNum.slice(1);
        clearNum ++;
        screen.innerHTML = 0;
        screen2.innerHTML = clearNum
        event.preventDefault();
    }   
    })

Del.forEach(DEL => {
    DEL.addEventListener('click', (e) => {
    if (screen.innerHTML = stringNum) {
        delNum = stringNum.slice(1);    
        screen.innerHTML = delNum ;
    } else {  
        return  screen.innerHTML = delNum.slice(1);
    }
        // console.log()
        event.preventDefault();
    })
})

newScreen.style.visibility = 'visible'

OffButton.addEventListener('click', (e) => {
    newScreen.style.visibility = 'visible'
    console.log(newScreen)
   if (newScreen.style.visibility = 'visible') {
        
   }

  
})

onButton.addEventListener('click', (e) => {
    newScreen.style.visibility = 'hidden'
    console.log(newScreen)
})