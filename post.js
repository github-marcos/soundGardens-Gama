//Informações vem do form "onsubmit"

function cadastrarEvento() {
  event.preventDefault() //evitar que a página atualize automaticamente
  //let url = 'https://xp41-soundgarden-api.herokuapp.com/events' //URL do API
  let banner = document.getElementById('banner')
  let atracoes = document.getElementById('atracoes')
  let descricao = document.getElementById('descricao')
  let data = document.getElementById('data')
  //let newData = data.toLocaleString('pt-br')

  let lotacao = document.getElementById('lotacao')

  console.log(nome)
  console.log(banner)
  console.log(atracoes)
  console.log(descricao)
  console.log(data)
  console.log(lotacao)

  addEvent()
}

async function addEvent() {
  try {
    event.preventDefault()
    const response = await fetch(
      'https://xp41-soundgarden-api.herokuapp.com/events',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          redirect: 'follow'
        },
        body: JSON.stringify({
          name: nome.value,
          poster: banner.value,
          attractions: [atracoes.value],
          description: descricao.value,
          scheduled: data.value,
          number_tickets: lotacao.value
        })
      }
    )

    const result = await response.text()
    alert('O evento cadastrado com sucesso!')

    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
