const searchBar = window.location.search
const parametroURL = new URLSearchParams(searchBar)
const id = parametroURL.get('id')
const urlId = 'https://xp41-soundgarden-api.herokuapp.com/events/' + id
const divContainer = document.getElementById("container");
const formDelete = document.getElementById("formDelete");
const buttonEnv = document.getElementById("fbuttonEnv");

async function getEvento(id){

    const response = await fetch(urlId)

    const dados = await response.json()

    nome.value = dados.name
    banner.value = dados.poster
    descricao.value = dados.description
    atracoes.value = dados.attractions
    data.value = dados.scheduled
    lotacao.value = dados.number_tickets

    console.log(id)
    console.log(id)

}


async function getItems(){
      const response = await fetch('https://xp41-soundgarden-api.herokuapp.com/events')
  
      const data = await response.json()
  
      data.map((evento) => {
          divContainer.innerHTML +=`
          <thead id="container">
          <tr>
          <th scope="col">#</th>
          <th scope="col">Data</th>
          <th scope="col">Titulo</th>
          <th scope="col">Atrações</th>
          <th scope="col">Ações</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <th scope="row">${evento._id}</th>
          <td>${evento.scheduled}</td>
          <td>${evento.name}</td>
          <td>${evento.name}</td>
          <td>
              <a href="reservas.html" class="btn btn-dark">ver reservas</a>
              <a href="/editar-evento.html?id=${evento._id}" class="btn btn-secondary">editar</a>
              <a href="/excluir-evento.html?id=${evento._id}" class="btn btn-danger">excluir</a>
          </td>
      </tr>
      </tbody>
          `
      })
      console.log(data)
  }
  
  if(!id){
    getItems()
}else{
    getEvento(id)
}

  async function edit(){

    const nome = document.getElementById('nome').value
    const banner = document.getElementById('banner').value
    const atracoes = document.getElementById('atracoes').value
    const descricao = document.getElementById('descricao').value
    const data = document.getElementById('data').value
    const objectDate = new Date(data)
    const dataISO = objectDate.toISOString()
    const lotacao = document.getElementById('lotacao').value
    
  
      try {
        const response = await fetch(urlId, {
          method: 'PUT',
          body: JSON.stringify({
            name: nome,
            poster: banner,
            attractions: atracoes,
            description: descricao,
            scheduled: dataISO,
            number_tickets: lotacao
          }),
          headers: { 'Content-type': 'application/json' }
        })
        const resposta = await response.json()
        alert('Evento editado com sucesso! ')
        console.log(resposta)

        window.location.href = 'admin.html'

      } catch (error) {
        alert('Erro ao editar')
        console.log(error)
      }
      
    }


    async function deleteEvent(){

      try {
        const response = await fetch(urlId, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          }
        })
        alert('O evento foi excluido para sempre!')

        window.location.href = 'admin.html'

      } catch (error) {
        console.log(error)
      }
    }
    
