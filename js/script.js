 const kmPrice = 0.21;
 
 
 const userAge = document.getElementById('anni-utente').value;

 let journeyCost = distance * kmPrice;

 console.log(journeyCost, typeof journeyCost);

 let typeOffer = document.querySelector('.offerta h4');

 let finalCost;

 if(userAge === 'over-65'){
     finalCost = journeyCost - (journeyCost / 100) * 40;
     typeOffer = 'Biglietto ridotto'
 } else if(userAge === 'minorenni'){
    finalCost = journeyCost - (journeyCost / 100) * 20;
    typeOffer = 'Biglietto ridotto';
 }else{
     finalCost = journeyCost;
     typeOffer = 'Biglietto standard';
 }

let wagonNumber = Math.floor(Math.random() * 10 + 1);
console.log(wagonNumber);

let codeCPD = Math.floor(Math.random() * 100 + 1);
console.log(codeCPD);

const showButt = getElementById('invio-dati')

showButt.addEventListener('click', function(){
    const userName = document.getElementById('credenziali').value;
    const distance = parseInt(document.getElementById('distanza').value);
    const userAge = document.getElementById('anni-utente').value;
    const typeOffer = document.querySelector('.offerta h4');

    const showName = document.querySelector('.passeggero h3');
    showName.innerHTML = userName;

}




);


