const showResult = document.querySelector('#summa');
const inpVal = document.getElementById('inpVal');
const form = document.querySelector('form');
const btnShow = document.querySelector('#btnShow');
btnShow.addEventListener('click',(e)=>{
    if(inpVal.value === ''){
        const div = document.createElement('div');
        div.className='alert alert-danger remEl mt-3';
        div.id = 'remEl';
        div.appendChild(document.createTextNode('Iltimos raqam kiriting !'));
        const card = document.querySelector('.card');
        const h1 = document.querySelector('h1');
        card.insertBefore(div, h1);
        setTimeout(function(){
            document.querySelector('#remEl').remove();
        },3500);
    }else if(inpVal.value === '0'){
        const div = document.createElement('div');
        div.className='alert alert-danger remEl mt-3';
        div.id = 'remEl';
        div.appendChild(document.createTextNode('Iltimos 0 dan katta raqam kiriting !'));
        const card = document.querySelector('.card');
        const h1 = document.querySelector('h1');
        card.insertBefore(div, h1);
        setTimeout(function(){
            document.querySelector('#remEl').remove();
        },3500);
    }
    else{
        showResult.style.display = 'block';
        let UIcurrency$ = document.querySelector('.currency-select').value;
        UIcurrency$ = parseFloat(UIcurrency$,10);
        let UIinput = inpVal.value;
        let val = parseFloat(UIinput, 10);
    
        let sum = (UIinput*UIcurrency$).toFixed(2);
        console.log(sum);
        const UIsum = document.querySelector('#sum');
        UIsum.innerText = sum;
    }
    e.preventDefault();
});
