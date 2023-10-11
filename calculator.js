let numbers = document.querySelectorAll('.button');
let screen = document.getElementById('h3');
let Operators = document.querySelectorAll('.operator');
let Clear = document.getElementById('AC')
let Answer = document.querySelector('submit')
let StringNum = '';
let FuncNum = '';
let ClearNum = 0;


numbers.forEach(button => {
    button.addEventListener('click', (e) => {
        StringNum += button.value;
        screen.innerHTML = StringNum,Clear;
       
    
        console.log(StringNum)

        event.preventDefault();
       
    })

});

Operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        FuncNum += operator.value;
        screen.innerHTML = FuncNum,Clear;
       
    
        console.log(FuncNum)

        event.preventDefault();
       
    })
})

Clear.addEventListener('click', (e) => {
    ClearNum = 0;
    screen.innerHTML = ClearNum;
        console.log(ClearNum)   
   
})

