//фетч для API (случайный факт)
const fact = document.getElementById('fact')
async function main(){
  const response = await fetch('https://api.api-ninjas.com/v1/facts?limit=1', {
  method: 'GET',
  headers: { 'X-Api-Key': 'Ongjfvx/zE/ae1oTL1YI9g==98KxY8j7ZzAS1N01'},
  contentType: 'application/json',
})
let answer = await response.json();
let factText = answer[0].fact;
if (fact) fact.innerText = `${factText}`
}
main()

