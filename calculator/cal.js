let display = document.getElementById('display');

let button = Array.from(document.getElementsByClassName('button'));

button.map(btn =>{
    btn.addEventListener('click',(e) =>{
        // console.log('clicked');
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);

        switch(e.target.innerText)
        {   
            case 'C':
                display.innerText='';
                break;
            case '←':
                display.innerText = display.innerText.slice(0,-1);
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch{
                    display.innerText='Error..!';
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
});