






const dona = document.querySelector('#dona');
let kilo = document.querySelector("#kg");
const btn = document.querySelector("#btn")
let javob = document.querySelector('#javob')

btn.addEventListener('click', ()=> {
  let result = dona.value / kilo.value
  javob.innerHTML = Math.floor(result)

})
