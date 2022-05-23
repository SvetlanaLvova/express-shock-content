//фетч для API (шутки)

const jokes = document.getElementById('jokes')
async function mainJokes() {
  const response2 = await fetch('https://api.api-ninjas.com/v1/jokes?limit=1', {
    method: 'GET',
    headers: {
      'X-Api-Key': 'Ongjfvx/zE/ae1oTL1YI9g==98KxY8j7ZzAS1N01'
    },
    contentType: 'application/json',
  })
  let answer2 = await response2.json();
  let jokesText2 = answer2[0].joke; //joke это с сайта ключ 
  jokes.innerText = `${jokesText2}`
}
mainJokes()
