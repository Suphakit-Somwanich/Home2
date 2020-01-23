let n =  Math.floor(Math.random()*100)+1;
let time = 10;
let numIn
let submitBt = document.querySelector('.submitBt');
let reBt = document.querySelector('.re');

document.querySelector('.re').style.visibility = 'hidden';

submitBt.addEventListener('click',()=>{
    numIn = document.querySelector('input').value;
    time--;
    // document.querySelector('.input').value = '';
    // document.querySelector('.input').focus();
    if(time > 0){
        document.getElementById('prev').innerHTML += " " + numIn;
        document.querySelector('input').value = '';
        document.querySelector('input').focus();
        if(numIn == n){
            // document.querySelector('submitBt').disabled = true;
            // document.querySelector('re').disabled = false;
            document.querySelector('input').disabled = "disabled";
            document.getElementById('showText').innerHTML = "Congratulation! You got it right!";
            document.querySelector('#dText').innerHTML = ""
            document.querySelector('.re').style.visibility = '';
            console.log(numIn)
            console.log(time)
        }else if(numIn > n){
        // document.getElementById('re').disabled = true;
        document.getElementById('showText').innerHTML = "Wrong!"
        document.querySelector('#dText').innerHTML = "Last guess was too high!"
        console.log(numIn)
        console.log(time)
    }else if(numIn < n){
        // document.getElementById('re').disabled = true;
        document.getElementById('showText').innerHTML = "Wrong!"
        document.querySelector('#dText').innerHTML = "Last guess was too low!"
        console.log(numIn)
        console.log(time)
    }else if(numIn == NaN){
        document.getElementById('showText').innerHTML = "Please input your number";
    }
    }else if(time == 0){
        document.querySelector('input').disabled = "disabled"
        // document.querySelector('#submitBt') = "disabled"
        document.getElementById('showText').innerHTML = "!!!GAME OVER!!!"
        document.querySelector('.re').style.visibility = '';
    }
});

reBt.addEventListener('click',() => {
    n =  Math.floor(Math.random()*100)+1;
    document.querySelector('input').value = '';
        document.querySelector('input').focus();
    document.getElementById('prev').innerHTML = '';
    document.getElementById('showText').innerHTML = '';
    document.querySelector('#dText').innerHTML = '';
    document.querySelector('.re').style.visibility = 'hidden';
    document.querySelector('input').disabled = ""
    time = 10;
    console.log(n)
});
