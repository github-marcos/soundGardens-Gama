const apiKey = '623bc253d2891ac70ab1cce4'
const listaDeEventos = document.querySelector('#newEvent')
const url = 'https://xp41-soundgarden-api.herokuapp.com/events'

async function getEvent() {
  try {
    const response = await fetch(
      url,

      {
        method: 'GET',
        headers: {
          Authorization: 'apiKey'
        }
      }
    )
    const evento = await response.json();
    console.log(response);   


    evento.forEach(body => {
      //for (let i = 0; i < 6; i++) {
      const card = `<article class="evento card p-5 m-3">
          <h2>${body.name} - ${body.scheduled}</h2>
          <h4>${body.attractions}</h4>
          <p>${body.description}</p>
          <a href="#" class="btn btn-primary">reservar ingresso</a>
          </article>`

      listaDeEventos.innerHTML += card

      //}
      console.log(card)
    })
  } catch (error) {
    console.log(error)
  }
}
// chamando a função
getEvent()
