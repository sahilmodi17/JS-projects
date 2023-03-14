const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numberSet="1234567890";
const symbolSet="!@#$%^&*_-~()+/";


const passBox=document.getElementById("pass-box");
const totalChar=document.getElementById("total-char");
const upper=document.getElementById("upper-case");
const lower=document.getElementById("lower-case");
const num=document.getElementById("numbers");
const sym=document.getElementById("symbols");

const getRandomData = (dataset) =>{
    return (dataset[Math.floor(Math.random()* dataset.length)]);
}

const generatePassword = (password = "") =>{
    if(upper.checked){
        password += getRandomData(upperCase);
    }
    if(lower.checked){
        password += getRandomData(lowerCase);
    }
    if(num.checked){
        password += getRandomData(numberSet);
    }
    if(sym.checked){
        password += getRandomData(symbolSet);
    }
    
    

    if(password.length < totalChar.value)
    {
        return generatePassword(password);
    }

    passBox.innerText=truncateString(password,totalChar.value);
}

function truncateString(str,num)
{
    if(str.length > num)
    {
        let subStr = str.trim(0,num);
        return subStr;
    }
    else{
        return str;
    }
}

document.getElementById("btn").addEventListener(
        "click", function()
        {
            generatePassword();
        }
)