let numbers = document.querySelectorAll('.button');
let screen = document.getElementById('upper-screen');
let screen2 = document.getElementById('lower-screen');
let Operators = document.querySelectorAll('.operator');
let startButtons = document.querySelectorAll('.operator');
let OffButton = document.querySelector('.off');
let onButton = document.querySelector('.on');
let Clear = document.getElementById('AC');
let Del = document.querySelector('.DEL');
let result = document.querySelector('.result');
let newScreen = document.querySelector('.new-div');
let stringNum = '';
let secondString = '';
let display = "";
let check = false;
let funcNum = '';
let thirdString = '';
let otherString = '';
let answerPicked = '';
let resultNum = 0;
let clearNum = "";
let On = "";


numbers.forEach(button => {
    button.addEventListener('click', (e) => {
        if(!check){
            console.log(check)
            stringNum += button.value;
            screen2.innerHTML = stringNum;
            if (stringNum.length>10) {
                screen2.innerHTML = 'Dear user, you have been limited from adding other numbers'
            }
        } else {
            console.log(check)
            secondString += button.value;
            screen2.innerHTML = secondString;
            display += button.value
            screen.innerHTML = display
            if (secondString.length>10) {
                screen.innerHTML = 'Dear user, you have been limited from adding other numbers'
                secondString++
            } 
        }
        e.preventDefault();
    })
})

Operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
            funcNum = operator.value;
            check = true; 
            display = stringNum
            display += funcNum
            screen.innerHTML = display
            screen2.innerText = ''
        e.preventDefault();
       
           
    })
})

result.addEventListener('click', (e) => {
    if(funcNum === '+'){
        resultNum = Number(stringNum) + Number(secondString);
        check = false;
        display = '';
        screen2.innerHTML = resultNum;
        return
    }else if(funcNum === '-'){
        resultNum = Number(stringNum) - Number(secondString) ;
        check = false;
        screen2.innerHTML = resultNum;
    }else if(funcNum === '*'){
        resultNum = Number(stringNum) * Number(secondString) ;
        check = false;
        screen2.innerHTML = resultNum;
    }else if(funcNum === '/'){
        resultNum = Number(stringNum) / Number(secondString) ;
        check = false;
        screen2.innerHTML = resultNum;
    }else if(funcNum === '%'){
        resultNum = Number(stringNum) % Number(secondString) ;
        check = false;
        screen2.innerHTML = resultNum;
    }
    
         
        e.preventDefault();
            
})
        
      
       
    Clear.addEventListener('click', (e) => {
            stringNum = "";
            funcNum = "";
            screen.innerHTML = "";
            screen2.innerHTML = "";
            display = "";
            secondString = "";
            
            e.preventDefault();
            return screen2.innerHTML = 0;
            
        })


Del.addEventListener('click', (e) => {
    if (!check) {
      stringNum = stringNum.slice(0, -1);
    } else {
        secondString = secondString.slice(0, -1);
        display = display.slice(0, -1);
    }
    screen2.innerHTML = screen2.innerHTML.slice(0, -1)
    screen.innerHTML = screen.innerHTML.slice(0, -1)
    
    console.log(Del)
})


newScreen.style.visibility = 'visible'

OffButton.addEventListener('click', (e) => {
    newScreen.style.visibility = 'visible'  
    newScreen.innerHTML,screen.innerHTML = "";
    console.log(OffButton)
    e.preventDefault();
})

onButton.addEventListener('click', (e) => {
   if( newScreen.style.visibility = 'hidden') {
       stringNum = "";
       funcNum = "";
       screen.innerHTML = "";
       screen2.innerHTML = "";
       display = "";
       secondString = "";
       return screen2.innerHTML = 0;
    }
    console.log(onButton)
    e.preventDefault()
})