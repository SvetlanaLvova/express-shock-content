
const planetInfo = document.getElementById('planets');
const planetInput = document.getElementById('planetName')
const btn = document.getElementById('planetBtn')

async function mainPlanet(){
  const response3 = await fetch('https://api.api-ninjas.com/v1/planets?name=' + `${planetInput.value}`, {
    method: 'GET',
    headers: { 'X-Api-Key': 'Ongjfvx/zE/ae1oTL1YI9g==98KxY8j7ZzAS1N01'},
    //contentType: 'application/json',
  })
  let answer3 = await response3.json(); //можно увидеть эти данные в console.log в dev tools (это объект). Дальше работаю сним, как хочу.
  console.log(answer3)
  return answer3

}

 btn.addEventListener('click', async (e) => {

  let result3 = await mainPlanet()

  if(result3.length > 0) {
planetInfo.innerText = `Название планеты: ${result3[0].name}, \n 
Расстояние в световых годах: ${result3[0].distance_light_year}, \n 
Масса: ${result3[0].mass}, \n 
Орбитальный период в земных днях: ${result3[0].period}, \n 
Радиус: ${result3[0].radius}, \n 
Температура в градусах Кельвина: ${result3[0].temperature}, \n 
`}
else{
  planetInfo.innerText = "Такая планета не найдена"
}
})
