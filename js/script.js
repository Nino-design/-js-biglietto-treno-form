 const kmPrice = 0.21;
 const userName = document.getElementById('credenziali').value;
 const distance = parseInt(document.getElementById('distanza').value);
 const userAge = document.getElementById('anni-utente').value;

 let journeyCost = distance * kmPrice;

 let finalCost;

 if(userAge === 'over-65'){
     finalCost = journeyCost - (journeyCost / 100) * 40;
 } else if(userAge === 'minorenni'){
    finalCost = journeyCost - (journeyCost / 100) * 20;
 }else{
     finalCost = journeyCost;
 }

