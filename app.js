const allplayers = () =>{
  document.getElementById('player-container').innerHTML = '';
  document.getElementById('spinner').style.display = 'block';
    const searchValue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      // console.log(data.player == null)
      if(data.player == null){
        document.getElementById('spinner').style.display = 'block';
      }
      else{
        showPlayersDetails(data.player)
        document.getElementById('spinner').style.display = 'none';
  
      }
    })


   
};

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
      <button  class="delete-btn btn btn-danger">Delete</button>
      <button onClick = "showDetails('${player.idPlayer}')" class="btn btn-success">Details</button>
    </div>
  </div>
    `
    parent.appendChild(div)
      const deleteBtn = document.getElementsByClassName('delete-btn');
      console.log(deleteBtn)
      for(const button of deleteBtn){
        button.addEventListener("click",(e)=>{
          console.log( e.target.parentNode.parentNode.parentNode)
          e.target.parentNode.parentNode.parentNode.style.display = "none"
        })
      }
    }
    console.log(players)
}

const showDetails = (info) => {
 

  const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}
  `
  fetch(url)
  .then(Response => Response.json())
  .then(data => setData(data.players[0]))
   
}

const setData = (info) => {
console.log(info.strGender)

  if (info.strGender == "Male") {
    console.log(document.getElementById('male'))
    document.getElementById("male").style.display = "block";
    document.getElementById("female").style.display = "none";
  } else {
   
    document.getElementById("female").style.display = "block";
    document.getElementById("male").style.display = "none";
  }
const showData = document.getElementById('detail-container').innerHTML=`
<div>
<img src="" alt="" />
<h4>Name: ${info.strPlayer}</h4>
</div>
`

}
