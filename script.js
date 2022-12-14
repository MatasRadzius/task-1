/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


function weight() {
    const ponds = document.getElementById('search').value * 2.2046;
    const gramus = document.getElementById('search').value / 0.0010000;
    const ounces = document.getElementById('search').value * 35.274;
    document.getElementById('ponds').textContent = ponds + " lb";
    document.getElementById('gramus').textContent = gramus + " g";
    document.getElementById('ounces').textContent = ounces + " oz";
}


document.getElementById("submit-btn").addEventListener("click", weight)