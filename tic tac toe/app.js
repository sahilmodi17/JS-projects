let cells =['','','','','','','','',''];
let currentPlayer = 'X';

let result=document.querySelector('.result');
let btns=document.querySelectorAll('.btn');

let conditions=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

const tic = (e1,i) =>{
    e1.innerHTML=currentPlayer;
    e1.disable=true;
    cells[i]=currentPlayer;

    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X' ;

    result.innerText=`Player ${currentPlayer} Turn`;
    
    console.log(currentPlayer);
    for(let i=0;i<conditions.length;i++)
    {
        let con=conditions[i];

        let a=cells[con[0]];
        let b=cells[con[1]];
        let c=cells[con[2]];

        if(a=='' || b=='' || c=='')
            continue;

        if((a==b) && (b==c))
        {
            result.innerHTML=`Player ${a} won 🎉`;
            btns.forEach((btn)=>{
                btn.disabled=true;
            })
        }
    }
    
}

function reset(){
    cells =['','','','','','','','',''];
    btns.forEach((btn)=>{
        btn.innerHTML='';
    });
    
    currentPlayer='X';
    result.innerHTML=`Player ${currentPlayer} Turn`;

    btns.forEach((btn)=>{
        btn.disabled=false;
    });
    
    // console.log("this is reset");
}

document.querySelector('#reset').addEventListener('click',reset);


// assign onclick to all div 
btns.forEach((btn,i)=>{
    // console.log(btn);
    btn.addEventListener('click',()=>{
        tic(btn,i)
    })
})