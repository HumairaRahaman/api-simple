const allplayers = () =>{
    const searchValue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
    .then((Response) => Response.json())
    .then((data) => showPlayersDetails(data.player))
  
}

const showPlayersDetails = (players) => {
    for(const player of players){
        const parent = document.getElementById('player-container')
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card p-5 border">
    <div class="pro-pic">
      <img class="w-25" src="${player.strThumb}" alt="" />
    </div>
    <h5>Name:${player.strPlayer}</h5>
    <h2>Country:${player.strNationality}</h2>
    <p></p>
    <div class="allButton">
      <button class="btn btn-danger">Delete</button>
      <button onClick = "showDetails('hihi')" class="btn btn-success">Details</button>
    </div>
  </div>
    `
    parent.appendChild(div)
    }
    console.log(players)
}

const showDetails = (info) => {
    console.log(info)
}