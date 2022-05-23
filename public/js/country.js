//фетч для API (страны)
console.log('===========================')

const countryInfo = document.getElementById('country');
const countryInput = document.getElementById('countryName')
const btn = document.getElementById('countryBtn')

async function mainCountry(){
  const response1 = await fetch('https://api.api-ninjas.com/v1/country?name=' + `${countryInput.value}`, {
    method: 'GET',
    headers: { 'X-Api-Key': 'Ongjfvx/zE/ae1oTL1YI9g==98KxY8j7ZzAS1N01'},
    //contentType: 'application/json',
  })
  let answer1 = await response1.json(); //можно увидеть эти данные в console.log в dev tools (это объект). Дальше работаю сним, как хочу.
  console.log(answer1)
  return answer1

}

btn.addEventListener('click', async (e) => {

 let result = await mainCountry()

 if(result.length > 0) {
countryInfo.innerText = `Название страны: ${result[0].name}, \n 
Cтолица: ${result[0].capital}, \n
Валюта: ${result[0].currency.name}, \n
Занятость в сельском хозяйстве: ${result[0].employment_agriculture}, \n
Занятость в промышленности: ${result[0].employment_industry}, \n
Услуги по трудоустройству: ${result[0].employment_services}, \n
Экспорт: ${result[0].exports}, \n
Плодовитость: ${result[0].fertility}, \n
Леса: ${result[0].forested_area}, \n
ВВП: ${result[0].gdp}, \n
Рост ВВП: ${result[0].gdp_growth}, \n
Импорт: ${result[0].imports}, \n
Младенческая смертность: ${result[0].infant_mortality}, \n
Интернет пользователи: ${result[0].internet_users}, \n
Население: ${result[0].population}, \n
Беженцы: ${result[0].refugees}, \n
Регион: ${result[0].region}, \n
Туристы: ${result[0].tourists}, \n
Безработица: ${result[0].unemployment}, \n
Городское население: ${result[0].urban_population}, \n
Рост городского населения: ${result[0].urban_population_growth}, \n
`}
else{
  countryInfo.innerText = "Такая страна не найдена"
}
})



/* Array

capital: "Kampala"
currency: {code: 'UGX', name: 'Uganda Shilling'}
employment_agriculture: 72.4
employment_industry: 6.6
employment_services: 20.9
exports: 3597
fertility: 5
forested_area: 10.4
gdp: 30098
gdp_growth: 8.9
gdp_per_capita: 704.4
homicide_rate: 10.5
imports: 7686
infant_mortality: 46.1
internet_users: 23.7
iso2: "UG"
life_expectancy_female: 65
life_expectancy_male: 60.4
name: "Uganda"
pop_density: 228.9
pop_growth: 3.6
population: 45741
post_secondary_enrollment_female: 4.1
post_secondary_enrollment_male: 5.6
primary_school_enrollment_female: 104.1
primary_school_enrollment_male: 101.3
refugees: 2445.8
region: "Eastern Africa"
secondary_school_enrollment_female: 21.8
secondary_school_enrollment_male: 27.5
sex_ratio: 97.2
surface_area: 241550
threatened_species: 266
tourists: 1402
unemployment: 1.9
urban_population: 24.4
urban_population_growth: 6 */


